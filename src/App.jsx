import React, { useState, useEffect } from 'react';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Ensure dark mode is completely removed
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  // Loader lifecycle matching khushikhurana.tech
  useEffect(() => {
    let minTimeElapsed = false;
    let pageLoaded = false;

    const triggerFadeOut = () => {
      if (minTimeElapsed && pageLoaded) {
        setFadeOut(true);
        setTimeout(() => {
          setShowLoader(false);
        }, 550);
      }
    };

    // Allow stroke drawing animation cycle to play (~1.85s)
    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      triggerFadeOut();
    }, 1850);

    if (document.readyState === 'complete') {
      pageLoaded = true;
      triggerFadeOut();
    } else {
      const handleLoad = () => {
        pageLoaded = true;
        triggerFadeOut();
      };
      window.addEventListener('load', handleLoad);
      return () => {
        clearTimeout(minTimer);
        window.removeEventListener('load', handleLoad);
      };
    }

    return () => clearTimeout(minTimer);
  }, []);

  // Lock scroll while intro loader is visible
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showLoader]);

  return (
    <div className="min-h-screen">
      {/* Opening Intro Page Loader */}
      {showLoader && <PageLoader fadeOut={fadeOut} />}

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Services />
        <Skills />
        <About />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
