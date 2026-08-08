import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Blogs({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 400px)', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ paddingTop: '10rem', marginBottom: '2rem' }}>
          <button 
            className="btn btn-secondary back-btn" 
            onClick={onBack}
            style={{ color: 'var(--text-primary)', borderColor: 'var(--text-primary)' }}
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>
        <h1 className="section-title">Blogs</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Coming soon...</p>
      </div>
    </div>
  );
}
