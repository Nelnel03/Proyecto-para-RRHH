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
              <div className="deloitte-nav-item">
                <span>Quiénes somos</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="deloitte-nav-item">
                <span>Lo que hacemos</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="deloitte-nav-item">
                <span>Nuestro Enfoque</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="deloitte-nav-item">
                <span>Carreras</span>
                <svg className="chevron-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </nav>
          </div>

          {/* Right side utility icons */}
          <div className="deloitte-nav-right">
            {/* Search */}
            <div className="deloitte-utility-item search-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Buscar</span>
            </div>

            {/* MX - ES */}
            <div className="deloitte-utility-item lang-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>MX - ES</span>
              <svg className="chevron-icon" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {/* Mail */}
            <div className="deloitte-utility-icon-only">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>

            {/* User Profile */}
            <div className="deloitte-utility-icon-only">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
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
