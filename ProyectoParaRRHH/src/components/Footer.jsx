import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container" style={{ padding: '0 24px' }}>
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <h4>
              <div className="logo-dot"></div>
              <span>Portal RRHH</span>
            </h4>
            <p style={{ marginBottom: '16px' }}>
              Tu plataforma digital centralizada de consultas, trámites y atención al empleado.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Versión del Portal: 1.0.0 Base
            </div>
          </div>

          {/* Links 1: Enlaces Rápidos */}
          <div className="footer-col">
            <h5>Accesos</h5>
            <ul>
              <li><a href="#consultas">Consultas Generales</a></li>
              <li><a href="#vacaciones">Módulo de Vacaciones</a></li>
              <li><a href="#tramites">Trámites y Papeleo</a></li>
              <li><a href="#chatbot-preview">Chatbot IA</a></li>
            </ul>
          </div>

          {/* Links 2: Soporte */}
          <div className="footer-col">
            <h5>Atención RRHH</h5>
            <ul>
              <li><span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Horario: Lun - Vie de 9:00 AM a 6:00 PM</span></li>
              <li><span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Correo: [Tu Correo de Soporte Aquí]</span></li>
              <li><span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Teléfono: [Tu Teléfono de Soporte Aquí]</span></li>
            </ul>
          </div>

          {/* Links 3: Documentación */}
          <div className="footer-col">
            <h5>Recursos</h5>
            <ul>
              <li><a href="#!" onClick={(e) => { e.preventDefault(); alert("Enlace temporal de descarga de reglamento interno"); }}>Reglamento Interno</a></li>
              <li><a href="#!" onClick={(e) => { e.preventDefault(); alert("Enlace temporal de calendario corporativo"); }}>Calendario de Días Festivos</a></li>
              <li><a href="#!" onClick={(e) => { e.preventDefault(); alert("Enlace temporal del directorio"); }}>Directorio Telefónico</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Empresa. Todos los derechos reservados. Diseñado para optimizar tu experiencia laboral.</p>
          <div className="footer-bottom-links">
            <a href="#!" onClick={(e) => e.preventDefault()}>Políticas de Privacidad</a>
            <a href="#!" onClick={(e) => e.preventDefault()}>Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
