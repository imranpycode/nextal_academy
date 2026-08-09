import React, { useState, useEffect, useRef } from 'react';

const services = [
  { id: 0, img: "/images/service1-Photoroom.png", title: "Video Editing", subtitle: "Adobe Premiere Pro", desc: "Cinematic cuts & professional grading", slug: "video-editing", label: "PRO" },
  { id: 1, img: "/images/service2-Photoroom.png", title: "Motion Graphics", subtitle: "Adobe After Effects", desc: "Dynamic logo stings & particle VFX", slug: "motion-graphics", label: "VFX" },
  { id: 2, img: "/images/service3-Photoroom.png", title: "Social Media Reels", subtitle: "CapCut & Canva", desc: "High-retention hooks & viral pacing", slug: "social-reels", label: "REEL" },
  { id: 3, img: "/images/service4-Photoroom.png", title: "Data Science", subtitle: "Python & Analytics", desc: "Data cleaning, dashboards & ML", slug: "data-science", label: "DATA" },
  { id: 4, img: "/images/service5-Photoroom.png", title: "Generative AI", subtitle: "Prompt Engineering", desc: "AI art & text generation at scale", slug: "generative-ai", label: "GEN" },
  { id: 5, img: "/images/service6-Photoroom.png", title: "Agentic AI", subtitle: "Autonomous Workflows", desc: "Automate complex multi-step tasks", slug: "agentic-ai", label: "AGNT" },
  { id: 6, img: "/images/service7-Photoroom.png", title: "Live Portfolio", subtitle: "Client Briefs", desc: "Real commercial projects", slug: "live-portfolio", label: "LIVE" },
  { id: 7, img: "/images/service8-Photoroom.png", title: "Placement Support", subtitle: "Career Assistance", desc: "Mock interviews & placement help", slug: "placement-support", label: "JOB" }
];

const headlines = [
  { title: 'Explore Our Academy', sub: 'Verticals & Careers' },
  { title: 'Master Video Editing', sub: 'From Beginner to Pro' },
  { title: 'Learn Motion Graphics', sub: 'VFX & After Effects' },
  { title: 'Dive Into Generative AI', sub: 'Prompt Engineering & Tools' },
  { title: 'Build Your Creative Career', sub: 'Placement & Portfolio' },
];

