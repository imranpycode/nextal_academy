import React from 'react';
import { CheckCircle2, Award, Bot, Send, BookOpen, Clapperboard } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import RobotCat from './Robot_cat';

const AnimatedCounter = ({ target, suffix, delay }) => {
  const [count, setCount] = React.useState(0);
  const [isCounting, setIsCounting] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      setIsFinished(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setTimeout(() => {
            setIsCounting(true);
            let startTime = null;
            const duration = 2000; // ~2 seconds for counting

            const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const t = Math.min(progress / duration, 1);
              
              const currentCount = Math.floor(easeOutCubic(t) * target);
              setCount(currentCount);

              if (t < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target);
                setIsCounting(false);
                setIsFinished(true);
              }
            };
            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <h3 ref={ref} className={`stat-number ${isCounting ? 'counting' : ''} ${isFinished ? 'finished' : ''}`}>
      <span className="stat-value">{count}</span>
      <span style={{ opacity: isFinished ? 1 : 0, transition: 'opacity 0.2s ease', display: 'inline-block', color: '#F62477' }}>
        {suffix}
      </span>
    </h3>
  );
};

export default function Hero({ onOpenEnrollModal }) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div style={{ padding: '0 clamp(1rem, 5vw, 2rem)', width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge-list anim-badge delay-1">
              <span className="hero-pill"><CheckCircle2 size={14} /> 100% Practical Training</span>
              <span className="hero-pill"><Award size={14} /> Industry Recognized Certificate</span>
              <span className="hero-pill"><Bot size={14} /> AI-Powered Tools Included</span>
            </div>

            <h1 className="hero-title anim-text delay-2">
              Master Professional <span className="accent">Video Editing</span> & Build a Creative Career
            </h1>

            <p className="hero-subtitle anim-text delay-3">
              Job-oriented Video Editing Training in Nagercoil covering fundamentals, Adobe Premiere Pro, After Effects, Motion Graphics, Social Media Reels, Cinematic Editing, and AI Tools.
            </p>

            <div className="hero-actions anim-button delay-4">
              <button className="btn btn-primary" onClick={onOpenEnrollModal}>
                <Send size={16} /> Apply For Admission
              </button>
              <a href="#syllabus" className="btn btn-secondary">
                <BookOpen size={16} /> Explore Curriculum
              </a>
            </div>

            <div className="hero-stats anim-text delay-7">
              <div className="stat-item">
                <AnimatedCounter target={100} suffix="%" delay={100} />
                <p>Practical Training</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter target={6} suffix="+" delay={250} />
                <p>Editing Tools</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter target={10} suffix="+" delay={400} />
                <p>Live Projects</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter target={100} suffix="%" delay={550} />
                <p>Placement Support</p>
              </div>
            </div>
          </div>

          <div className="hero-media-wrapper">
            <div className="hero-image-frame anim-image delay-5" style={{ background: 'transparent', padding: '0', boxShadow: 'none', border: 'none', height: '550px', overflow: 'visible' }}>
              <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }} style={{ width: '100%', height: '100%', cursor: 'grab', overflow: 'visible' }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <spotLight position={[-5, 5, -5]} intensity={4} color="#ffffff" />
                <spotLight position={[0, -5, 2]} intensity={3} color="#00C896" angle={0.5} penumbra={1} />
                <Environment preset="city" />
                <RobotCat 
                  position={isMobile ? [0, -2.5, 0] : [-1.0, -2.3, 0]} 
                  scale={isMobile ? 1.6 : 2.0} 
                  rotation={[0, -Math.PI / 2, 0]} 
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
