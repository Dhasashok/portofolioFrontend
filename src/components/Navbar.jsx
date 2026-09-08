import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  ChevronRight, 
  Home, 
  FolderGit2, 
  Briefcase, 
  Cpu, 
  User, 
  Mail, 
  Phone 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { navLinks, personalInfo } from '../data/portfolioData';

const NAV_ICONS = {
  Home: Home,
  Projects: FolderGit2,
  Experience: Briefcase,
  Skills: Cpu,
  About: User,
  Contact: Mail,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
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
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        {/* Brand Mark */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="navbar__brand"
          aria-label="Back to home top"
        >
          <div className="navbar__brand-mark">
            <span>{personalInfo.initials}</span>
          </div>
          <span className="navbar__brand-name">{personalInfo.shortName}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar__desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`navbar__link ${activeSection === link.href.substring(1) ? 'navbar__link--active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar__actions">
          {/* Direct Resume Link (Desktop) */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__resume-btn"
            style={{ minHeight: '38px', padding: '0.45rem 1rem', fontSize: 'var(--text-xs)' }}
            title="Open Resume in new tab"
          >
            <FileText size={14} />
            <span>Resume</span>
            <ArrowUpRight size={13} style={{ marginLeft: '-2px', opacity: 0.85 }} />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar__menu-button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Professional Fullscreen Mobile Drawer with Glassmorphism */}
      <div 
        className={`navbar__mobile-backdrop ${mobileMenuOpen ? 'navbar__mobile-backdrop--open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`navbar__mobile-drawer ${mobileMenuOpen ? 'navbar__mobile-drawer--open' : ''}`}>
        <div className="navbar__mobile-drawer-inner">
          
          {/* Mobile Profile Header */}
          <div className="navbar__mobile-header">
            <div className="navbar__mobile-profile">
              <div className="navbar__mobile-avatar">
                <span>{personalInfo.initials}</span>
              </div>
              <div className="navbar__mobile-info">
                <strong>{personalInfo.name}</strong>
                <span>B.E. Comp Eng · 8.50 CGPA</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="navbar__mobile-close-btn"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="navbar__mobile-nav-list" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const IconComponent = NAV_ICONS[link.name] || ChevronRight;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`navbar__mobile-nav-item ${isActive ? 'navbar__mobile-nav-item--active' : ''}`}
                >
                  <div className="navbar__mobile-nav-left">
                    <span className="navbar__mobile-nav-icon">
                      <IconComponent size={18} />
                    </span>
                    <span className="navbar__mobile-nav-label">{link.name}</span>
                  </div>
                  <div className="navbar__mobile-nav-right">
                    {isActive && <span className="navbar__mobile-active-badge">Active</span>}
                    <ChevronRight size={16} className="navbar__mobile-nav-arrow" />
                  </div>
                </a>
              );
            })}
          </nav>

          {/* Drawer Footer Actions */}
          <div className="navbar__mobile-footer">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary navbar__mobile-resume-btn"
            >
              <FileText size={16} />
              <span>View Resume (PDF)</span>
              <ArrowUpRight size={15} />
            </a>

            <div className="navbar__mobile-social-bar">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="navbar__mobile-social-pill"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="navbar__mobile-social-pill"
                aria-label="Email"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
              <a 
                href={`tel:${personalInfo.phoneRaw}`} 
                className="navbar__mobile-social-pill"
                aria-label="Phone"
              >
                <Phone size={15} />
                <span>Call</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
