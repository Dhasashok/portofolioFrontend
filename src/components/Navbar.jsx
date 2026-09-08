import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

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

          {/* Direct Resume Link (Opens in New Tab - Industry Standard) */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden sm:inline-flex"
            style={{ minHeight: '38px', padding: '0.45rem 1rem', fontSize: 'var(--text-xs)' }}
            title="Open Resume in new tab"
          >
            <FileText size={14} />
            <span>Resume</span>
            <ArrowUpRight size={13} style={{ marginLeft: '-2px', opacity: 0.85 }} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar__menu-button"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="container">
          <nav className="navbar__mobile-nav">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="navbar__mobile-link"
                style={{ '--menu-delay': `${idx * 0.04}s` }}
              >
                <span>{link.name}</span>
                <span className="navbar__mobile-arrow">→</span>
              </a>
            ))}
            <div style={{ padding: '0.5rem', marginTop: '0.3rem', borderTop: '1px solid var(--color-border-light)' }}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', minHeight: '40px', justifyContent: 'center' }}
              >
                <FileText size={15} />
                <span>View Resume (PDF)</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
