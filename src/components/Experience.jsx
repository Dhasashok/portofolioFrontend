import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            Practical full-stack and web development internships delivering user interfaces and backend tasks.
          </p>
        </div>

        {/* 2-Column Experience Layout */}
        <div className="experience__layout" style={{ marginTop: '2.5rem' }}>
          
          {/* Left Sticky Intro Card */}
          <div className="experience__intro card">
            <div className="experience__intro-icon">
              <Briefcase size={22} aria-hidden="true" />
            </div>
            <span className="experience__intro-label">Career Path</span>
            <h3>Practical Industry Exposure</h3>
            <p>
              Hands-on engineering across production web workflows, component architecture, responsive design, and full-stack REST API integrations.
            </p>

            {/* Career Metrics & Competencies */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', margin: '1.25rem 0' }}>
              <div style={{ padding: '0.75rem 0.85rem', background: 'var(--color-surface-soft)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '700' }}>2</strong>
                <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--color-text-secondary)', fontWeight: '500' }}>Verified Internships</span>
              </div>
              <div style={{ padding: '0.75rem 0.85rem', background: 'var(--color-surface-soft)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '700' }}>100%</strong>
                <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--color-text-secondary)', fontWeight: '500' }}>Task Delivery</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
              <span className="tech-pill">Frontend Modules</span>
              <span className="tech-pill">API Integration</span>
              <span className="tech-pill">Agile Sprints</span>
            </div>

            <div className="experience__line" />
            <span className="experience__note">Verified Software Engineering Internships</span>
          </div>

          {/* Right Timeline List */}
          <div className="experience__timeline">
            {experienceData.map((item) => (
              <div key={item.id} className="experience-card card" style={{ marginBottom: '1.5rem' }}>
                <span className="experience-card__marker">
                  <span />
                </span>

                <div className="experience-card__header">
                  <div>
                    <span className="experience-card__type">{item.type}</span>
                    <h3>{item.role}</h3>
                    <p className="experience-card__company">{item.company}</p>
                  </div>
                  <span className="experience-card__current">Verified</span>
                </div>

                <div className="experience-card__meta">
                  <span>
                    <Calendar size={13} />
                    {item.period}
                  </span>
                  <span>
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>

                <div className="experience-card__responsibilities">
                  <h4>Key Contributions</h4>
                  <ul>
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-card__technologies" style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
