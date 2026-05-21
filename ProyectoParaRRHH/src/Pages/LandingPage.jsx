import DeloitteHeroSection from '../components/DeloitteHeroSection';
import InfoCard from '../components/InfoCard';
import ChatbotPreview from '../components/ChatbotPreview';
import Footer from '../components/Footer';
import QuienesSomos from '../components/QuienesSomos';
import QueHacemos from '../components/QueHacemos';
import NuestroEnfoque from '../components/NuestroEnfoque';

function LandingPage() {
  // Configuración de las tarjetas principales de navegación
  const mainServices = [
    {
      title: "Consultas Generales",
      description: "Preguntas frecuentes sobre políticas, horarios, código de conducta y soporte general al empleado.",
      icon: "❓",
      linkId: "consultas",
      iconColorClass: "card-icon-blue"
    },
    {
      title: "Vacaciones y Descansos",
      description: "Consulta de días acumulados, plazos de solicitud, días festivos del año y el proceso de aprobación.",
      icon: "✈️",
      linkId: "vacaciones",
      iconColorClass: "card-icon-cyan"
    },
    {
      title: "Trámites Administrativos",
      description: "Formatos de solicitud, cartas de recomendación laboral, actualización de datos personales y nóminas.",
      icon: "📄",
      linkId: "tramites",
      iconColorClass: "card-icon-amber"
    }
  ];

  return (
    <div className="app-container">
      {/* 1. Deloitte Hero Section (Navbar + Hero integrados) */}
      <DeloitteHeroSection />

      <main className="main-content">

        {/* 2. Quiénes Somos */}
        <QuienesSomos />

        {/* 3. Qué Hacemos */}
        <QueHacemos />

        {/* 4. Nuestro Enfoque */}
        <NuestroEnfoque />

        {/* 5. Panel de Accesos Rápidos (Tarjetas de Navegación) */}
        <section className="section-container" style={{ padding: '40px 24px 80px 24px' }}>
          <div className="section-header">
            <h2>¿Cómo podemos ayudarte hoy?</h2>
            <p>
              Explora las tres áreas principales de consultas. Haz clic en cualquiera de ellas para ir directamente a la sección informativa.
            </p>
          </div>
          <div className="cards-grid">
            {mainServices.map((service, index) => (
              <InfoCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkId={service.linkId}
                iconColorClass={service.iconColorClass}
              />
            ))}
          </div>
        </section>

        {/* 4. Guía de Pasos (Diseño a prueba de tontos) */}
        <section className="placeholder-section">
          <div className="section-container" style={{ padding: '20px 24px' }}>
            <div className="section-header">
              <h2>¿Cómo funciona este portal?</h2>
              <p>El portal está diseñado para ser sumamente intuitivo y amigable para todos.</p>
            </div>
            
            <div className="foolproof-steps">
              <div className="step-card">
                <div className="step-num">1</div>
                <h4>Elige tu Tema</h4>
                <p>Navega a la sección correspondiente (Consultas, Vacaciones o Trámites) usando el menú superior o las tarjetas.</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h4>Lee la Información</h4>
                <p>Revisa la sección detallada abajo donde encontrarás instrucciones paso a paso, calendarios o documentos para descargar.</p>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h4>Resuelve con la IA</h4>
                <p>Si la información de la sección no es suficiente, utiliza nuestro Chatbot de RRHH (próximamente activo) para resolver dudas complejas.</p>
              </div>
            </div>
          </div>
         </section>

        {/* Chatbot Preview - Prominente justo antes de la información detallada */}
        <ChatbotPreview />

        {/* 5. Contenedores de Información Destinados (Slots para el Usuario) */}
        <section className="section-container" style={{ padding: '80px 24px' }}>
          
          <div className="section-header">
            <h2>Secciones Informativas Detalladas</h2>
            <p>Aquí se encuentra la información definitiva de tu empresa. Por el momento, hemos preparado los contenedores marcados para que puedas rellenarlos fácilmente.</p>
          </div>

          {/* SLOT 1: CONSULTAS GENERALES */}
          <div id="consultas" className="info-slot">
            <div className="info-slot-header">
              <div className="info-slot-title">
                <span style={{ fontSize: '1.8rem' }}>❓</span>
                <h3>1. Consultas Generales y Preguntas Frecuentes</h3>
              </div>
              <div className="badge badge-info">Sección A</div>
            </div>

            {/* Contenido completo de Consultas Generales y FAQ */}
            <div className="info-slot-body" style={{ padding: '0' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-tertiary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--glass-border)' }}>

                {/* Intro */}
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '28px', lineHeight: 1.65 }}>
                  ¿Tienes dudas sobre tus derechos, obligaciones o los procesos internos de la empresa? Antes de abrir un tiquete o enviar un correo, revisa nuestro centro de respuestas rápidas. Hemos compilado y simplificado las consultas más comunes del equipo.
                </p>

                {/* 1. Licencias Especiales y Permisos por Luto */}
                <h4 style={{ fontSize: '1.2rem', margin: '0 0 14px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🖤 1. Licencias Especiales y Permisos por Luto
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-warning)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>¿Cuántos días me corresponden por el fallecimiento de un familiar?</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Ante la pérdida de un familiar cercano, la empresa te otorga una licencia con goce de salario. Los días se asignan según el grado de consanguinidad:<br />
                      • <strong>Primer Grado</strong> (Padres, hijos, cónyuge o conviviente formal): 5 días hábiles consecutivos.<br />
                      • <strong>Segundo Grado</strong> (Hermanos, abuelos, nietos): 3 días hábiles consecutivos.
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-warning)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>¿Cómo debo reportar una ausencia por fallecimiento?</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Solo debes notificar a tu jefatura inmediata por el medio más rápido posible. Al regresar, dispones de 5 días hábiles para adjuntar el comprobante (acta de defunción o constancia de la funeraria) a través del módulo de Gestión de Trámites.
                    </span>
                  </div>
                </div>

                {/* 2. Vacaciones y Días Libres */}
                <h4 style={{ fontSize: '1.2rem', margin: '0 0 14px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  📅 2. Vacaciones y Días Libres
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>¿Puedo pedir adelanto de vacaciones si aún no cumplo el año laborado?</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      La ley estipula el derecho a las vacaciones al cumplir las 50 semanas de servicio. Sin embargo, bajo situaciones excepcionales y previa coordinación y aprobación de tu jefatura y RRHH, se pueden valorar adelantos proporcionales a los días ya devengados.
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>¿Qué pasa si me enfermo estando en mi período de vacaciones?</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Si cuentas con una incapacidad formal emitida por la CCSS o avalada por el seguro médico institucional, el período de vacaciones se suspende temporalmente mientras dure la incapacidad y se reactivará posteriormente.
                    </span>
                  </div>
                </div>

                {/* 3. Dudas Legales y Ambiente Laboral */}
                <h4 style={{ fontSize: '1.2rem', margin: '0 0 14px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ⚖️ 3. Dudas Legales y Ambiente Laboral
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-primary)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>¿Cómo se calcula el pago de los días feriados?</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      El pago de los feriados depende de la modalidad de tu contrato. En los contratos mensuales, todos los días del mes se pagan por igual (sean hábiles o feriados). Si se te solicita trabajar un feriado de pago obligatorio, se remunera con pago doble.
                    </span>
                  </div>
                   <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-primary)' }}>
                     <strong style={{ display: 'block', marginBottom: '6px' }}>¿Cuándo y cómo se calcula el Aguinaldo?</strong>
                     <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                       Se calcula sumando todos los salarios ordinarios y extraordinarios devengados desde el 1 de diciembre del año anterior hasta el 30 de noviembre del año en curso, y el resultado se divide entre 12. Se deposita en los primeros días de diciembre (límite legal: 20 de diciembre).
                     </span>
                   </div>
                 </div>

                {/* 4. Asistente Virtual / Chatbot CTA */}
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)' }}>
                  <h4 style={{ fontSize: '1.2rem', margin: '0 0 12px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    💬 ¿No encontraste lo que buscabas? ¡Pregúntale a nuestro Asistente Virtual!
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
                    Si tienes una duda muy específica, no te preocupes. Nuestro chatbot inteligente está disponible 24/7 para ayudarte a navegar por el reglamento interno, calcular estimaciones de días o guiarte en tus trámites sin perder tiempo.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '12px 14px', borderRadius: '10px', fontSize: '0.88rem' }}>
                      <strong>🔍 Búsqueda Instantánea</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>Pregúntale cosas como: "¿Cuántos días me dan si fallece mi abuelo?" o "¿Cuándo pagan el aguinaldo?" y te dará la respuesta exacta basada en nuestro reglamento.</span>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', padding: '12px 14px', borderRadius: '10px', fontSize: '0.88rem' }}>
                      <strong>📊 Consultas de Saldo Rápidas</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>Puedes escribirle "¿Cuántos días de vacaciones me quedan?" y, tras validar tu identidad, te mostrará tu saldo actual.</span>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', padding: '12px 14px', borderRadius: '10px', fontSize: '0.88rem' }}>
                      <strong>📋 Guía de Trámites</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>Si le dices "Necesito una constancia de salario", el chatbot te enviará directamente el enlace al formulario correcto o te explicará los requisitos.</span>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', padding: '12px 14px', borderRadius: '10px', fontSize: '0.88rem' }}>
                      <strong>🎟️ Escalabilidad Humana</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>Si tu consulta es demasiado compleja, el chatbot creará automáticamente un tiquete de soporte y lo derivará con un agente humano de RRHH.</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(220, 205, 184, 0.08)', border: '1px solid var(--accent-primary)', padding: '14px 16px', borderRadius: '10px', fontSize: '0.88rem' }}>
                    <strong>🛠️ Interfaz del Chat (Recomendación para React/Móvil):</strong><br />
                    Usa botones de respuesta rápida (Quick Replies) apenas se abra la ventana.<br /><br />
                    <em>Ejemplo de flujo de bienvenida:</em><br />
                    "¡Hola, [Nombre]! 👋 Soy tu asistente de RRHH. ¿En qué te puedo colaborar hoy?"<br />
                    <span style={{ color: 'var(--accent-primary)' }}>[ 📅 Consultar mis vacaciones ] [ 🖤 Licencia por fallecimiento ] [ 📄 Pedir constancia salarial ] [ ⚖️ Otra consulta legal ]</span>
                  </div>
                </div>

               </div>
             </div>
           </div>

          {/* SLOT 2: VACACIONES */}
          <div id="vacaciones" className="info-slot">
            <div className="info-slot-header">
              <div className="info-slot-title">
                <span style={{ fontSize: '1.8rem' }}>✈️</span>
                <h3>2. Reglamento y Solicitud de Vacaciones</h3>
              </div>
              <div className="badge badge-info">Sección B</div>
            </div>

            {/* Contenido completo de Reglamento y Solicitud de Vacaciones */}
            <div className="info-slot-body" style={{ padding: '0' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-tertiary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--glass-border)' }}>
                
                {/* Welcome */}
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '28px', lineHeight: 1.65 }}>
                  Bienvenido al módulo de gestión de descansos. Aquí podrás conocer tus derechos, revisar la normativa interna y realizar tu solicitud de vacaciones de manera rápida y transparente.
                </p>

                {/* 1. Reglamento */}
                <h4 style={{ fontSize: '1.25rem', margin: '0 0 12px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ⚖️ 1. Nuestro Reglamento de Vacaciones
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
                  Para garantizar el descanso oportuno de todo el equipo y mantener la continuidad de las operaciones, nos regimos bajo los siguientes lineamientos basados en la legislación laboral vigente:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>Derecho al Descanso</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Por cada 50 semanas de trabajo continuo, tienes derecho a un período mínimo de dos semanas de vacaciones pagadas (o la parte proporcional en caso de contratos que terminen antes).
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>Planificación Anticipada</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Para asegurar que tu equipo pueda cubrir tus tareas, te solicitamos registrar tu solicitud con al menos 15 días de anticipación (salvo casos de fuerza mayor).
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>Fraccionamiento</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Las vacaciones se pueden dividir en tractos si existe un acuerdo mutuo entre tú y tu jefatura, siempre velando por tu bienestar y descanso efectivo.
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>Acumulación</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      El objetivo de las vacaciones es el descanso físico y mental, por lo que la acumulación de períodos está restringida y requiere la aprobación previa de la Dirección de Recursos Humanos.
                    </span>
                  </div>
                </div>

                {/* 2. Cómo solicitar */}
                <h4 style={{ fontSize: '1.25rem', margin: '0 0 12px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  📝 2. ¿Cómo solicitar tus vacaciones?
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
                  Hemos simplificado el proceso para que puedas hacer tu trámite en tres sencillos pasos, directamente desde tu teléfono o computadora:
                </p>

                <ol style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  <li style={{ marginBottom: '8px' }}><strong>Revisa tu Saldo:</strong> En la parte superior de tu perfil podrás ver de forma automatizada cuántos días tienes acumulados disponibles a la fecha.</li>
                  <li style={{ marginBottom: '8px' }}><strong>Completa el Formulario:</strong> Llena los campos obligatorios indicando la fecha de inicio, la fecha de regreso y el motivo (opcional).</li>
                  <li><strong>Envía y Rastrea:</strong> Tu jefatura directa recibirá una notificación para revisar y aprobar la solicitud. Se te notificará de inmediato a tu correo y plataforma cuando el estado cambie a "Aprobado".</li>
                </ol>

                {/* Formulario */}
                <h4 style={{ fontSize: '1.15rem', margin: '24px 0 10px 0', color: 'var(--text-primary)' }}>📥 Formulario de Solicitud Digital</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  💡 Espacio reservado para el componente de UI del formulario.
                </p>
                <div style={{ background: 'var(--bg-secondary)', padding: '16px 20px', borderRadius: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  <strong>Campos recomendados para tu Base de Datos / Formulario React:</strong><br />
                  📅 Fecha de Inicio del Descanso<br />
                  📅 Fecha de Finalización<br />
                  🔢 Total de Días Solicitados (Cálculo automático que excluye fines de semana o feriados según la política de la empresa).<br />
                  👤 Jefatura Inmediata (Campo auto-completado).<br />
                  💬 Comentarios o Notas Adicionales (Opcional).
                </div>

                {/* FAQ */}
                <h4 style={{ fontSize: '1.15rem', margin: '0 0 12px 0', color: 'var(--text-primary)' }}>❓ Preguntas Frecuentes (FAQ Corto)</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>¿Qué pasa si cae un día feriado dentro de mis vacaciones?</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Los feriados de ley que coincidan con tu período de vacaciones no se computan como días de vacaciones disfrutados; se mantienen como días feriados según la normativa laboral.
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>¿Con cuánta antelación me avisa la empresa sobre la aprobación?</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Una vez enviada la solicitud, las jefaturas tienen un plazo máximo de 3 días hábiles para dar respuesta al trámite.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SLOT 3: TRÁMITES ADMINISTRATIVOS */}
          <div id="tramites" className="info-slot">
            <div className="info-slot-header">
              <div className="info-slot-title">
                <span style={{ fontSize: '1.8rem' }}>📄</span>
                <h3>3. Gestión de Trámites Administrativos</h3>
              </div>
              <div className="badge badge-info">Sección C</div>
            </div>

            {/* Contenido completo del Módulo de Trámites Administrativos */}
            <div className="info-slot-body" style={{ padding: '0' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-tertiary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--glass-border)' }}>

                {/* Welcome */}
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '28px', lineHeight: 1.65 }}>
                  Bienvenido al centro de servicios al colaborador. En este espacio puedes autogestionar tus documentos, actualizar tu información y tramitar solicitudes institucionales de forma digital, sin filas y con total confidencialidad.
                </p>

                {/* 1. Catálogo de Trámites */}
                <h4 style={{ fontSize: '1.25rem', margin: '0 0 12px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  📋 1. Catálogo de Trámites Disponibles
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
                  Hemos digitalizado los procesos más frecuentes para que los resuelvas en minutos:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>📄 Constancias de Salario y Trabajo</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Descarga de forma automatizada o solicita tu constancia laboral con el desglose de ingresos para trámites bancarios, visados o personales.
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>🔄 Actualización de Datos Personales</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Informa de manera inmediata cambios en tu lugar de residencia, número de teléfono, estado civil o cuentas bancarias para el depósito de la planilla.
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>🎓 Comprobantes de Estudio</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Sube tus certificados técnicos, títulos universitarios o comprobantes de asistencia a capacitaciones para actualizar tu expediente profesional.
                    </span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>💳 Gestión de Cuentas para Planilla</strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Solicita el cambio o apertura de la cuenta bancaria (IBAN) donde recibes tus pagos quincenales o mensuales.
                    </span>
                  </div>
                </div>

                {/* 2. Flujo de Gestión */}
                <h4 style={{ fontSize: '1.25rem', margin: '0 0 12px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ⚙️ 2. Nuestro Flujo de Gestión (¿Cómo funciona?)
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
                  Para que tengas total claridad de qué pasa después de enviar un trámite, nos basamos en tres etapas:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <strong>1. Recepción y Registro</strong><br />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Al enviar tu formulario, el sistema genera un número de tiquete único y asigna el trámite al encargado de RRHH.</span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <strong>2. Validación Técnica</strong><br />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Revisamos que la documentación adjunta cumpla con los requisitos legales e institucionales vigentes.</span>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <strong>3. Entrega Digital</strong><br />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Recibes el documento firmado digitalmente o la confirmación del cambio directamente en tu perfil y correo.</span>
                  </div>
                </div>

                {/* Tiempos de Respuesta */}
                <h4 style={{ fontSize: '1.1rem', margin: '20px 0 10px 0', color: 'var(--text-primary)' }}>🕒 Tiempos de Respuesta Estimados</h4>
                <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', background: 'var(--bg-secondary)', borderRadius: '10px', overflow: 'hidden' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-primary)' }}>
                        <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '1px solid var(--glass-border)' }}>Tipo de Trámite</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '1px solid var(--glass-border)' }}>Tiempo de Respuesta</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '1px solid var(--glass-border)' }}>Formato de Entrega</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>Constancia de Salario Estándar</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>Inmediato (Automatizado)</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>PDF Descargable</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>Constancia Especial (Bancos/Embajadas)</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>2 días hábiles</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>PDF Firmado Digitalmente</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>Actualización de Cuenta IBAN / Planilla</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>3 días hábiles</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>Notificación de Sistema</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 14px' }}>Actualización de Expediente (Títulos)</td>
                        <td style={{ padding: '10px 14px' }}>5 días hábiles</td>
                        <td style={{ padding: '10px 14px' }}>Confirmación en Perfil</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Formulario */}
                <h4 style={{ fontSize: '1.15rem', margin: '24px 0 10px 0', color: 'var(--text-primary)' }}>📥 Bandeja de Solicitud Digital</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  💡 Espacio reservado para el selector de trámites de la plataforma.
                </p>
                <div style={{ background: 'var(--bg-secondary)', padding: '16px 20px', borderRadius: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  <strong>Campos recomendados para tu lógica en React / Base de Datos:</strong><br />
                  🔽 Tipo de Trámite (Menú desplegable: Constancia, Actualización de datos, etc.)<br />
                  📝 Detalle o Motivo de la Solicitud (Campo de texto libre)<br />
                  📎 Adjuntar Archivos / Comprobantes (Input de tipo file para PDF o imágenes)
                </div>

                {/* Tips */}
                <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid var(--accent-secondary)', padding: '14px 18px', borderRadius: '10px', fontSize: '0.88rem' }}>
                  <strong>💡 Tips de UI/UX recomendados:</strong><br />
                  • Descarga Directa: Genera constancias estándar en PDF automáticamente desde la base de datos.<br />
                  • Historial de Trámites: Agrega una tabla "Mis Tiquetes" con estados (En Revisión, Completado, Rechazado).
                </div>

              </div>
            </div>
          </div>

         </section>

      </main>

      {/* 7. Pie de Página */}
      <Footer />
    </div>
  );
}

export default LandingPage;
