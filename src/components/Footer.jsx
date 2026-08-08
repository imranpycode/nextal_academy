import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-col anim-text delay-1">
            <a href="#home" className="footer-logo">
              <img src="/academy_logo.webp" alt="Nextal Academy" loading="lazy" decoding="async" />
            </a>
            <p>
              Nagercoil's premier skill development institute providing
              job-oriented practical training in Video Editing, Motion
              Graphics, and Digital Media Production.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col anim-text delay-2">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#syllabus">Course Modules</a>

              <a href="#faq">FAQ</a>
            </div>
          </div>

          {/* Course Modules */}
          <div className="footer-col anim-text delay-3">
            <h4>Course Modules</h4>
            <div className="footer-links">
              <a href="#syllabus">Editing Fundamentals</a>
              <a href="#syllabus">Adobe Premiere Pro</a>
              <a href="#syllabus">Adobe After Effects</a>
              <a href="#syllabus">Social Media &amp; Reels</a>
              <a href="#syllabus">Cinematic Editing</a>
              <a href="#syllabus">AI Video Editing Tools</a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col anim-text delay-4">
            <h4>Get In Touch</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Nextal Academy, Main Road, Nagercoil, Tamil Nadu – 629001</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>admissions@nextalacademy.com</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Nextal Academy. All Rights Reserved.</p>
          <a href="#home" className="footer-back-top">
            <ArrowUp size={16} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
