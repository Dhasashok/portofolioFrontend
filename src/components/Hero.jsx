import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  Layers, 
  Server, 
  Database,
  Copy,
  Check,
  Code2,
  Terminal as TerminalIcon,
  Sparkles,
  Cpu
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const ROLES = [
  "Full-Stack Software Engineer",
  "React.js & Node.js Developer",
  "Real-Time Systems Builder",
  "Distributed SQL & API Architect"
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('engineer');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const fullText = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 38 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const fallbackCopy = (text) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch {
      // ignore
    }
  };

  const handleCopyEmail = (e) => {
    if (e) e.preventDefault();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(personalInfo.email).catch(() => {
          fallbackCopy(personalInfo.email);
        });
      } else {
        fallbackCopy(personalInfo.email);
      }
    } catch {
      fallbackCopy(personalInfo.email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-split">
      {/* Ambient Aurora Glow & Tech Grid Background */}
      <div className="hero-split__bg-grid" />
      <div className="hero-split__glow hero-split__glow--primary" />
      <div className="hero-split__glow hero-split__glow--secondary" />

      <div className="container hero-split__container">
        
        {/* =================================================================
            LEFT COLUMN: Narrative, Dynamic Typing & Strategic CTAs
            ================================================================= */}
        <div className="hero-split__left">
          
          {/* Recruiter Live Status Badge */}
          <div className="hero__status-pill">
            <span className="hero__status-indicator">
              <span className="hero__status-ping" />
              <span className="hero__status-dot" />
            </span>
            <span>Available for Immediate Full-Time Hire</span>
          </div>

          <p className="hero-split__greeting">Hi, I'm</p>

          <h1 className="hero-split__name">
            Ashok Dhas
          </h1>

          {/* Dynamic Typing Role */}
          <div className="hero-split__typewriter">
            <span className="hero-split__typewriter-prefix">Specializing in: </span>
            <span className="hero-split__typewriter-text">{displayText}</span>
            <span className="hero-split__cursor" />
          </div>

          <p className="hero-split__bio">
            {personalInfo.heroBio}
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-split__metrics">
            <div 
              className="hero-split__metric"
              onClick={() => scrollToSection('projects')}
              role="button"
              tabIndex={0}
            >
              <div className="hero-split__metric-icon hero-split__metric-icon--purple">
                <Layers size={16} />
              </div>
              <div className="hero-split__metric-text">
                <strong>Full Stack Apps</strong>
                <span>React & Node.js Projects</span>
              </div>
            </div>

            <div 
              className="hero-split__metric"
              onClick={() => scrollToSection('services')}
              role="button"
              tabIndex={0}
            >
              <div className="hero-split__metric-icon hero-split__metric-icon--cyan">
                <Server size={16} />
              </div>
              <div className="hero-split__metric-text">
                <strong>40+ REST APIs</strong>
                <span>JWT & Cloud DB</span>
              </div>
            </div>

            <div 
              className="hero-split__metric"
              onClick={() => scrollToSection('about')}
              role="button"
              tabIndex={0}
            >
              <div className="hero-split__metric-icon hero-split__metric-icon--green">
                <Database size={16} />
              </div>
              <div className="hero-split__metric-text">
                <strong>8.50 CGPA</strong>
                <span>B.E. Computer Eng.</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-split__actions">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              <span>View Featured Projects</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary"
            >
              <Mail size={15} />
              <span>Contact</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className={`btn btn-secondary ${copied ? 'btn--copied' : ''}`}
              title="Copy email to clipboard"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-split__socials">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-split__social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-split__social-link"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="hero-split__social-link"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
          </div>

        </div>

        {/* =================================================================
            RIGHT COLUMN: Live Glassmorphic Mac Developer Terminal Card
            ================================================================= */}
        <div className="hero-split__right">
          
          {/* Main Glassmorphic Terminal Card */}
          <div className="hero-terminal">
            
            {/* Terminal Window Header Bar */}
            <div className="hero-terminal__header">
              <div className="hero-terminal__dots">
                <span className="hero-terminal__dot hero-terminal__dot--red" />
                <span className="hero-terminal__dot hero-terminal__dot--yellow" />
                <span className="hero-terminal__dot hero-terminal__dot--green" />
              </div>

              {/* Interactive Tabs */}
              <div className="hero-terminal__tabs">
                <button
                  onClick={() => setActiveTab('engineer')}
                  className={`hero-terminal__tab ${activeTab === 'engineer' ? 'hero-terminal__tab--active' : ''}`}
                >
                  <Code2 size={13} />
                  <span>engineer.ts</span>
                </button>

                <button
                  onClick={() => setActiveTab('deployments')}
                  className={`hero-terminal__tab ${activeTab === 'deployments' ? 'hero-terminal__tab--active' : ''}`}
                >
                  <TerminalIcon size={13} />
                  <span>deployments.sh</span>
                </button>

                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`hero-terminal__tab ${activeTab === 'metrics' ? 'hero-terminal__tab--active' : ''}`}
                >
                  <Cpu size={13} />
                  <span>metrics.json</span>
                </button>
              </div>

              <div className="hero-terminal__status">
                <span className="hero-terminal__status-ping" />
                <span>Live</span>
              </div>
            </div>

            {/* Terminal Avatar Profile Integration */}
            <div className="hero-terminal__profile-row">
              <div className="hero-terminal__avatar-wrap">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="hero-terminal__avatar"
                />
                <span className="hero-terminal__avatar-dot" />
              </div>
              <div className="hero-terminal__profile-info">
                <div className="hero-terminal__profile-name">
                  <strong>{personalInfo.name}</strong>
                  <span className="hero-terminal__verified-tag">B.E. 8.50 CGPA</span>
                </div>
                <div className="hero-terminal__profile-role">
                  SPPU Pune · SDE & Full Stack Developer
                </div>
              </div>
            </div>

            {/* Terminal Screen Body with Syntax Highlighting */}
            <div className="hero-terminal__body">
              {activeTab === 'engineer' && (
                <pre className="hero-terminal__code">
                  <code>
                    <span className="token-keyword">const</span> <span className="token-variable">engineer</span>: <span className="token-type">DeveloperProfile</span> = &#123;{'\n'}
                    {'  '}<span className="token-property">name</span>: <span className="token-string">"Ashok Rohidas Dhas"</span>,{'\n'}
                    {'  '}<span className="token-property">role</span>: <span className="token-string">"Software Developer"</span>,{'\n'}
                    {'  '}<span className="token-property">degree</span>: <span className="token-string">"B.E. Computer Eng (SPPU)"</span>,{'\n'}
                    {'  '}<span className="token-property">grade</span>: <span className="token-string">"8.50 / 10 CGPA · Distinction"</span>,{'\n'}
                    {'  '}<span className="token-property">stack</span>: [<span className="token-string">"Java"</span>, <span className="token-string">"React"</span>, <span className="token-string">"Node"</span>, <span className="token-string">"MySQL"</span>, <span className="token-string">"TiDB"</span>],{'\n'}
                    {'  '}<span className="token-property">status</span>: <span className="token-success">"🟢 Ready for Immediate SDE Roles"</span>{'\n'}
                    &#125;;
                  </code>
                </pre>
              )}

              {activeTab === 'deployments' && (
                <pre className="hero-terminal__code">
                  <code>
                    <span className="token-comment"># Live Production Deployments</span>{'\n'}
                    <span className="token-prompt">$</span> vercel list --status=live{'\n'}
                    <span className="token-success">✓</span> <span className="token-keyword">royal-orchid</span>  pgmanagement-frontend.vercel.app{'\n'}
                    {'  '}<span className="token-property">→ Stack</span>: React · Node.js · TiDB Cloud · JWT{'\n'}
                    {'  '}<span className="token-property">→ Impact</span>: Saved 15+ hrs/week for PG operations{'\n\n'}
                    <span className="token-success">✓</span> <span className="token-keyword">mediqueue</span>     frontend-phi-ruby-62.vercel.app{'\n'}
                    {'  '}<span className="token-property">→ Stack</span>: React · Socket.io · MySQL · Express{'\n'}
                    {'  '}<span className="token-property">→ Impact</span>: Zero-refresh real-time token tracking
                  </code>
                </pre>
              )}

              {activeTab === 'metrics' && (
                <pre className="hero-terminal__code">
                  <code>
                    &#123;{'\n'}
                    {'  '}<span className="token-property">"impactMetrics"</span>: &#123;{'\n'}
                    {'    '}<span className="token-property">"manualTimeSaved"</span>: <span className="token-string">"15 hrs/week"</span>,{'\n'}
                    {'    '}<span className="token-property">"restEndpoints"</span>: <span className="token-number">40</span>,{'\n'}
                    {'    '}<span className="token-property">"synchronizedRoles"</span>: <span className="token-number">3</span>,{'\n'}
                    {'    '}<span className="token-property">"verifiedInternships"</span>: <span className="token-number">2</span>,{'\n'}
                    {'    '}<span className="token-property">"cgpaDistinction"</span>: <span className="token-string">"8.50 / 10"</span>{'\n'}
                    {'  '}&#125;{'\n'}
                    &#125;
                  </code>
                </pre>
              )}
            </div>

            {/* Terminal Footer Status Bar */}
            <div className="hero-terminal__footer">
              <div className="hero-terminal__footer-left">
                <Sparkles size={13} className="text-purple-400" />
                <span>TypeScript v5.4 · ESM Production Build</span>
              </div>
              <div className="hero-terminal__footer-right">
                <span>UTF-8</span>
                <span className="hero-terminal__separator">·</span>
                <span>SPPU Distinction</span>
              </div>
            </div>

          </div>

          {/* Symmetrically Aligned Tech Badges Dock */}
          <div className="hero-terminal__tech-dock">
            <div className="tech-badge tech-badge--react">
              <span className="tech-badge__dot" />
              <span>React 18</span>
            </div>

            <div className="tech-badge tech-badge--node">
              <span className="tech-badge__dot" />
              <span>Node.js</span>
            </div>

            <div className="tech-badge tech-badge--mysql">
              <span className="tech-badge__dot" />
              <span>MySQL & TiDB</span>
            </div>

            <div className="tech-badge tech-badge--socket">
              <span className="tech-badge__dot" />
              <span>Socket.io</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

