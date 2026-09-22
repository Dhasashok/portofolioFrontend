import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Award,
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A glance into my academic background, technical focus, and passion for software development.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="about__grid" style={{ marginTop: '2.5rem' }}>
          
          {/* Left Highlights & Background Card */}
          <div className="about__profile-card card">
            <div className="about__profile-top">
              <div className="about__avatar">
                <Award size={28} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div className="about__identity">
                <span className="section-label" style={{ marginBottom: '0.2rem' }}>Candidate Overview</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Full Stack Engineer</h3>
                <div className="about__status" style={{ marginTop: '0.4rem' }}>
                  <span className="about__status-dot" />
                  <span>Open to Opportunities</span>
                </div>
              </div>
            </div>

            <div className="about__details">
              <div className="about__detail">
                <div className="about__detail-icon">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <span className="about__detail-label">Degree & Institution</span>
                  <strong>{personalInfo.degree} (SPPU)</strong>
                </div>
              </div>

              <div className="about__detail">
                <div className="about__detail-icon">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="about__detail-label">Base Location</span>
                  <strong>{personalInfo.location} · Open to Remote</strong>
                </div>
              </div>

              <div className="about__detail">
                <div className="about__detail-icon">
                  <Award size={16} />
                </div>
                <div>
                  <span className="about__detail-label">Core Specialization</span>
                  <strong>React, Node.js, Express & SQL</strong>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', minHeight: '42px' }}
              >
                <span>Initiate Contact</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', minHeight: '42px' }}
                title="Open Resume in new tab"
                aria-label="Open Resume in new tab"
              >
                <FileText size={15} aria-hidden="true" />
                <span>View Full Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio and Highlights */}
          <div className="about__content">
            <div className="about__bio card">
              <span className="about__small-label">Background & Aspirations</span>
              <h3>
                Engineering Practical & <span>Scalable Software</span>
              </h3>
              <p>{personalInfo.aboutBio[0]}</p>
              <p>{personalInfo.aboutBio[1]}</p>
              <p>{personalInfo.aboutBio[2]}</p>
            </div>

            {/* Key Metrics Grid (Clean Stats without arbitrary progress bars) */}
            <div className="about__learning card">
              <div className="about__learning-heading">
                <div>
                  <span className="about__small-label">Academic & Engineering</span>
                  <h3>Key Highlights</h3>
                </div>
                <div className="about__learning-icon">
                  <Award size={18} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginTop: '0.25rem' }}>
                {personalInfo.stats.map((st, sIdx) => (
                  <div key={sIdx} style={{
                    padding: '0.85rem 1rem',
                    background: 'var(--color-surface-soft)',
                    border: '1px solid var(--color-border-light)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem'
                  }}>
                    <strong style={{ fontSize: '1.3rem', color: 'var(--color-primary)', fontWeight: '700', lineHeight: 1.1 }}>{st.value}</strong>
                    <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-text)' }}>{st.label}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{st.subtext}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
