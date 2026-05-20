import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logotipo de la Empresa */}
        <Link to="/" className="logo-container">
          <div className="logo-dot"></div>
          <span>Portal RRHH</span>
        </Link>

        {/* Enlaces de Navegación rápidos a secciones */}
        <nav className="nav-links">
          <a href="#consultas" className="nav-link">Consultas</a>
          <a href="#vacaciones" className="nav-link">Vacaciones</a>
          <a href="#tramites" className="nav-link">Trámites</a>
          <a href="#chatbot-preview" className="nav-link">Chatbot Inteligente</a>
        </nav>

        {/* Botón de Acción destacado (Simulando Acceso a Cuenta) */}
        <button 
          className="nav-cta" 
          onClick={() => alert("Simulación: Redirigiendo a pantalla de inicio de sesión de empleado.")}
        >
          <span>Acceder al Portal</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
