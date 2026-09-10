import React from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Radio, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Production-grade full-stack web applications engineered for scalability, real-time synchronization, and automated business workflows.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="projects-showcase">
          {projectsData.map((project, index) => {
            const isRoyal = project.id === 'royal-orchid';

            return (
              <article key={project.id} className="project-case">
                
                {/* Visual Side: Browser Window Device Mockup */}
                <div className="project-case__visual">
                  <div className="mockup-window">
                    <div className="mockup-window__header">
                      <div className="mockup-window__dots">
                        <span className="mockup-dot mockup-dot--red" />
                        <span className="mockup-dot mockup-dot--yellow" />
                        <span className="mockup-dot mockup-dot--green" />
                      </div>
                      <span className="mockup-window__url">
                        {isRoyal ? 'pgmanagement-frontend.vercel.app' : 'frontend-phi-ruby-62.vercel.app'}
                      </span>
                      <span className="mockup-window__status">
                        <span className="status-indicator-dot" />
                        Live
                      </span>
                    </div>

                    <div className="mockup-window__screen">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="mockup-window__img"
                        loading="lazy"
                      />
                      <div className="mockup-window__overlay">
                        <span className="mockup-window__chip">
                          {isRoyal ? (
                            <>
                              <Layers size={13} />
                              <span>TiDB Distributed Cloud SQL</span>
                            </>
                          ) : (
                            <>
                              <Radio size={13} className="animate-pulse text-emerald-400" />
                              <span>Socket.io WebSockets · Real-Time</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="mockup-window__footer">
                      {isRoyal ? (
                        <>
                          <div className="mockup-stat-chip">
                            <strong>40+</strong>
                            <span>REST APIs</span>
                          </div>
                          <div className="mockup-stat-chip">
                            <strong>15 hrs</strong>
                            <span>Saved/wk</span>
                          </div>
                          <div className="mockup-stat-chip">
                            <strong>JWT</strong>
                            <span>RBAC Sec</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mockup-stat-chip">
                            <strong>3 Roles</strong>
                            <span>Dashboards</span>
                          </div>
                          <div className="mockup-stat-chip">
                            <strong>Instant</strong>
                            <span>Token Sync</span>
                          </div>
                          <div className="mockup-stat-chip">
                            <strong>MySQL 8</strong>
                            <span>Relational</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Narrative Info Side */}
                <div className="project-case__info">
                  <div className="project-case__meta">
                    <span className="project-case__index">0{index + 1}</span>
                    <span className="project-case__category">{project.category}</span>
                  </div>

                  <h3 className="project-case__title">{project.title}</h3>

                  <p className="project-case__oneline">{project.oneline}</p>

                  <p className="project-case__desc">{project.description}</p>

                  <div className="project-case__features">
                    <span className="project-case__features-title">
                      Key Capabilities & Engineering Deliverables
                    </span>
                    <ul>
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-case__pills">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-case__bottom">
                    <span className="project-case__stat-badge">
                      {project.statBadge}
                    </span>

                    <div className="project-case__links">
                      {project.githubFrontend && project.githubBackend ? (
                        <>
                          <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-case__btn"
                            aria-label={`${project.title} Frontend Repository`}
                            title="Frontend (Client) Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Frontend</span>
                          </a>
                          <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-case__btn"
                            aria-label={`${project.title} Backend Repository`}
                            title="Backend (API Server) Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Backend</span>
                          </a>
                        </>
                      ) : project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-case__btn"
                          aria-label={`${project.title} GitHub Repository`}
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      ) : null}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-case__btn project-case__btn--primary"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="project-case__btn" style={{ opacity: 0.85, cursor: 'default' }}>
                          <Sparkles size={13} className="text-purple-500" />
                          <span>Prototype Ready</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
