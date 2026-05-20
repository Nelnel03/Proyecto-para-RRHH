import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="bg-glows">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>
      <div className="section-container hero-grid">
        <div className="hero-text">
          <div className="badge badge-info" style={{ marginBottom: '16px' }}>
            <span>Portal del Colaborador RRHH</span>
          </div>
          <h1>
            Todo lo que necesitas, <br />
            <span className="gradient-accent-text">en un solo lugar</span>
          </h1>
          <p>
            Bienvenido a tu plataforma de atención digital. Aquí podrás consultar información sobre tus días de vacaciones, dar seguimiento a tus trámites corporativos y resolver dudas instantáneamente. Diseñado para ser rápido, intuitivo y sin complicaciones.
          </p>
          <div className="hero-actions">
            <a href="#consultas" className="btn-primary">
              Iniciar Consulta
            </a>
            <a href="#chatbot-preview" className="btn-secondary">
              Conocer al Asistente Virtual
            </a>
          </div>
        </div>

        {/* Visualizer card on the right representing simplicity */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div 
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '30px',
              maxWidth: '380px',
              width: '100%',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}
          >
            <div 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(6, 182, 212, 0.1)',
                color: 'var(--accent-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                marginBottom: '20px'
              }}
            >
              ✨
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Atención al Instante</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>
              Este portal ha sido creado para facilitar tu acceso a la información. Olvídate de los correos largos o llamadas de espera. Navega en las secciones de abajo para encontrar lo que necesitas.
            </p>
            <div 
              style={{
                marginTop: '20px',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}
            >
              <span>Fácil de usar</span>
              <span>•</span>
              <span>Atención 24/7</span>
              <span>•</span>
              <span>100% digital</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
