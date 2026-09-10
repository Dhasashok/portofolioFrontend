import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  ArrowUpRight 
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-centered">
      {/* Ambient Aurora Glows */}
      <div className="hero-centered__glow hero-centered__glow--primary" />
      <div className="hero-centered__glow hero-centered__glow--secondary" />

      <div className="container hero-centered__container">
        
        {/* =================================================================
            CENTERPIECE: Clean Avatar with Animated Pulse Rings
            ================================================================= */}
        <div className="hero-centered__centerpiece">
          <div className="hero-centered__avatar-wrap">
            <div className="hero-centered__avatar-ring hero-centered__avatar-ring--outer" />
            <div className="hero-centered__avatar-ring hero-centered__avatar-ring--middle" />
            <div className="hero-centered__avatar-core">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="hero-centered__avatar-img"
              />
              <span className="hero-centered__avatar-beacon" title="Available for hire" />
            </div>
          </div>
        </div>

        {/* =================================================================
            HERO NARRATIVE: Symmetrical, High-Impact Developer Identity
            ================================================================= */}
        <div className="hero-centered__content">
          
          {/* Recruiter Live Status Pill */}
          <div className="hero__status-pill">
            <span className="hero__status-indicator">
              <span className="hero__status-ping" />
              <span className="hero__status-dot" />
            </span>
            <span>Available for Immediate Full-Time Hire</span>
          </div>

          <p className="hero-centered__greeting">Hi, I'm</p>

          <h1 className="hero-centered__name">
            Ashok Dhas
          </h1>

          {/* Dynamic Typewriter Role */}
          <div className="hero-centered__typewriter">
            <span className="hero-centered__typewriter-prefix">Specializing in: </span>
            <span className="hero-centered__typewriter-text">{displayText}</span>
            <span className="hero-centered__cursor" />
          </div>

          {/* Concise Executive Bio */}
          <p className="hero-centered__bio">
            {personalInfo.heroBio}
          </p>

          {/* Streamlined Call-to-Action Buttons */}
          <div className="hero-centered__actions">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary hero-centered__btn"
            >
              <span>View Featured Projects</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-centered__btn"
            >
              <FileText size={15} />
              <span>Resume</span>
              <ArrowUpRight size={13} className="opacity-70" />
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary hero-centered__btn"
            >
              <Mail size={15} />
              <span>Contact</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="hero-centered__socials">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-centered__social-link"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-centered__social-link"
              aria-label="Email"
              title="Send an Email"
            >
              <Mail size={16} />
            </a>

            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="hero-centered__social-link"
              aria-label="Phone"
              title="Phone Contact"
            >
              <Phone size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
