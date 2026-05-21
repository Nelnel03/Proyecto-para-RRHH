import React, { useState, useEffect } from 'react';

// Costa Rican / Standard Holidays for simulated calculation
const HOLIDAYS = [
  { month: 0, day: 1, name: 'Año Nuevo' },
  { month: 3, day: 11, name: 'Batalla de Rivas' },
  { month: 4, day: 1, name: 'Día del Trabajador' },
  { month: 6, day: 25, name: 'Anexión del Partido de Nicoya' },
  { month: 7, day: 2, name: 'Día de la Virgen de los Ángeles' },
  { month: 7, day: 15, name: 'Día de la Madre' },
  { month: 8, day: 15, name: 'Día de la Independencia' },
  { month: 11, day: 1, name: 'Día de la Abolición del Ejército' },
  { month: 11, day: 25, name: 'Navidad' },
];

function isHoliday(date) {
  const m = date.getMonth();
  const d = date.getDate();
  return HOLIDAYS.some(h => h.month === m && h.day === d);
}

function getHolidayName(date) {
  const m = date.getMonth();
  const d = date.getDate();
  const h = HOLIDAYS.find(h => h.month === m && h.day === d);
  return h ? h.name : '';
}

function calculateBusinessDays(startDate, endDate) {
  if (!startDate || !endDate) return { days: 0, holidaysSkipped: [] };
  
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { days: 0, holidaysSkipped: [] };
  }
  
  if (start > end) {
    return { days: 0, holidaysSkipped: [] };
  }
  
  let count = 0;
  const holidaysSkipped = [];
  const curDate = new Date(start);
  
  while (curDate <= end) {
    const dayOfWeek = curDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday = 0, Saturday = 6
    
    if (isWeekend) {
      // Skip weekend
    } else if (isHoliday(curDate)) {
      holidaysSkipped.push({
        date: curDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
        name: getHolidayName(curDate)
      });
    } else {
      count++;
    }
    curDate.setDate(curDate.getDate() + 1);
  }
  
  return { days: count, holidaysSkipped };
}

