import React, { useEffect, useRef, useState } from 'react';

function useIntersection(threshold = 0.15) {
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

const services = [
  {
    icon: '✈️',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    badge: 'Vacaciones & Días Libres',
    title: 'Gestión Inteligente de Vacaciones y Días Libres',
    intro: 'Olvídate de los correos interminables y las hojas de cálculo.',
    items: [
      { label: 'Consulta de Saldos', desc: 'Revisa cuántos días de vacaciones tienes disponibles acumulados hasta el día de hoy.' },
      { label: 'Solicitudes en un Clic', desc: 'Tramita tus días libres o vacaciones de forma digital y recibe notificaciones en tiempo real cuando sean aprobadas.' },
      { label: 'Historial Transparente', desc: 'Accede al registro de todos tus descansos y permisos solicitados en el año.' },
    ],
  },
  {
    icon: '⚖️',
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    badge: 'Legal & Normativo',
    title: 'Consultas Legales y Laborales Centralizadas',
    intro: 'La legislación laboral no tiene por qué ser confusa. Traducimos la normativa interna y las leyes de trabajo a un formato accesible.',
    items: [
      { label: 'Base de Conocimiento', desc: 'Encuentra respuestas claras a dudas frecuentes sobre contratos, jornadas laborales, pagos de horas extra y derechos del trabajador.' },
      { label: 'Asesoría Clara', desc: 'Un espacio centralizado donde las políticas de la empresa y el marco legal se explican sin tecnicismos complejos.' },
    ],
  },
  {
    icon: '🤍',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    badge: 'Permisos Especiales',
    title: 'Gestión de Permisos Especiales y Licencias por Luto',
    intro: 'Sabemos que hay momentos donde la prioridad es tu familia, no el papeleo.',
    items: [
      { label: 'Trámites con Empatía', desc: 'Diseñamos un flujo prioritario y simplificado para solicitar licencias por el fallecimiento de un familiar o emergencias médicas.' },
      { label: 'Validación Ágil', desc: 'Sube la documentación necesaria de forma privada y segura para que el equipo de RRHH la procese con el respeto y la urgencia que el caso amerita.' },
    ],
  },
];

function QueHacemos() {
  const [headerRef, headerVisible] = useIntersection(0.1);
  const [introRef, introVisible] = useIntersection(0.1);
  const [cardsRef, cardsVisible] = useIntersection(0.05);
  const [whyRef, whyVisible] = useIntersection(0.2);

  return (
    <section id="que-hacemos" className="qh-section">
      {/* background accents */}
      <div className="qh-bg-accent qh-accent-1" />
      <div className="qh-bg-accent qh-accent-2" />

      <div className="qh-container">

        {/* ── Header ── */}
        <div className={`qh-header ${headerVisible ? 'qh-reveal' : ''}`} ref={headerRef}>
          <div className="qh-eyebrow">
            <span className="qh-eyebrow-dot" />
            Lo que hacemos
          </div>
          <h2 className="qh-main-title">
            Todo lo que necesitas,<br />
            <span className="qh-title-accent">en un solo lugar.</span>
          </h2>
        </div>

        {/* ── Intro text ── */}
        <div className={`qh-intro ${introVisible ? 'qh-reveal' : ''}`} ref={introRef}
             style={{ animationDelay: '0.1s' }}>
          <p className="qh-intro-text">
            En nuestra plataforma transformamos la gestión de Recursos Humanos en un proceso autónomo,
            rápido y sin complicaciones. Nos encargamos de centralizar las herramientas y la información
            clave para que puedas resolver tus dudas y gestionar tus solicitudes en un solo lugar.
          </p>
          <div className="qh-intro-divider" />
          <p className="qh-intro-sub">Aquí está todo lo que puedes hacer con nosotros:</p>
        </div>

        {/* ── 3-Column Cards Grid ── */}
        <div className="qh-cards-grid" ref={cardsRef}>
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`qh-card ${cardsVisible ? 'qh-reveal' : ''}`}
              style={{ animationDelay: `${0.1 + idx * 0.15}s` }}
            >
              {/* card top accent bar */}
              <div className="qh-card-bar" style={{ background: svc.gradient }} />

              {/* header */}
              <div className="qh-card-head">
                <div className="qh-card-icon-wrap" style={{ background: svc.gradient }}>
                  <span className="qh-card-icon">{svc.icon}</span>
                </div>
                <span className="qh-card-badge" style={{
                  background: `${svc.color}18`,
                  border: `1px solid ${svc.color}40`,
                  color: svc.color,
                }}>
                  {svc.badge}
                </span>
              </div>

              <h3 className="qh-card-title">{svc.title}</h3>
              <p className="qh-card-intro">{svc.intro}</p>

              {/* feature items */}
              <ul className="qh-card-items">
                {svc.items.map((item, i) => (
                  <li key={i} className="qh-item">
                    <div className="qh-item-check" style={{ background: svc.gradient }}>✓</div>
                    <div>
                      <span className="qh-item-label">{item.label}: </span>
                      <span className="qh-item-desc">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* glow on hover */}
              <div className="qh-card-glow" style={{ background: svc.gradient }} />
            </div>
          ))}
        </div>

        {/* ── Why we do it ── */}
        <div className={`qh-why ${whyVisible ? 'qh-reveal' : ''}`} ref={whyRef}>
          <div className="qh-why-icon">💡</div>
          <div className="qh-why-content">
            <span className="qh-why-eyebrow">¿Por qué lo hacemos?</span>
            <blockquote className="qh-why-quote">
              "Reducimos la burocracia para aumentar la tranquilidad."
            </blockquote>
            <p className="qh-why-text">
              Nuestro objetivo es que no pierdas tiempo buscando reglamentos en archivos perdidos o
              esperando respuestas que tardan días. Queremos que tengas el control total de tu
              información laboral en la palma de tu mano.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default QueHacemos;
