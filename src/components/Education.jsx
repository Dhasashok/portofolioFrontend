import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Computer engineering qualifications, marks, and academic achievements.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
          {educationData.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'var(--color-surface-soft)',
                      color: 'var(--color-primary)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <span className="tech-pill" style={{ fontFamily: 'monospace', fontSize: '0.72rem' }}>
                    {item.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                  {item.degree}
                </h3>
                <p style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>
                  {item.institution}
                </p>
                {item.university && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontFamily: 'monospace', marginBottom: '1rem' }}>
                    {item.university}
                  </p>
                )}
              </div>

              <div className="education-card__footer">
                <div className="education-card__marks-wrap">
                  <span className="education-marks-badge">
                    {item.grade}
                  </span>
                  {item.highlight && (
                    <span className="education-highlight-text">
                      • {item.highlight}
                    </span>
                  )}
                </div>

                <span className="education-location-tag">
                  <MapPin size={12} />
                  <span>{item.location.split(',')[0]}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
