import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand anim-image delay-1">
            <a href="#home" className="footer-logo">
              <img src="/nextal white logo.png" alt="Nextal Academy" width="140" height="40" style={{ height: 'auto', width: '100%', maxWidth: '140px' }} loading="lazy" decoding="async" />
            </a>
            <p>
              Nagercoil's premier skill development institute providing
              job-oriented practical training in Video Editing, Motion
              Graphics, and Digital Media Production.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/nextal_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'rgba(255,255,255,0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#E1306C'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61581030963089&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'rgba(255,255,255,0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1877F2'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/showcase/nextal-academy/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'rgba(255,255,255,0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0A66C2'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col anim-text delay-2">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#syllabus">Course Modules</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          {/* Course Modules */}
          <div className="footer-col anim-text delay-3">
            <h3>Course Modules</h3>
            <div className="footer-links">
              <a href="#syllabus">AI Digital Marketing</a>
              <a href="#syllabus">UI/UX Design</a>
              <a href="#syllabus">Graphic Design</a>
              <a href="#syllabus">Web Development</a>
              <a href="#syllabus">Video Editing</a>
              <a href="#syllabus">Generative AI</a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col anim-text delay-4">
            <h3>Get In Touch</h3>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <a href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwj4iYCE566WAxUAAAAAHQAAAAAQBw..i&sca_esv=ed6da2d1bfbc369e&mstk=AUtExfBkC4aRU7ZywGLz57uZmi4W6UoXa6oqu49ZESuXeMrkxP4gn8GW2ZEUgV6rLyq1Xl34ny6qvGpGZCdGX_Dw1C97AzrhyteeoYKk1dl5boH8m6M4mT1O7YP1PMgl4-J9d4TGa5rTCgKejTX6Yt8dKT-jfq0CxlnItr3iyWTB19iVdWwWo8Z56h2mQXZ5YTj16w9K&pvq=Cg0vZy8xMXpoNHJkenB5gAEB&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3b04f96c0c22d09f:0xb380cd21e268d473" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                Nextal Academy, Main Road, Nagercoil, Tamil Nadu – 629001
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <a href="tel:+919487167617" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 94871 67617 | +91 93452 97937
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href="mailto:info@nextalacademy.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                info@nextalacademy.com
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p>&copy; 2026 Nextal Academy. All Rights Reserved.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.6)' }}>
              <a href="/terms" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-coral)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Terms &amp; Conditions</a>
              <span>|</span>
              <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-coral)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Privacy Policy</a>
            </div>
          </div>
          <a href="#home" className="footer-back-top">
            <ArrowUp size={16} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
