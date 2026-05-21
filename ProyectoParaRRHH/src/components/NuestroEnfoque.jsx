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

const principles = [
  {
    number: '01',
    icon: '🧑‍🤝‍🧑',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    title: 'El Colaborador en el Centro',
    subtitle: 'User-Centric',
    intro:
      'Diseñamos pensando en las personas, no en la burocracia. Sabemos que cuando necesitas consultar tus vacaciones o pedir un permiso por una emergencia familiar, lo último que quieres es pelear con una interfaz confusa.',
    items: [
      {
        label: 'Diseño Accesible',
        desc: 'Priorizamos una experiencia intuitiva, limpia y optimizada para dispositivos móviles, permitiéndote resolver cualquier duda o trámite con una sola mano y en pocos segundos.',
      },
      {
        label: 'Procesos Humanos',
        desc: 'Simplificamos los flujos de solicitud en los momentos más difíciles, eliminando pasos innecesarios para brindarte tranquilidad cuando más la necesitas.',
      },
    ],
  },
  {
    number: '02',
    icon: '🔍',
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    title: 'Autonomía y Transparencia Absoluta',
    subtitle: 'Tu información, siempre disponible',
    intro:
      'Creemos que la información laboral te pertenece. Promovemos un entorno de confianza donde no necesitas pedir permiso solo para saber cuáles son tus derechos o cuántos días libres te quedan.',
    items: [
      {
        label: 'Respuestas en Tiempo Real',
        desc: 'Centralizamos el conocimiento legal y tus datos de saldo para que obtengas respuestas inmediatas, sin intermediarios ni esperas.',
      },
      {
        label: 'Reglas Claras',
        desc: 'Traducimos el marco legal y las políticas internas a un lenguaje directo y comprensible para todos, asegurando que cada miembro del equipo conozca sus derechos y deberes con total claridad.',
      },
    ],
  },
  {
    number: '03',
    icon: '⚙️',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    title: 'Eficiencia y Centralización Digital',
    subtitle: 'Un solo punto de verdad',
    intro:
      'Adiós a los correos perdidos, los mensajes de texto dispersos y los formularios en papel.',
    items: [
      {
        label: 'Un Solo Punto de Verdad',
        desc: 'Unificamos las consultas legales, el control de tus días de descanso y las solicitudes de licencias en una sola base de datos inteligente.',
      },
      {
        label: 'Agilidad Administrativa',
        desc: 'Automatizamos las notificaciones y los flujos de aprobación para que el equipo de Recursos Humanos pueda responder con la rapidez y la seriedad que te mereces.',
      },
    ],
  },
];

function NuestroEnfoque() {
  const [headerRef, headerVisible] = useIntersection(0.1);
  const [introRef, introVisible] = useIntersection(0.1);
  const [p1Ref, p1Visible] = useIntersection(0.1);
  const [p2Ref, p2Visible] = useIntersection(0.1);
  const [p3Ref, p3Visible] = useIntersection(0.1);
  const [quoteRef, quoteVisible] = useIntersection(0.2);

  const principleRefs = [
    [p1Ref, p1Visible],
    [p2Ref, p2Visible],
    [p3Ref, p3Visible],
  ];

  return (
    <section id="nuestro-enfoque" className="ne-section">
      {/* decorative bg */}
      <div className="ne-bg-blob ne-blob-tl" />
      <div className="ne-bg-blob ne-blob-br" />

      <div className="ne-container">

        {/* ── Header ── */}
        <div className={`ne-header ${headerVisible ? 'ne-reveal' : ''}`} ref={headerRef}>
          <div className="ne-eyebrow">
            <span className="ne-eyebrow-dot" />
            Nuestro Enfoque
          </div>
          <h2 className="ne-main-title">
            Tecnología con<br />
            <span className="ne-title-accent">propósito humano.</span>
          </h2>
        </div>

        {/* ── Intro ── */}
        <div className={`ne-intro-block ${introVisible ? 'ne-reveal' : ''}`} ref={introRef}
             style={{ animationDelay: '0.1s' }}>
          <p className="ne-intro-text">
            No somos solo una plataforma de gestión; somos un espacio diseñado para cambiar la forma
            en que interactúas con tu entorno laboral. Nuestro enfoque combina tecnología avanzada con
            un profundo sentido de empatía para ofrecerte una experiencia fluida, justa y cercana.
          </p>
          <p className="ne-intro-sub">Nos guiamos por tres principios fundamentales:</p>
        </div>

        {/* ── Principles — alternating layout ── */}
        <div className="ne-principles">
          {principles.map((p, idx) => {
            const [ref, visible] = principleRefs[idx];
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`ne-principle ${isEven ? 'ne-principle--reverse' : ''} ${visible ? 'ne-reveal' : ''}`}
                ref={ref}
                style={{ animationDelay: '0.05s' }}
              >
                {/* Visual side */}
                <div className="ne-principle-visual">
                  <div className="ne-visual-card">
                    {/* large number */}
                    <span className="ne-visual-number">
                      {p.number}
                    </span>
                    {/* decorative dots */}
                    <div className="ne-visual-dots">
                      {[...Array(9)].map((_, i) => (
                        <span key={i} className="ne-dot" />
                      ))}
                    </div>
                    {/* glow */}
                    <div className="ne-visual-glow" />
                  </div>
                </div>

                {/* Content side */}
                <div className="ne-principle-content">
                  <div className="ne-principle-badge">
                    {p.subtitle}
                  </div>
                  <h3 className="ne-principle-title">
                    <span className="ne-principle-num">{p.number}.</span>
                    {p.title}
                  </h3>
                  <p className="ne-principle-intro">{p.intro}</p>

                  <ul className="ne-principle-items">
                    {p.items.map((item, i) => (
                      <li key={i} className="ne-pi-item">
                        <div className="ne-pi-line" />
                        <div>
                          <span className="ne-pi-label">{item.label}: </span>
                          <span className="ne-pi-desc">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Closing Quote ── */}
        <div className={`ne-quote ${quoteVisible ? 'ne-reveal' : ''}`} ref={quoteRef}>
          <div className="ne-quote-marks">"</div>
          <blockquote className="ne-quote-text">
            Un enfoque moderno donde la tecnología simplifica los procesos para que podamos
            concentrarnos en lo que realmente importa: las personas.
          </blockquote>
          <div className="ne-quote-bar" />
          <p className="ne-quote-attr">Equipo de Recursos Humanos</p>
        </div>

      </div>
    </section>
  );
}

export default NuestroEnfoque;
