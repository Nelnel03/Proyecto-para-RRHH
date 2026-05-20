import React from 'react';

function InfoCard({ icon, title, description, linkId, iconColorClass }) {
  return (
    <div className="info-card">
      <div>
        <div className={`card-icon-box ${iconColorClass || 'card-icon-blue'}`}>
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <a href={`#${linkId}`} className="card-arrow-link">
          <span>Ver detalles</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default InfoCard;
