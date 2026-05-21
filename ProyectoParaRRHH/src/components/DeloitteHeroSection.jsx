import React, { useEffect, useState } from 'react';

function DeloitteHeroSection() {
  const [animateCircles, setAnimateCircles] = useState(false);

  useEffect(() => {
    // Trigger CircleScaleAnimation immediately upon mounting
    const timer = setTimeout(() => {
      setAnimateCircles(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="deloitte-wrapper">
      {/* Navbar Component */}
      <header className="deloitte-navbar">
        <div className="deloitte-nav-container">
          <div className="deloitte-nav-left">
            {/* Deloitte Logo */}
            <a href="/" className="deloitte-logo">
              Deloitte<span className="deloitte-logo-dot">.</span>
            </a>

            {/* Nav Menu Items */}
            <nav className="deloitte-nav-links">
              <a
                href="#quienes-somos"
                className="deloitte-nav-item"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Quiénes somos</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <a
                href="#que-hacemos"
                className="deloitte-nav-item"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('que-hacemos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Lo que hacemos</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <a
                href="#nuestro-enfoque"
                className="deloitte-nav-item"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('nuestro-enfoque')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Nuestro Enfoque</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>

              <a
                href="#consultas"
                className="deloitte-nav-item"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultas')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Consultas</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <a
                href="#vacaciones"
                className="deloitte-nav-item"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('vacaciones')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Vacaciones</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <a
                href="#tramites"
                className="deloitte-nav-item"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('tramites')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Trámites</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
               
            </nav>
          </div>

          {/* Right side utility icons */}
          
        </div>
      </header>

      {/* Hero Section Container */}
      <section className="deloitte-hero-section">
        {/* Background Composite Layer */}
        <div className="deloitte-hero-bg">
          <div className="deloitte-hero-bg-image" style={{ backgroundImage: "url('/bridge_worker.png')" }}></div>
          <div className="deloitte-hero-overlay"></div>
        </div>

        {/* Content Grid */}
        <div className="deloitte-hero-container">
          <div className="deloitte-hero-content-grid">
            {/* Left Content */}
            <div className="deloitte-hero-text">
              <h1 className="deloitte-h1">Conoce a las Mejores Empresas Gestionadas de 2026</h1>
              <p className="deloitte-sub">Construidas con visión. Definidas por la excelencia.</p>
              <p className="deloitte-body">
                ¿Qué se necesita para ser una de las Mejores Empresas Gestionadas? La combinación correcta
                de estrategia, ejecución, cultura y disciplina financiera. Explora a los galardonados de
                este año y descubre cómo están marcando el estándar de excelencia empresarial.
              </p>
              <div className="deloitte-hero-actions">
                <button className="deloitte-btn-action" onClick={() => alert("¡Explorando a los galardonados 2026!")}>
                  Conoce a los galardonados 2026
                </button>
              </div>
            </div>

            {/* Right Side Concentric Rings + Masked Image */}
            <div className="deloitte-hero-graphics">
              <div className={`concentric-rings-container ${animateCircles ? 'trigger-scale' : ''}`}>
                {/* Overlay Concentric Circles */}
                <div className="concentric-ring ring-1"></div>
                <div className="concentric-ring ring-2"></div>
                <div className="concentric-ring ring-3"></div>
                <div className="concentric-ring ring-4"></div>
                <div className="concentric-ring ring-5"></div>
                
                {/* Circular Mask Frame */}
                <div className="woman-image-mask-frame">
                  <div className="woman-image-mask-inner" style={{ backgroundImage: "url('/woman_drawing.png')" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DeloitteHeroSection;
