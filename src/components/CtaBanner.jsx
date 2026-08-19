import React from 'react';
import { UserPlus } from 'lucide-react';

export default function CtaBanner({ onOpenEnrollModal }) {
  return (
    <section className="section" style={{ padding: '0 0 5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container-fluid">
        <div id="enroll" className="cta-banner anim-image delay-1" style={{ borderRadius: 'var(--radius-lg)', margin: '3rem 0' }}>
          <div className="cta-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="anim-text delay-2">
              Master In-Demand Digital Skills <br/> at Nextal Academy
            </h2>
            <p className="anim-text delay-3">
              Launch your career in Development, AI, UI/UX, Motion Graphics, and Marketing. <br/> 
              Transform your passion into professional skills with our expert-led training.
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
