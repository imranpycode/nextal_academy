import React, { lazy, Suspense } from 'react';
import { CheckCircle2, Award, Bot, Send, BookOpen, Clapperboard } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const RobotCat = lazy(() => import('./Robot_cat'));

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("3D Canvas failed to load (likely due to WebGL issues on this device):", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Interactive 3D model unavailable on this device.</p>
        </div>
      );
    }
    return this.props.children;
  }
}



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
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">

            <h1 className="hero-title anim-text delay-2" style={{ width: 'fit-content', maxWidth: 'none' }}>
              <div style={{ whiteSpace: isMobile ? 'normal' : 'nowrap' }}>
                <span>Master </span>
                <span className="accent">Creative AI</span>
              </div>
              <div style={{ whiteSpace: isMobile ? 'normal' : 'nowrap' }}>
                <span>& Build Your Future</span>
              </div>
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
              letterSpacing: '0.12em'
            }}>
              <span style={{ color: '#90E0EF' }}>Learn</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ color: '#90E0EF' }}>Practise</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ color: '#90E0EF' }}>Build</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ color: '#F7931E' }}>Grow</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ color: '#F7931E' }}>Evolve</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span className="gradient-text" style={{ fontSize: '1.2em', fontWeight: '900', letterSpacing: '0.15em' }}>BECOME</span>
            </div>

            <p className="hero-subtitle anim-text delay-4" style={{ maxWidth: '100%' }}>
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
              {!isMobile ? (
                <CanvasErrorBoundary>
                  <Canvas camera={{ position: [0, 1.5, 9.5], fov: 42 }} style={{ width: '100%', height: '100%', cursor: 'grab', overflow: 'visible' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} />
                    <spotLight position={[-5, 5, -5]} intensity={4} color="#ffffff" />
                    <spotLight position={[0, -5, 2]} intensity={3} color="#00C896" angle={0.5} penumbra={1} />
                    <Environment preset="city" />
                    <Suspense fallback={null}>
                      <RobotCat 
                        position={[0.2, -4.5, 0]} 
                        scale={3.8} 
                        rotation={[0, -Math.PI / 2.2, 0]} 
                      />
                    </Suspense>
                  </Canvas>
                </CanvasErrorBoundary>
              ) : (
                <img 
                  src="/robo_doll.png" 
                  alt="Creative Video Editing Mascot" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    transform: 'translateY(-10px)',
                    mixBlendMode: 'lighten',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 72%)',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 72%)'
                  }} 
                  loading="lazy" 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
