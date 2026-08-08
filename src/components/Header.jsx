import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ onOpenEnrollModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Small delay to ensure CSS transitions trigger
    setTimeout(() => setMounted(true), 50);
  }, []);

  // Reset header visibility on every route change (popstate)
  useEffect(() => {
    const onRouteChange = () => {
      setIsHidden(false);
      setScrolled(false);
      lastScrollY.current = 0;
    };
    window.addEventListener('popstate', onRouteChange);
    return () => window.removeEventListener('popstate', onRouteChange);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setScrolled(currentScrollY > 40);

          if (currentScrollY < 50) {
            // Always show when near top
            setIsHidden(false);
          } else if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
            // Hide on scroll down, show on scroll up
            setIsHidden(currentScrollY > lastScrollY.current);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setMobileNavOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}${isHidden ? ' hidden' : ''}`}>
      <div className="header-container">
        <div className="header-inner">

          {/* Brand Logo */}
          <a href="#home" className="brand-logo">
            <img src="/academy_logo.webp" alt="Nextal Academy" fetchpriority="high" decoding="async" />
          </a>

          {/* Navigation */}
          <nav className={`nav-menu${mobileNavOpen ? ' active' : ''}`}>
            <a href="#home"    className="nav-link" onClick={closeNav}>Home</a>
            <a href="#why-us"  className="nav-link" onClick={closeNav}>Why Us</a>

            <div className="nav-dropdown">
              <a href="#syllabus" className="nav-link dropdown-toggle" onClick={closeNav}>
                Lectures <ChevronDown size={14} style={{ marginLeft: '4px' }} />
              </a>
              <div className="dropdown-menu dropdown-menu-large">
                <div className="dropdown-group">
                  <h4 className="dropdown-heading">Digital Marketing</h4>
                  <a href="/course/ai-digital-marketing" className="dropdown-item" onClick={closeNav}>AI Integrated Digital Marketing</a>
                  <a href="/course/diploma-digital-marketing" className="dropdown-item" onClick={closeNav}>Diploma in Digital Marketing</a>
                </div>
                
                <div className="dropdown-group">
                  <h4 className="dropdown-heading">Design & Creative</h4>
                  <a href="/course/ui-ux" className="dropdown-item" onClick={closeNav}>UI/UX Design</a>
                  <a href="/course/graphic-design" className="dropdown-item" onClick={closeNav}>Graphic Design</a>
                  <a href="/course/designer-pro" className="dropdown-item" onClick={closeNav}>Designer Pro</a>
                </div>

                <div className="dropdown-group">
                  <h4 className="dropdown-heading">Software Development</h4>
                  <a href="/course/web-development" className="dropdown-item" onClick={closeNav}>Web Development</a>
                  <a href="/course/app-development" className="dropdown-item" onClick={closeNav}>App Development</a>
                </div>

                <div className="dropdown-group">
                  <h4 className="dropdown-heading">Video Editing</h4>
                  <a href="/course/basic-video-editing" className="dropdown-item" onClick={closeNav}>Basic Video Editing</a>
                  <a href="/course/motion-graphics" className="dropdown-item" onClick={closeNav}>Motion Graphics</a>
                </div>

                <div className="dropdown-group">
                  <h4 className="dropdown-heading">Generative AI</h4>
                  <a href="/course/adv-gen-ai" className="dropdown-item" onClick={closeNav}>Advanced Certification in Gen AI</a>
                </div>
              </div>
            </div>

            <a href="/placement" className="nav-link" onClick={closeNav}>Placement</a>
            <a href="/blogs"     className="nav-link" onClick={closeNav}>Blogs</a>
            <a href="#faq"       className="nav-link" onClick={closeNav}>FAQ</a>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={onOpenEnrollModal}>
              <Sparkles size={16} /> Enroll Now
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileNavOpen(prev => !prev)}
              aria-label="Toggle navigation"
            >
              {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
