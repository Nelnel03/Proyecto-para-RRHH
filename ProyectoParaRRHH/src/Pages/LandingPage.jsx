import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import ChatbotPreview from '../components/ChatbotPreview';
import Footer from '../components/Footer';

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
      {/* 1. Barra de Navegación Fija */}
      <Navbar />

      <main className="main-content">
        {/* 2. Sección Hero de Bienvenida */}
        <Hero />

        {/* 3. Panel de Accesos Rápidos (Tarjetas de Navegación) */}
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

            {/* Caja de instrucciones de edición en color naranja */}
            <div className="info-slot-instructions">
              <div className="instruction-icon">💡</div>
              <div className="instruction-text">
                <strong>Instrucciones para edición de Consultas Generales:</strong>
                En este bloque podrás pegar las preguntas más frecuentes de tus empleados. Por ejemplo: políticas de horarios, vestimenta, canales de reporte, reglamento de conducta y directorios de contacto.
              </div>
            </div>

            {/* Espacio Visualizador Limpio */}
            <div className="info-slot-body">
              <div className="empty-data-visualizer">
                [ ESPACIO RESERVADO: Coloca aquí tu lista de preguntas y respuestas frecuentes ]
                <br />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '10px' }}>
                  Ejemplo recomendado: "¿Cuál es el horario laboral oficial? / ¿A quién reportar incidencias técnicas?"
                </span>
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

            {/* Caja de instrucciones de edición en color naranja */}
            <div className="info-slot-instructions">
              <div className="instruction-icon">💡</div>
              <div className="instruction-text">
                <strong>Instrucciones para edición del módulo Vacaciones:</strong>
                Aquí debes definir cuántos días de vacaciones corresponden por año laborado (ej. tabla de antigüedad de la Ley), con cuánta anticipación deben solicitarse y el enlace directo al formulario que deben firmar o llenar digitalmente.
              </div>
            </div>

            {/* Espacio Visualizador Limpio */}
            <div className="info-slot-body">
              <div className="empty-data-visualizer">
                [ ESPACIO RESERVADO: Coloca aquí la tabla de días de vacaciones y el proceso de solicitud de tu empresa ]
                <br />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '10px' }}>
                  Ejemplo recomendado: "Tabla de días correspondientes según tu antigüedad / Formulario de Solicitud de Vacaciones en PDF"
                </span>
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

            {/* Caja de instrucciones de edición en color naranja */}
            <div className="info-slot-instructions">
              <div className="instruction-icon">💡</div>
              <div className="instruction-text">
                <strong>Instrucciones para edición de Trámites:</strong>
                En esta área incluirás los trámites que requieran formatos específicos. Por ejemplo: solicitud de constancias de trabajo, cambio de cuentas bancarias para nómina, entrega de justificantes médicos del seguro y firma de contratos.
              </div>
            </div>

            {/* Espacio Visualizador Limpio */}
            <div className="info-slot-body">
              <div className="empty-data-visualizer">
                [ ESPACIO RESERVADO: Coloca aquí las descripciones, formatos descargables y correos para trámites internos ]
                <br />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '10px' }}>
                  Ejemplo recomendado: "Solicitud de Carta Laboral: Envía correo a rrhh@empresa.com con tu ID / Descargar Formato de Cuenta Bancaria"
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* 6. Simulador interactivo del Chatbot Inteligente */}
        <ChatbotPreview />

      </main>

      {/* 7. Pie de Página */}
      <Footer />
    </div>
  );
}

export default LandingPage;
