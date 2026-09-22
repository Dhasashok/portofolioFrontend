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

        {/* Unified Single-Column Flow */}
        <div className="experience__flow">
          
          {/* Full-Width Balanced Summary Card */}
          <div className="experience__intro-banner card">
            <div className="experience__intro-banner-main">
              <div className="experience__intro-icon">
                <Briefcase size={22} aria-hidden="true" />
              </div>
              <div>
                <span className="experience__intro-label">Career Path</span>
                <h3>Practical Industry Exposure</h3>
                <p>
                  Hands-on engineering across production web workflows, component architecture, responsive design, and full-stack REST API integrations.
                </p>
              </div>
            </div>

            <div className="experience__intro-banner-meta">
              <div className="experience__intro-stats">
                <div className="experience__stat-box">
                  <strong>2</strong>
                  <span>Verified Internships</span>
                </div>
                <div className="experience__stat-box">
                  <strong>100%</strong>
                  <span>Task Delivery</span>
                </div>
              </div>

              <div className="experience__pills">
                <span className="tech-pill">Frontend Modules</span>
                <span className="tech-pill">API Integration</span>
                <span className="tech-pill">Agile Sprints</span>
              </div>
            </div>
          </div>

          {/* Chronological Timeline */}
          <div className="experience__timeline">
            {experienceData.map((item) => (
              <div key={item.id} className="experience-card card" style={{ marginBottom: '1.5rem' }}>
                <span className="experience-card__marker" aria-hidden="true">
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
                    <Calendar size={13} aria-hidden="true" />
                    {item.period}
                  </span>
                  <span>
                    <MapPin size={13} aria-hidden="true" />
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
