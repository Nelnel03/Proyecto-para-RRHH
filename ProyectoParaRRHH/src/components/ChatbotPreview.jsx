import React from 'react';

function ChatbotPreview() {
  return (
    <div id="chatbot-preview" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="section-container" style={{ maxWidth: '900px' }}>
        
        <div className="section-header">
          <div className="badge badge-upcoming">Próxima Integración</div>
          <h2>Asistente Virtual de RRHH</h2>
          <p>
            Próximamente incorporaremos un chatbot inteligente que resolverá tus dudas sobre vacaciones, trámites y normativas corporativas las 24 horas del día. ¡Mira una vista previa de cómo funcionará!
          </p>
        </div>

        {/* Contenedor del Simulador de Chat */}
        <div className="chatbot-preview-container">
          
          {/* Cabecera del Chatbot */}
          <div className="chatbot-header">
            <div className="chatbot-user-status">
              <div className="chatbot-avatar">💬</div>
              <div className="chatbot-info">
                <h4>Asistente Virtual RRHH</h4>
                <div className="chatbot-status">
                  <span className="status-dot"></span>
                  <span>En línea (Simulación)</span>
                </div>
              </div>
            </div>
            <div className="badge badge-upcoming" style={{ fontSize: '0.65rem' }}>IA Beta</div>
          </div>

          {/* Mensajes del Chat */}
          <div className="chatbot-messages">
            <div className="chat-bubble bubble-bot">
              ¡Hola! Soy tu asistente de Recursos Humanos. Puedo ayudarte a consultar tus días de vacaciones, guiarte en tus trámites administrativos o responder dudas generales de la empresa. ¿Qué deseas consultar hoy?
            </div>
            
            <div className="chat-interactive-options">
              <button className="interactive-option-btn" onClick={() => alert("Simulación: Has seleccionado 'Consultar Vacaciones'. El chatbot real responderá con tu saldo de días.")}>
                ✈️ ¿Cuántos días de vacaciones tengo?
              </button>
              <button className="interactive-option-btn" onClick={() => alert("Simulación: Has seleccionado 'Trámites de Nómina'. El chatbot real te dará el enlace de descarga.")}>
                📄 ¿Cómo descargo mi recibo de nómina?
              </button>
              <button className="interactive-option-btn" onClick={() => alert("Simulación: Has seleccionado 'Solicitud de Constancia'. El chatbot real iniciará la solicitud automática.")}>
                💼 Necesito una constancia laboral
              </button>
            </div>

            <div className="chat-bubble bubble-user">
              ¿Cuál es el proceso para solicitar mis vacaciones pendientes?
            </div>

            <div className="chat-bubble bubble-bot">
              ¡Claro! El proceso es muy sencillo:
              <br /><br />
              1. Revisa tu saldo de días acumulados (puedes verlo en la sección de "Vacaciones" abajo).
              <br />
              2. Llena la solicitud digital con las fechas requeridas.
              <br />
              3. Tu jefe directo recibirá una notificación para autorizarla en un plazo máximo de 48 horas.
              <br /><br />
              ¿Te gustaría que te envíe el enlace directo al formulario de solicitud?
            </div>
          </div>

          {/* Barra de entrada simulada */}
          <div className="chatbot-input-bar">
            <div className="mock-input">Escribe una pregunta sobre vacaciones, trámites...</div>
            <button className="btn-send" onClick={() => alert("El chatbot estará disponible próximamente para responder todas tus preguntas en tiempo real.")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>

          {/* Elegant overlay emphasizing "Próximamente" but letting the mockup shine */}
          <div className="chatbot-overlay">
            <div className="chatbot-overlay-card">
              <div className="overlay-icon">🤖</div>
              <h3>Resolución de Dudas 24/7</h3>
              <p>
                Este módulo de chatbot inteligente se integrará en esta sección próximamente. Su objetivo será interactuar contigo de manera conversacional, respondiendo al instante tus preguntas sobre políticas internas, solicitudes y consultas generales sin intermediarios.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>
                <span className="status-dot"></span>
                <span>Mapeando base de conocimientos de la empresa...</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ChatbotPreview;