function VacacionesSection() {
  // Balance state
  const [balance, setBalance] = useState({
    available: 15,
    pending: 0,
    enjoyed: 6
  });

  // Form inputs
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [comments, setComments] = useState('');
  const [jefatura] = useState('Ing. Carlos Mendoza (Gerente de Operaciones)');
  
  // Computed values
  const [calculatedDays, setCalculatedDays] = useState(0);
  const [skippedHolidays, setSkippedHolidays] = useState([]);
  const [isAnticipatedEnough, setIsAnticipatedEnough] = useState(true);
  const [dateError, setDateError] = useState('');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  // Request History State
  const [requests, setRequests] = useState([
    {
      id: 'REQ-2026-001',
      startDate: '2026-02-10',
      endDate: '2026-02-13',
      days: 4,
      status: 'Aprobado',
      comments: 'Asuntos familiares.',
      dateSubmitted: '2026-01-20'
    },
    {
      id: 'REQ-2026-002',
      startDate: '2026-04-14',
      endDate: '2026-04-15',
      days: 2,
      status: 'Aprobado',
      comments: 'Trámite de mudanza.',
      dateSubmitted: '2026-03-25'
    }
  ]);

  // Accordion State for FAQs
  const [activeFaq, setActiveFaq] = useState(null);

  // Run calculation when dates change
  useEffect(() => {
    if (startDate && endDate) {
      const { days, holidaysSkipped } = calculateBusinessDays(startDate, endDate);
      setCalculatedDays(days);
      setSkippedHolidays(holidaysSkipped);
      
      const start = new Date(startDate + 'T00:00:00');
      const end = new Date(endDate + 'T00:00:00');
      
      if (start > end) {
        setDateError('La fecha de inicio no puede ser posterior a la fecha de finalización.');
      } else {
        setDateError('');
      }

      // Check for 15 days notice policy
      const today = new Date();
      // Reset hours for fair date comparison
      today.setHours(0, 0, 0, 0);
      const diffTime = start.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      setIsAnticipatedEnough(diffDays >= 15);
    } else {
      setCalculatedDays(0);
      setSkippedHolidays([]);
      setDateError('');
      setIsAnticipatedEnough(true);
    }
  }, [startDate, endDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!startDate || !endDate) {
      alert('Por favor complete las fechas de inicio y finalización.');
      return;
    }
    
    if (dateError) {
      alert(dateError);
      return;
    }
    
    if (calculatedDays === 0) {
      alert('La solicitud no incluye días hábiles válidos.');
      return;
    }
    
    if (calculatedDays > balance.available) {
      alert('Lo sentimos, no cuentas con suficientes días disponibles para realizar esta solicitud.');
      return;
    }

    // Add request
    const newRequest = {
      id: `REQ-2026-0${requests.length + 1}`,
      startDate,
      endDate,
      days: calculatedDays,
      status: 'Pendiente',
      comments: comments || 'Sin comentarios adicionales.',
      dateSubmitted: new Date().toISOString().split('T')[0]
    };

    setRequests([newRequest, ...requests]);
    
    // Update balance
    setBalance(prev => ({
      ...prev,
      available: prev.available - calculatedDays,
      pending: prev.pending + calculatedDays
    }));

    setIsSubmitSuccess(true);
    
    // Clear form
    setStartDate('');
    setEndDate('');
    setComments('');
    
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 6000);
  };

  const handleSimulateApproval = (id, days) => {
    setRequests(prevRequests => 
      prevRequests.map(req => 
        req.id === id ? { ...req, status: 'Aprobado' } : req
      )
    );
    setBalance(prev => ({
      ...prev,
      pending: Math.max(0, prev.pending - days),
      enjoyed: prev.enjoyed + days
    }));
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="vacaciones" className="vacaciones-section">
      <div className="vac-container">
        
        {/* Welcome banner */}
        <div className="vac-welcome-card">
          <div className="vac-welcome-badge">
            <span className="vac-badge-dot"></span>
            Módulo de Gestión de Descansos
          </div>
          <h2 className="vac-welcome-title">Bienvenido a tu Espacio de Bienestar</h2>
          <p className="vac-welcome-desc">
            Aquí podrás conocer tus derechos, revisar la normativa interna y realizar tu solicitud de vacaciones de manera rápida y transparente. Planifica tu tiempo de descanso con facilidad.
          </p>
        </div>

        {/* 1. Nuestro Reglamento de Vacaciones */}
        <div className="vac-reglamento-wrapper">
          <div className="vac-section-header">
            <span className="vac-section-label">Normativa Laboral</span>
            <h3 className="vac-section-title">1. Nuestro Reglamento de Vacaciones</h3>
            <p className="vac-section-sub">
              Garantizamos el descanso oportuno de todo el equipo y mantenemos la continuidad de las operaciones bajo los siguientes lineamientos:
            </p>
          </div>

          <div className="vac-reglamento-grid">
            <div className="vac-reg-card">
              <div className="vac-reg-icon-box card-icon-blue">
                <span>✈️</span>
              </div>
              <h4 className="vac-reg-card-title">Derecho al Descanso</h4>
              <p className="vac-reg-card-desc">
                Por cada 50 semanas de trabajo continuo, tienes derecho a un período mínimo de dos semanas de vacaciones pagadas (o la parte proporcional en caso de contratos que terminen antes).
              </p>
            </div>

            <div className="vac-reg-card">
              <div className="vac-reg-icon-box card-icon-cyan">
                <span>📅</span>
              </div>
              <h4 className="vac-reg-card-title">Planificación Anticipada</h4>
              <p className="vac-reg-card-desc">
                Para asegurar que tu equipo pueda cubrir tus tareas, te solicitamos registrar tu solicitud con al menos 15 días de anticipación (salvo casos de fuerza mayor).
              </p>
            </div>

            <div className="vac-reg-card">
              <div className="vac-reg-icon-box card-icon-amber">
                <span>✂️</span>
              </div>
              <h4 className="vac-reg-card-title">Fraccionamiento</h4>
              <p className="vac-reg-card-desc">
                Las vacaciones se pueden dividir en tractos si existe un acuerdo mutuo entre tú y tu jefatura, siempre velando por tu bienestar y descanso efectivo.
              </p>
            </div>

            <div className="vac-reg-card">
              <div className="vac-reg-icon-box card-icon-blue">
                <span>⚠️</span>
              </div>
              <h4 className="vac-reg-card-title">Acumulación</h4>
              <p className="vac-reg-card-desc">
                El objetivo de las vacaciones es el descanso físico y mental, por lo que la acumulación de períodos está restringida y requiere la aprobación previa de la Dirección de Recursos Humanos.
              </p>
            </div>
          </div>
        </div>

        {/* 2. ¿Cómo solicitar tus vacaciones? */}
        <div className="vac-steps-wrapper">
          <div className="vac-section-header">
            <span className="vac-section-label">Guía de Trámite</span>
            <h3 className="vac-section-title">📝 2. ¿Cómo solicitar tus vacaciones?</h3>
            <p className="vac-section-sub">
              Hemos simplificado el proceso para que puedas hacer tu trámite en tres sencillos pasos, directamente desde tu teléfono o computadora:
            </p>
          </div>

          <div className="vac-steps-timeline">
            <div className="vac-step-item">
              <div className="vac-step-number">1</div>
              <div className="vac-step-content">
                <h4 className="vac-step-title">Revisa tu Saldo</h4>
                <p className="vac-step-desc">
                  En la parte superior de tu perfil de vacaciones podrás ver de forma automatizada cuántos días tienes acumulados disponibles a la fecha.
                </p>
              </div>
            </div>

            <div className="vac-step-item">
              <div className="vac-step-number">2</div>
              <div className="vac-step-content">
                <h4 className="vac-step-title">Completa el Formulario</h4>
                <p className="vac-step-desc">
                  Llena los campos obligatorios indicando la fecha de inicio, la fecha de regreso y el motivo (opcional).
                </p>
              </div>
            </div>

            <div className="vac-step-item">
              <div className="vac-step-number">3</div>
              <div className="vac-step-content">
                <h4 className="vac-step-title">Envía y Rastrea</h4>
                <p className="vac-step-desc">
                  Tu jefatura directa recibirá una notificación para revisar y aprobar. Se te notificará de inmediato a tu correo y plataforma cuando cambie de estado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario y Dashboard de Saldo */}
        <div className="vac-dashboard-grid">
          
          {/* Left Column: Balance & Form */}
          <div className="vac-dashboard-left">
            
            {/* Balance Panel */}
            <div className="vac-balance-panel">
              <h4 className="vac-panel-title">Resumen de tu Saldo de Vacaciones</h4>
              <div className="vac-balance-cards">
                <div className="vac-balance-card available">
                  <div className="vac-balance-value">{balance.available}</div>
                  <div className="vac-balance-label">Días Disponibles</div>
                  <div className="vac-balance-glow"></div>
                </div>
                
                <div className="vac-balance-card pending">
                  <div className="vac-balance-value">{balance.pending}</div>
                  <div className="vac-balance-label">Días Pendientes</div>
                </div>

                <div className="vac-balance-card enjoyed">
                  <div className="vac-balance-value">{balance.enjoyed}</div>
                  <div className="vac-balance-label">Días Disfrutados</div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="vac-form-panel">
              <h4 className="vac-panel-title">Formulario de Solicitud Digital</h4>
              <p className="vac-panel-subtitle">Ingresa las fechas correspondientes para enviar tu solicitud.</p>

              {isSubmitSuccess && (
                <div className="vac-success-banner">
                  <span className="success-icon">✔️</span>
                  <div>
                    <strong>¡Solicitud enviada con éxito!</strong>
                    <p>Tu jefatura directa ha sido notificada. Podrás ver la solicitud en el historial.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="vac-request-form">
                
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="startDate">Fecha de Inicio del Descanso</label>
                    <input 
                      type="date" 
                      id="startDate"
                      className="vac-date-input"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="endDate">Fecha de Finalización</label>
                    <input 
                      type="date" 
                      id="endDate"
                      className="vac-date-input"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                {dateError && (
                  <div className="vac-error-text">
                    ⚠️ {dateError}
                  </div>
                )}

                {/* Auto Calculated Days Details */}
                {startDate && endDate && !dateError && (
                  <div className="vac-calculation-box">
                    <div className="calc-main-row">
                      <span className="calc-label">Total de Días Hábiles:</span>
                      <span className="calc-value">{calculatedDays} {calculatedDays === 1 ? 'día' : 'días'}</span>
                    </div>
                    
                    <p className="calc-notice">
                      * Cálculo automático que excluye fines de semana y feriados.
                    </p>

                    {skippedHolidays.length > 0 && (
                      <div className="calc-holidays-skipped">
                        <strong>Feriados omitidos en el período:</strong>
                        <div className="holidays-tag-list">
                          {skippedHolidays.map((h, i) => (
                            <span key={i} className="holiday-tag" title={h.name}>
                              📅 {h.date} ({h.name})
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {!isAnticipatedEnough && (
                      <div className="calc-warning">
                        ⚠️ <strong>Aviso de Plazo:</strong> Esta solicitud tiene menos de 15 días de anticipación. Requerirá una justificación detallada y aprobación excepcional de tu jefatura.
                      </div>
                    )}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="jefatura">Jefatura Inmediata</label>
                  <input 
                    type="text" 
                    id="jefatura"
                    className="vac-input-readonly"
                    value={jefatura}
                    readOnly
                  />
                  <small className="form-help-text">Campo auto-completado basado en tu organigrama laboral.</small>
                </div>

                <div className="form-group">
                  <label htmlFor="comments">Comentarios o Notas Adicionales (Opcional)</label>
                  <textarea 
                    id="comments" 
                    className="vac-textarea"
                    rows="3"
                    placeholder="Describe si es necesario coordinar alguna cobertura o detalles de fuerza mayor..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="vac-btn-submit"
                  disabled={!!dateError || calculatedDays === 0}
                >
                  <span>Enviar Solicitud</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: History & FAQs */}
          <div className="vac-dashboard-right">
            
            {/* Request History */}
            <div className="vac-history-panel">
              <h4 className="vac-panel-title">Historial de Solicitudes</h4>
              <p className="vac-panel-subtitle">Revisa el estado de tus solicitudes enviadas.</p>
              
              <div className="vac-history-list">
                {requests.map((req) => (
                  <div key={req.id} className="vac-history-card">
                    <div className="history-card-header">
                      <span className="req-id">{req.id}</span>
                      <span className={`status-badge ${req.status.toLowerCase()}`}>
                        {req.status === 'Pendiente' && <span className="status-pulse-dot"></span>}
                        {req.status}
                      </span>
                    </div>

                    <div className="history-card-dates">
                      <div>
                        <small>Inicio</small>
                        <p>{req.startDate}</p>
                      </div>
                      <div>
                        <small>Finalización</small>
                        <p>{req.endDate}</p>
                      </div>
                      <div>
                        <small>Días Hábiles</small>
                        <p className="days-number">{req.days}</p>
                      </div>
                    </div>

                    <p className="history-card-comments">
                      <strong>Comentarios:</strong> {req.comments}
                    </p>

                    <div className="history-card-footer">
                      <small className="date-submitted">Enviada: {req.dateSubmitted}</small>
                      
                      {/* Simulador de aprobación para interactividad */}
                      {req.status === 'Pendiente' && (
                        <button 
                          className="btn-approve-simulate"
                          onClick={() => handleSimulateApproval(req.id, req.days)}
                          title="Simula que tu jefatura aprueba la solicitud para ver cómo se actualiza el saldo."
                        >
                          Simular Aprobación Jefatura
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preguntas Frecuentes (FAQ Corto) */}
            <div className="vac-faq-panel">
              <h4 className="vac-panel-title">Preguntas Frecuentes (FAQ)</h4>
              <p className="vac-panel-subtitle">Respuestas rápidas a las dudas comunes sobre vacaciones.</p>

              <div className="vac-faq-accordion">
                <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(0)}>
                    <span>¿Qué pasa si cae un día feriado dentro de mis vacaciones?</span>
                    <span className="faq-icon"></span>
                  </button>
                  <div className="faq-answer">
                    <p>
                      Los feriados de ley que coincidan con tu período de vacaciones no se computan como días de vacaciones disfrutados; se mantienen como días feriados según la normativa laboral.
                    </p>
                  </div>
                </div>

                <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(1)}>
                    <span>¿Con cuánta antelación me avisa la empresa sobre la aprobación?</span>
                    <span className="faq-icon"></span>
                  </button>
                  <div className="faq-answer">
                    <p>
                      Una vez enviada la solicitud, las jefaturas tienen un plazo máximo de 3 días hábiles para dar respuesta al trámite.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default VacacionesSection;
