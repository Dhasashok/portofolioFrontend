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
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        const navOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 60);
    }
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

      {/* Mobile Backdrop Overlay */}
      <div 
        className={`navbar__mobile-backdrop ${mobileMenuOpen ? 'navbar__mobile-backdrop--open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Modern Attached Slide-Down Navigation Menu */}
      <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-menu-inner">
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
                      <IconComponent size={17} />
                    </span>
                    <span className="navbar__mobile-nav-label">{link.name}</span>
                  </div>
                  {isActive ? (
                    <span className="navbar__mobile-active-pill">Active</span>
                  ) : (
                    <ChevronRight size={15} className="navbar__mobile-nav-arrow" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick Resume CTA */}
          <div className="navbar__mobile-footer">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary navbar__mobile-resume-btn"
            >
              <FileText size={15} />
              <span>Resume (PDF)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