export default function WhyUs({ onSelectService }) {
  const [slots, setSlots] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [introStarted, setIntroStarted] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const lineRefs = useRef([]);
  const requestRef = useRef(null);
  const prevTimeRef = useRef(null);

  // Physics state refs for 8 cards
  const posRef = useRef(services.map(() => ({ x: 0, y: 0 })));
  const velRef = useRef(services.map(() => ({ x: 0, y: 0 })));
  const scaleRef = useRef(services.map(() => 0)); // Start at 0 for page load animation
  const scaleVelRef = useRef(services.map(() => 0));

  // Staggered launch control for cinematic page load
  const launchDelayRef = useRef(services.map((_, i) => i * 150)); // Stagger by 150ms

  // Orbit rotation variables
  const angleOffsetRef = useRef(0);
  const targetRadiusRef = useRef(370);

  // Responsive radius for orbits
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 480) {
        targetRadiusRef.current = 150;
      } else if (width < 768) {
        targetRadiusRef.current = 220;
      } else if (width < 992) {
        targetRadiusRef.current = 280;
      } else {
        targetRadiusRef.current = 370;
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Interactive 3D Tilt refs
  const tiltRef = useRef(services.map(() => ({ x: 0, y: 0 })));
  const targetTiltRef = useRef(services.map(() => ({ x: 0, y: 0 })));
  const shinyRef = useRef(services.map(() => ({ x: 50, y: 50 })));

  // Auto swap interval for orbit cards
  useEffect(() => {
    if (!introStarted) return;
    const interval = setInterval(() => {
      setSlots((prev) => prev.map((slot) => (slot + 1) % services.length));
    }, 3800);

    return () => clearInterval(interval);
  }, [introStarted]);

  // Headline quote cycling with fade animation
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // Fade out
      setQuoteVisible(false);
      // After fade-out, switch quote and fade back in
      setTimeout(() => {
        setQuoteIdx((prev) => (prev + 1) % headlines.length);
        setQuoteVisible(true);
      }, 450);
    }, 3500);

    return () => clearInterval(cycleInterval);
  }, []);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 992) {
        targetRadiusRef.current = 370;
      } else if (width > 768) {
        targetRadiusRef.current = 250;
      } else {
        targetRadiusRef.current = 145;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger intro scale-in after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroStarted(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Frame animation loop with spring physics and dynamic 3D depth effects
  useEffect(() => {
    const animate = (time) => {
      if (prevTimeRef.current !== undefined) {
        const dt = Math.min((time - prevTimeRef.current) / 1000, 0.1); // Cap delta time at 100ms

        // Increment rotation offset slowly
        if (!isPaused && introStarted) {
          angleOffsetRef.current += 0.085 * dt;
        }

        // Spring constants (Adjusted for slower, graceful entry)
        const kPos = 120;
        const cPos = 16;
        const kScale = 80;   // Lowered from 180 for slower scaling
        const cScale = 14;   // Lowered from 18 for smoother damping
        const kTilt = 240;
        const cTilt = 22;

        services.forEach((service) => {
          const idx = service.id;
          const slot = slots[idx];
          const isCenter = slot === 0;

          // Target values
          let tx = 0;
          let ty = 0;
          let targetScale = 0;

          // Introduce staggered launch during page load
          if (introStarted) {
            if (isCenter) {
              targetScale = 1.45;
            } else {
              targetScale = 0.85;
            }
          }

          if (!isCenter) {
            const angle = angleOffsetRef.current + (2 * Math.PI * (slot - 1)) / 7;
            tx = targetRadiusRef.current * Math.cos(angle);
            ty = targetRadiusRef.current * Math.sin(angle);
          }

          // 1. Position Spring Integration
          const fx_pos = -kPos * (posRef.current[idx].x - tx) - cPos * velRef.current[idx].x;
          const fy_pos = -kPos * (posRef.current[idx].y - ty) - cPos * velRef.current[idx].y;

          velRef.current[idx].x += fx_pos * dt;
          velRef.current[idx].y += fy_pos * dt;
          posRef.current[idx].x += velRef.current[idx].x * dt;
          posRef.current[idx].y += velRef.current[idx].y * dt;

          // 2. Scale Spring Integration
          const f_scale = -kScale * (scaleRef.current[idx] - targetScale) - cScale * scaleVelRef.current[idx];
          scaleVelRef.current[idx] += f_scale * dt;
          scaleRef.current[idx] += scaleVelRef.current[idx] * dt;

          // 3. Tilt Spring Integration
          const fx_tilt = -kTilt * (tiltRef.current[idx].x - targetTiltRef.current[idx].x) - cTilt * (tiltRef.current[idx].x - targetTiltRef.current[idx].x) * 0.1;
          const fy_tilt = -kTilt * (tiltRef.current[idx].y - targetTiltRef.current[idx].y) - cTilt * (tiltRef.current[idx].y - targetTiltRef.current[idx].y) * 0.1;
          
          tiltRef.current[idx].x += fx_tilt * dt * 0.4;
          tiltRef.current[idx].y += fy_tilt * dt * 0.4;

          // Calculate continuous 3D depth based on Y coordinate
          let depthScale = 1.0;
          let depthOpacity = 1.0;
          
          if (!isCenter) {
            const normalizedY = posRef.current[idx].y / targetRadiusRef.current; // -1 at top, 1 at bottom
            // Scale goes from 1.0 (top) down to 0.88 (bottom)
            depthScale = 1.0 - (normalizedY + 1.0) * 0.06;
            // Brightness (opacity) goes from 1.0 (top) down to 0.72 (bottom)
            depthOpacity = 1.0 - (normalizedY + 1.0) * 0.14;
          }

          // Update DOM directly for max performance (avoid re-render reflows)
          const el = cardRefs.current[idx];
          if (el) {
            // Apply scale combined with depth scale
            const finalScale = scaleRef.current[idx] * (isCenter ? 1.0 : depthScale);
            el.style.transform = `translate3d(-50%, -50%, 0) translate3d(${posRef.current[idx].x}px, ${posRef.current[idx].y}px, 0) scale(${finalScale})`;
            el.style.zIndex = isCenter ? 15 : 2;
            el.style.opacity = depthOpacity;
            el.style.filter = 'none';

            // Dynamic color based on which side the card is on
            const cardX = posRef.current[idx].x;
            // Left side (navy bg) → yellow text; Right/center → navy text
            const onNavySide = cardX < -30;
            const cardTextColor = onNavySide ? '#FFF8D8' : '#000053';
            const orbitTitle = el.querySelector('.orbit-title');
            if (orbitTitle) orbitTitle.style.color = cardTextColor;

            // Dynamic Card Lighting & Glow Interpolation
            const imageBox = el.querySelector('.orbit-card-image-box');
            if (imageBox) {
              // Interpolate over a 300px transition zone across the center line (-150 to +150)
              const transitionT = Math.max(0, Math.min(1, (cardX + 150) / 300));
              const pctYellow = (transitionT * 100).toFixed(1);
              
              // Blue theme = rgba(0, 100, 255) | Yellow theme = rgba(255, 160, 0)
              const bg = `color-mix(in srgb, rgba(255, 250, 230, 0.95) ${pctYellow}%, rgba(230, 240, 255, 0.95))`;
              const shadowColor = `color-mix(in srgb, rgba(255, 160, 0, 0.45) ${pctYellow}%, rgba(0, 120, 255, 0.45))`;
              const borderColor = `color-mix(in srgb, rgba(255, 160, 0, 0.5) ${pctYellow}%, rgba(0, 120, 255, 0.5))`;
              
              imageBox.style.background = bg;
              imageBox.style.boxShadow = `0 4px 20px ${shadowColor}, inset 0 0 15px ${shadowColor}`;
              imageBox.style.borderColor = borderColor;
            }

            // Apply 3D Tilt & Light Reflection to the center card content
            const inner = el.querySelector('.orbit-card-inner');
            if (inner) {
              if (isCenter) {
                inner.style.transform = `perspective(1000px) rotateX(${tiltRef.current[idx].y}deg) rotateY(${tiltRef.current[idx].x}deg)`;
              } else {
                inner.style.transform = 'none';
              }
            }

            const glassReflect = el.querySelector('.orbit-card-glass-reflection');
            if (glassReflect) {
              glassReflect.style.background = 'none';
            }
          }

          // Update connection line elements
          const line = lineRefs.current[idx];
          if (line) {
            if (isCenter) {
              line.setAttribute('stroke-opacity', '0');
            } else {
              line.setAttribute('x1', '0');
              line.setAttribute('y1', '0');
              line.setAttribute('x2', posRef.current[idx].x.toString());
              line.setAttribute('y2', posRef.current[idx].y.toString());
              
              // Set line opacity matching card depth opacity and hover states
              const isCardHovered = hoveredIdx === idx;
              const lineBaseOpacity = depthOpacity * 0.22;
              line.setAttribute('stroke-opacity', isCardHovered ? '0.85' : lineBaseOpacity.toString());
              line.setAttribute('stroke-width', isCardHovered ? '2.5' : '1.2');
              line.setAttribute('stroke', isCardHovered ? 'var(--accent-coral)' : 'rgba(94, 8, 107, 0.28)');
            }
          }
        });
      }
      prevTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [slots, isPaused, introStarted, hoveredIdx]);

  // Center card Mouse Move interaction (3D Tilt & Shiny light reflection)
  const handleMouseMove = (idx, e) => {
    const slot = slots[idx];
    if (slot !== 0) return; // Only apply to center card

    const el = cardRefs.current[idx];
    if (!el) return;

    const inner = el.querySelector('.orbit-card-inner');
    if (!inner) return;

    const rect = inner.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = (x - rect.width / 2) / (rect.width / 2);
    const dy = (y - rect.height / 2) / (rect.height / 2);

    targetTiltRef.current[idx] = { x: dx * 6.5, y: -dy * 6.5 }; // Max tilt ~6.5 degrees
    shinyRef.current[idx] = { x: (x / rect.width) * 100, y: (y / rect.height) * 100 };
  };

  const handleMouseLeave = (idx) => {
    targetTiltRef.current[idx] = { x: 0, y: 0 };
    shinyRef.current[idx] = { x: 50, y: 50 };
  };

  const handleCardClick = (service, e) => {
    const cardIdx = service.id;
    const currentSlot = slots[cardIdx];

    // If already in center, navigate to details
    if (currentSlot === 0) {
      if (onSelectService) {
        e.preventDefault();
        onSelectService(service.slug);
      }
      return;
    }

    // Orbit card clicked: bring it to center first and stop navigation propagation
    e.preventDefault();
    e.stopPropagation();

    setSlots((prev) => {
      const centerIdx = prev.indexOf(0);
      const nextSlots = [...prev];
      nextSlots[centerIdx] = currentSlot;
      nextSlots[cardIdx] = 0;
      return nextSlots;
    });
  };

  const TextBlock = ({ color }) => (
    <div className="text-center mx-auto anim-text delay-2" style={{ marginBottom: '3.5rem' }}>
      <h2
        className="section-title"
        style={{
          color,
          fontSize: '3.5rem',
          lineHeight: '1.2',
          opacity: quoteVisible ? 1 : 0,
          transform: quoteVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.45s ease, transform 0.45s ease',
        }}
      >
        {headlines[quoteIdx].title}<br/>{headlines[quoteIdx].sub}
      </h2>
    </div>
  );

  return (
    <section id="why-us" className="section why-us-interactive-section" style={{ position: 'relative' }}>
      {/* Background Ambience / Subtle Glowing Nodes & Blobs */}
      <div className="orbit-ambient-dots">
        <div className="ambient-dot p1"></div>
        <div className="ambient-dot p2"></div>
        <div className="ambient-dot p3"></div>
        <div className="ambient-particles"></div>
      </div>
      
      {/* ── Sliding Shutter Panels (Decor) ── */}
      <div className="premium-shutter-layer" aria-hidden="true" />
      <div className="navy-shutter-layer" aria-hidden="true" />

      <div className="container" style={{ zIndex: 2 }}>
        
        {/* Full Section Wrapper for Text Shutters (Absolute, covers full padding-box of section) */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, pointerEvents: 'none', zIndex: 10 }}>
          
          {/* Yellow Text Shutter (Navy Text) */}
          <div className="text-shutter-yellow">
            <div className="shutter-counter-transform-yellow">
              {/* Flex Container to perfectly mimic the <section>'s vertical centering */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <div className="container">
                  <TextBlock color="#000053" />
                  {/* Dummy carousel to force exact same height for vertical flex synchronization */}
                  <div className="orbit-carousel-container" style={{ visibility: 'hidden' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Navy Text Shutter (Yellow Text) */}
          <div className="text-shutter-navy">
            <div className="shutter-counter-transform-navy">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <div className="container">
                  <TextBlock color="#FFF8D8" />
                  {/* Dummy carousel to force exact same height for vertical flex synchronization */}
                  <div className="orbit-carousel-container" style={{ visibility: 'hidden' }} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Base Text Wrapper (Static, visible in gap before shutters close) */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <TextBlock color="#000053" />
        </div>

        {/* Circular Orbit Carousel Container */}
        <div 
          className="orbit-carousel-container" 
          ref={containerRef} 
          style={{ position: 'relative', zIndex: 2 }}
        >
          {/* Background Rotating Ring Rings (Single Orbit Ring) */}
          <div className="orbit-bg-ring outer"></div>

          {/* SVG Connector Lines Container */}
          <svg className="orbit-connect-lines-svg" style={{ position: 'absolute', pointerEvents: 'none', overflow: 'visible', width: 0, height: 0, zIndex: 1 }}>
            {services.map((service) => (
              <line
                key={service.id}
                ref={(el) => (lineRefs.current[service.id] = el)}
                className="orbit-connect-line"
                strokeWidth="1.2"
                stroke="rgba(94, 8, 107, 0.28)"
                strokeDasharray="6 6"
              />
            ))}
          </svg>

          {/* Wrapper inside containing the elements */}
          <div className="orbit-interactive-area anim-image delay-4" style={{ position: 'absolute', width: 0, height: 0 }}>
            
            {/* Center Background Glowing Energy rings */}
            <div className="center-card-energy-halo"></div>
            <div className="center-card-energy-ring"></div>

            {services.map((service) => {
              const slotIdx = slots[service.id];
              const isCenter = slotIdx === 0;

              return (
                <div
                  key={service.id}
                  ref={(el) => (cardRefs.current[service.id] = el)}
                  className={`orbit-slot-wrapper ${isCenter ? 'center-active' : 'orbit-active'}`}
                  onMouseMove={(e) => handleMouseMove(service.id, e)}
                  onMouseLeave={() => handleMouseLeave(service.id)}
                  onMouseEnter={() => !isCenter && setHoveredIdx(service.id)}
                  onMouseOver={() => !isCenter && setHoveredIdx(service.id)}
                  onMouseOut={() => setHoveredIdx(null)}
                  style={{ position: 'absolute' }}
                >
                  <div className="orbit-card-rotator">
                    <a
                      href={`/services/${service.slug}`}
                      className="orbit-card-inner"
                      onClick={(e) => handleCardClick(service, e)}
                    >
                      {/* Image container box */}
                      <div className="orbit-card-image-box">
                        <img src={service.img} alt={service.title} className="orbit-card-image" loading="lazy" decoding="async" />
                        
                        {/* Dynamic shininess element overlay (3D reflection) */}
                        <div className="orbit-card-glass-reflection"></div>

                        {/* Hover Overlay with Short Labels */}
                        {!isCenter && (
                          <div className="orbit-card-hover-overlay">
                            <span className="orbit-card-hover-label">{service.label}</span>
                          </div>
                        )}
                      </div>

                      {/* Info structure toggleable by CSS classes based on center status */}
                      <div className="orbit-card-meta">
                        {isCenter ? (
                          <div className="center-card-content">
                            <span className="center-subtitle">{service.subtitle}</span>
                            <span className="center-title">{service.title}</span>
                            <p className="center-description">{service.desc}</p>
                          </div>
                        ) : (
                          <div className="orbit-card-content">
                            <span className="orbit-title">{service.title}</span>
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

