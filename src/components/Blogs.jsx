import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Blogs({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="observe-root" style={{ minHeight: 'calc(100vh - 400px)', paddingBlock: 'var(--section-spacing-md)', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <button 
            className="btn btn-secondary back-btn anim-button delay-1" 
            onClick={onBack}
            style={{ color: 'var(--text-primary)', borderColor: 'var(--text-primary)' }}
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>
        <h1 className="section-title anim-text delay-2">Blogs</h1>
        <p className="anim-text delay-3" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Coming soon...</p>
      </div>
    </div>
  );
}
