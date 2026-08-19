import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  Settings, 
  Star, 
  Lightbulb, 
  Bell, 
  Brain, 
  Zap, 
  Target 
} from 'lucide-react';

const steps = [
  { id: '01', label: 'AI sorts' },
  { id: '02', label: 'Assign' },
  { id: '03', label: 'Reminds' },
  { id: '04', label: 'Completes' }
];

const pills = [
  { label: 'Auto-sorts', icon: <Settings size={14} /> },
  { label: 'Prioritizes', icon: <Star size={14} /> },
  { label: 'Suggests', icon: <Lightbulb size={14} /> },
  { label: 'Reminds', icon: <Bell size={14} /> },
  { label: 'Learns', icon: <Brain size={14} /> },
  { label: 'Simplifies', icon: <Zap size={14} /> },
  { label: 'Tracks', icon: <Target size={14} /> }
];

export default function SpotlightCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const nodesRef = useRef([]);
  const tlRef = useRef(null);
  
  // Track active angle for resize robustness. We start active node at -90 degrees.
  const proxyRef = useRef({ rotation: 0 });

  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      let radius = 0;
      let centerX = 0;
      let centerY = 0;
      
      const updateGeometry = () => {
        if (!containerRef.current) return;
        const w = window.innerWidth;
        // Clamp radius to max 1200px so it doesn't get completely flat on ultrawides
        radius = Math.min(w * 1.5, 1200) / 2; 
        centerX = containerRef.current.offsetWidth / 2;
        centerY = radius; // Center of circle is below the container so only top arc is visible
      };
      
      const updateNodes = (rotationOffset) => {
        nodesRef.current.forEach((node, idx) => {
           // We have 4 steps. Position them 45 degrees apart starting from -90.
           // 0: -90, 1: -45, 2: 0, 3: -135
           const baseAngles = [-90, -45, 0, -135];
           let currentAngle = baseAngles[idx] + rotationOffset;
           
           const rad = currentAngle * (Math.PI / 180);
           const x = centerX + radius * Math.cos(rad);
           const y = centerY + radius * Math.sin(rad);
           
           // Normalize to -180..180 for distance-to-center calculation
           let normalized = currentAngle % 360;
           if (normalized > 180) normalized -= 360;
           if (normalized <= -180) normalized += 360;
           
           // Distance from -90 (top center)
           let diff = Math.abs(normalized - (-90));
           
           // If diff > 90, it's offscreen mostly. Progress is 1 at center, 0 at 45 deg.
           let progressToCenter = Math.max(0, 1 - (diff / 45)); 
           
           let scale = 0.6 + (0.4 * progressToCenter);
           let opacity = 0.5 + (0.5 * progressToCenter);
           
           gsap.set(node, {
             x: x,
             y: y,
             xPercent: -50,
             yPercent: -50,
             scale: scale,
             opacity: opacity,
             zIndex: progressToCenter > 0.5 ? 10 : 5
           });
           
           if (progressToCenter > 0.9) {
             node.classList.add('sl-active');
           } else {
             node.classList.remove('sl-active');
           }
        });
      };
      
      const buildTimeline = () => {
        if (tlRef.current) tlRef.current.kill();
        
        tlRef.current = gsap.timeline({ repeat: -1 });
        
        // Build 4 steps of animation
        for(let i = 1; i <= steps.length; i++) {
           tlRef.current.to(proxyRef.current, {
             rotation: i * -45,
             duration: 0.8,
             ease: 'power2.inOut',
             onUpdate: () => {
               updateNodes(proxyRef.current.rotation);
             }
           }, `+=${1.5}`);
        }
      };

      // Initialization
      updateGeometry();
      updateNodes(proxyRef.current.rotation);
      buildTimeline();
      
      // Resize handler with debounce
      let resizeTimer;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          updateGeometry();
          updateNodes(proxyRef.current.rotation);
        }, 150);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (tlRef.current) tlRef.current.kill();
      };
    });
    
    // Reduced motion fallback
    mm.add("(prefers-reduced-motion: reduce)", () => {
       if (!containerRef.current) return;
       const w = window.innerWidth;
       const radius = Math.min(w * 1.5, 1200) / 2;
       const centerX = containerRef.current.offsetWidth / 2;
       const centerY = radius;
       
       nodesRef.current.forEach((node, idx) => {
         if(idx === 0) {
           const rad = -90 * (Math.PI / 180);
           gsap.set(node, {
             x: centerX + radius * Math.cos(rad),
             y: centerY + radius * Math.sin(rad),
             xPercent: -50,
             yPercent: -50,
             scale: 1,
             opacity: 1,
             zIndex: 10
           });
           node.classList.add('sl-active');
         } else {
           gsap.set(node, { display: 'none' });
         }
       });
    });
    
    return () => mm.revert();
  }, []);

  return (
    <div className="spotlight-carousel-wrapper" ref={containerRef}>
      <div className="spotlight-container">
        <div className="spotlight-track" ref={trackRef}>
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="spotlight-node" 
              ref={el => nodesRef.current[idx] = el}
            >
              <div className="spotlight-node-inner">
                <div className="sl-ring-gradient"></div>
                <div className="sl-ring-dashed"></div>
                <div className="sl-content">
                  <div className="sl-id">{step.id}</div>
                  <div className="sl-label">{step.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="spotlight-static-content">
          <h3 className="spotlight-heading">Your AI Productivity</h3>
          <div className="spotlight-pills">
            {pills.map((pill, idx) => (
              <div key={idx} className="sl-pill">
                {pill.icon}
                <span>{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
