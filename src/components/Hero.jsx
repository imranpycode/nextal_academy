import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { CheckCircle2, Award, Bot, Send, BookOpen, Clapperboard } from 'lucide-react';

const HeroScene = lazy(() => import('./HeroScene'));

export default function Hero({ onOpenEnrollModal }) {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let observer;
    
    if (heroRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldLoad3D(true);
            if (observer) {
              observer.disconnect();
            }
          }
        },
        {
          rootMargin: '200px'
        }
      );
      
      observer.observe(heroRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">

            <h1 className="hero-title anim-text delay-2">
              <span className="laptop-nowrap">Master <span className="accent">Creative AI</span></span>
              <br className="laptop-break" />
              <span className="laptop-nowrap">& Build Your Future</span>
            </h1>

            <div className="hero-evolution-steps anim-text delay-3" style={{ 
              display: 'flex', 
              flexWrap: 'nowrap', 
              gap: 'clamp(0.4rem, 2vw, 0.8rem)', 
              alignItems: 'center',
              marginBottom: '1.5rem',
              fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#ffffff'
            }}>
              <span>Learn</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span>Practise</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span>Build</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span>Grow</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span>Evolve</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ fontSize: '1.2em', fontWeight: '900', letterSpacing: '0.15em' }}>BECOME</span>
            </div>

            <p className="hero-subtitle anim-text delay-4" style={{ maxWidth: '100%', color: '#d3d3d3' }}>
              Premium Job-Oriented Academy in Nagercoil. Master Video Editing, Motion Graphics, Full Stack Development, and Advanced Generative AI to launch your dream career.
            </p>

            <div className="hero-actions anim-button delay-5">
              <button className="btn btn-primary" onClick={onOpenEnrollModal}>
                <Send size={16} /> Apply For Admission
              </button>
              <a href="#syllabus" className="btn btn-secondary">
                <BookOpen size={16} /> Explore Curriculum
              </a>
            </div>


          </div>

        <div className="hero-media-wrapper">
            <div className="hero-image-frame anim-image delay-5" style={{ background: 'transparent', padding: '0', boxShadow: 'none', border: 'none', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
              {shouldLoad3D ? (
                <Suspense fallback={
                  <div style={{ width: '100%', height: '100%', borderRadius: '20px', background: 'radial-gradient(circle at center, rgba(142, 68, 173, 0.15) 0%, rgba(0, 0, 0, 0) 70%)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                }>
                  <HeroScene isMobile={isMobile} />
                </Suspense>
              ) : (
                <div style={{ width: '100%', height: '100%', borderRadius: '20px', background: 'radial-gradient(circle at center, rgba(142, 68, 173, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
