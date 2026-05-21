import React, { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    icon: '🤝',
    title: 'Empatía y Respaldo',
    description:
      'Entendemos que detrás de cada solicitud de vacaciones o licencia por luto hay un ser humano. Nos aseguramos de que los procesos más difíciles se gestionen con la mayor agilidad y sensibilidad posible.',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
  {
    icon: '⚖️',
    title: 'Claridad Legal',
    description:
      'Traducimos la legislación laboral y las políticas internas a un lenguaje sencillo, directo y centralizado, eliminando la incertidumbre.',
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
  },
  {
    icon: '⚡',
    title: 'Eficiencia al Instante',
    description:
      'Automatizamos y centralizamos las solicitudes de días libres y vacaciones para que el equipo no pierda tiempo en cadenas de correos infinitas.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
  },
];

function useIntersection(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function QuienesSomos() {
  const [sectionRef, sectionVisible] = useIntersection(0.1);
  const [missionRef, missionVisible] = useIntersection(0.2);
  const [movesRef, movesVisible] = useIntersection(0.2);
  const [pillarsRef, pillarsVisible] = useIntersection(0.1);
  const [quoteRef, quoteVisible] = useIntersection(0.3);

  return (
    <section id="quienes-somos" className="quienes-somos-section" ref={sectionRef}>
      {/* Decorative background blobs */}
      <div className="qs-bg-blob qs-blob-1" />
      <div className="qs-bg-blob qs-blob-2" />

      <div className="qs-container">

        {/* ── Section header ── */}
        <div className={`qs-section-header ${sectionVisible ? 'qs-fade-in' : ''}`}>
          <div className="qs-badge">
            <span className="qs-badge-dot" />
            Quiénes Somos
          </div>
          <h2 className="qs-main-title">
            Personas primero.<br />
            <span className="qs-title-highlight">Siempre.</span>
          </h2>
          <p className="qs-main-subtitle">
            Conoce la visión, los valores y los pilares que guían cada decisión de nuestro equipo de Recursos Humanos.
          </p>
        </div>

        {/* ── Mission card ── */}
        <div
          className={`qs-mission-card ${missionVisible ? 'qs-slide-up' : ''}`}
          ref={missionRef}
        >
          <div className="qs-mission-icon-wrap">
            <span className="qs-mission-icon">🎯</span>
          </div>
          <div className="qs-mission-body">
            <span className="qs-card-label">Nuestra Misión</span>
            <h3 className="qs-mission-title">
              Transformar la gestión de Recursos Humanos en una experiencia humana, transparente y accesible.
            </h3>
            <p className="qs-mission-text">
              Nos dedicamos a centralizar y simplificar las consultas laborales del día a día —desde la gestión
              de vacaciones y días libres hasta la resolución de dudas legales— para que cada colaborador
              encuentre respuestas claras y apoyo inmediato cuando más lo necesita.
            </p>
          </div>
          {/* Decorative accent line */}
          <div className="qs-mission-accent" />
        </div>

        {/* ── What moves us ── */}
        <div
          className={`qs-moves-grid ${movesVisible ? 'qs-slide-up' : ''}`}
          ref={movesRef}
          style={{ animationDelay: '0.15s' }}
        >
          <div className="qs-moves-visual">
            <div className="qs-moves-orbit">
              <div className="qs-orbit-center">💡</div>
              <div className="qs-orbit-dot qs-orbit-dot-1">🌱</div>
              <div className="qs-orbit-dot qs-orbit-dot-2">🔗</div>
              <div className="qs-orbit-dot qs-orbit-dot-3">🛡️</div>
            </div>
          </div>
          <div className="qs-moves-content">
            <span className="qs-card-label">Lo que nos mueve</span>
            <h3 className="qs-moves-title">El puente definitivo entre el equipo y sus derechos</h3>
            <p className="qs-moves-text">
              Creemos que el acceso a la información laboral no debería ser un laberinto burocrático. Nacemos
              con el propósito de ser el puente definitivo entre el equipo y sus derechos, ofreciendo un espacio
              seguro y eficiente para gestionar solicitudes críticas, entender normativas y recibir el respaldo
              institucional en los momentos que verdaderamente importan.
            </p>
            <div className="qs-moves-tags">
              <span className="qs-tag">Transparencia</span>
              <span className="qs-tag">Accesibilidad</span>
              <span className="qs-tag">Confianza</span>
            </div>
          </div>
        </div>

        {/* ── Pillars ── */}
        <div className="qs-pillars-section" ref={pillarsRef}>
          <div className={`qs-pillars-header ${pillarsVisible ? 'qs-fade-in' : ''}`}>
            <span className="qs-card-label">Nuestros Pilares Fundamentales</span>
            <h3 className="qs-pillars-title">Los principios que nos definen</h3>
          </div>
          <div className="qs-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`qs-pillar-card ${pillarsVisible ? 'qs-slide-up' : ''}`}
                style={{ animationDelay: `${0.1 + idx * 0.15}s` }}
              >
                <div className="qs-pillar-icon-wrap" style={{ background: pillar.gradient }}>
                  <span className="qs-pillar-icon">{pillar.icon}</span>
                </div>
                <div className="qs-pillar-glow" style={{ background: pillar.gradient }} />
                <h4 className="qs-pillar-title">{pillar.title}</h4>
                <p className="qs-pillar-text">{pillar.description}</p>
                <div className="qs-pillar-bar" style={{ background: pillar.gradient }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Quote banner ── */}
        <div
          className={`qs-quote-banner ${quoteVisible ? 'qs-fade-in' : ''}`}
          ref={quoteRef}
        >
          <div className="qs-quote-icon">"</div>
          <blockquote className="qs-quote-text">
            Tu bienestar y la claridad en tu entorno laboral son nuestra prioridad. Estamos aquí para
            guiarte en cada paso de tu camino profesional.
          </blockquote>
          <div className="qs-quote-divider" />
          <p className="qs-quote-author">Equipo de Recursos Humanos</p>
        </div>

      </div>
    </section>
  );
}

export default QuienesSomos;
