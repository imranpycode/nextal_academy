import React from 'react';
import { UserCheck, Briefcase, Check, ArrowRight } from 'lucide-react';

export default function Careers() {
  const audience = [
    "Students", "Fresh Graduates", "Content Creators", "YouTubers",
    "Social Media Managers", "Digital Marketers", "Freelancers",
    "Entrepreneurs", "Videographers", "Anyone Passionate"
  ];

  const roles = [
    "Video Editor", "Motion Graphics Designer", "YouTube Video Editor",
    "Social Media Editor", "Advertising Video Editor", "Film Editor",
    "Corporate Video Editor", "Post Production Executive", "Freelance Video Editor",
    "Content Creator"
  ];

  return (
    <section id="careers" className="section">
      <div className="container">
        <div className="dual-grid">
          <div className="info-box-card">
            <h3><UserCheck size={24} style={{ color: 'var(--accent-coral)' }} /> Who Can Join This Course?</h3>
            <p style={{ marginBottom: '1.5rem' }}>Our Video Editing Classes are beginner-friendly with no prior editing experience required!</p>
            <div className="pill-list">
              {audience.map((item, idx) => (
                <span className="target-pill" key={idx}>
                  <Check size={16} style={{ color: 'var(--accent-cyan)' }} /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="info-box-card">
            <h3><Briefcase size={24} style={{ color: 'var(--accent-coral)' }} /> Career Opportunities</h3>
            <p style={{ marginBottom: '1.5rem' }}>Video editors are in high demand across media, advertising, production houses, and remote freelancing.</p>
            <div className="pill-list">
              {roles.map((item, idx) => (
                <span className="target-pill" key={idx}>
                  <ArrowRight size={16} style={{ color: 'var(--accent-cyan)' }} /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
