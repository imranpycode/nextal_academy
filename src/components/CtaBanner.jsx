import React from 'react';
import { UserPlus } from 'lucide-react';

export default function CtaBanner({ onOpenEnrollModal }) {
  return (
    <section className="section" style={{ padding: '0 0 5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container-fluid">
        <div id="enroll" className="cta-banner anim-image delay-1" style={{ borderRadius: 'var(--radius-lg)', margin: '3rem 0' }}>
          <div className="cta-content">
            <h2 className="anim-text delay-2">Enroll in the Best Video Editing Course in Nagercoil</h2>
            <p className="anim-text delay-3">
              Take the first step toward a creative career with Nextal Academy. Transform your creativity into professional video editing skills!
            </p>
            <div className="anim-button delay-4">
              <button className="btn btn-primary" onClick={onOpenEnrollModal} style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                <UserPlus size={20} /> Join Nextal Academy Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
