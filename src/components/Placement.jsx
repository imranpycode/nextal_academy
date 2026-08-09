import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function Placement({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 400px)', paddingBottom: '4rem' }}>
      <div className="container-fluid">
        <div style={{ paddingTop: '2rem', marginBottom: '1.5rem' }}>
          <button 
            className="btn btn-secondary back-btn" 
            onClick={onBack}
            style={{ color: 'var(--text-primary)', borderColor: 'var(--text-primary)' }}
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>
        <section style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'start' }}>
          <div className="anim-text delay-1">
            <h1 className="section-title">Placement</h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Many IT professionals face unexpected job losses due to layoffs, automation, and changing market demands. 
              Staying updated with the latest technologies is essential to remain competitive in the industry. 
              Continuous upskilling and hands-on project experience significantly improve career opportunities. 
              The right training can help transform uncertainty into a successful new career path.
            </p>

            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-deep)', marginTop: '2.5rem', marginBottom: '1.25rem', fontWeight: '700' }}>
              What They Lacks Off
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Industry-Ready Training',
                'Hands-on Live Projects',
                'Placement Assistance',
                'AI-Powered Career Development'
              ].map((point, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: 'var(--text-body)' }}>
                  <CheckCircle size={20} color="var(--accent-coral)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: '500' }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="anim-image delay-2">
            <img src="/placement.png" alt="Placement and Career Opportunities" loading="lazy" decoding="async" style={{ maxWidth: '450px', width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </section>

        {/* Placed Students Category */}
        <section style={{ marginTop: '5rem', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title animated-heading-shimmer anim-text delay-1" style={{ marginTop: '0.75rem', marginBottom: '0' }}>Our Successors</h2>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem',
            width: '100%',
            margin: '0' 
          }}>
            {[
              'Adhul', 'Arun', 'Dinesh', 'Nihal', 'Rahul', 'Renisha', 'Reshma', 'Vijin', 'Vinisha'
            ].map((name, idx) => (
              <div key={idx} className={`anim-card delay-${(idx % 4) + 1}`} style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'var(--bg-surface)'
              }}>
                <img loading="lazy" decoding="async" 
                  src={`/placement/${name}.webp`} 
                  alt={`${name} Placement`} 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
