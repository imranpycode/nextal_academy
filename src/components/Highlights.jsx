import React, { useEffect, useRef } from 'react';
import { 
  GraduationCap, Wrench, Briefcase, FolderOpen, Clapperboard, 
  Bot, FileText, MessageSquare, Building2, Award, Medal
} from 'lucide-react';
import gsap from 'gsap';

export default function Highlights() {
  const sectionRef = useRef(null);

  const highlights = [
    { text: "Beginner to Advanced Training", icon: <GraduationCap size={28} /> },
    { text: "Hands-on Practical Sessions", icon: <Wrench size={28} /> },
    { text: "Live Client Projects", icon: <Briefcase size={28} /> },
    { text: "Portfolio & Resume Building", icon: <FolderOpen size={28} /> },
    { text: "AI Video Editing Tools", icon: <Bot size={28} /> },
    { text: "Interview Preparation", icon: <MessageSquare size={28} /> },
    { text: "Internship Opportunities", icon: <Building2 size={28} /> },
    { text: "Placement Assistance", icon: <Award size={28} /> },
    { text: "Industry Recognized Certificate", icon: <Medal size={28} /> }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const circles = section.querySelectorAll('.hl-circle');
    const container = section.querySelector('.highlights-scroll-container');

    // Build one single GSAP timeline with infinite repeat
    const tl = gsap.timeline({
      repeat: -1,       // Loop forever
      repeatDelay: 1.5  // 1.5s pause between each full wave pass
    });

    let hoveringCirclesCount = 0;
    let isIntersecting = false;
    let interactionTimeout = null;
    const cleanupFunctions = [];

    const playTl = () => {
      if (isIntersecting && hoveringCirclesCount === 0 && !interactionTimeout) {
        tl.play();
      }
    };

    const pauseTl = () => {
      tl.pause();
    };

    const handleUserInteraction = (e) => {
      // Ignore vertical scrolling so the animation doesn't pause when just scrolling the page
      if (e && e.type === 'wheel') {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          return;
        }
      }
      pauseTl();
      if (container) {
        gsap.killTweensOf(container); // Stop the programmatic scroll immediately
      }
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        interactionTimeout = null;
        playTl();
      }, 1500); // Resume 1.5s after interaction ends
    };

    circles.forEach((circle, index) => {
      const position = index * (0.7 - 0.12); // 0.12s overlap between each circle

      // Reset initial state just in case
      gsap.set(circle, { x: 0, y: 0, rotation: 0 });

      tl.to(
        circle,
        {
          keyframes: [
            { x: 18, y: -18, rotation: 8,  duration: 0.35, ease: 'power2.in' },
            { x: 0,  y: 0,   rotation: 0,  duration: 0.35, ease: 'power2.out' }
          ],
          onStart: () => {
            const wrapper = circle.closest('.hl-circle-wrapper');
            
            if (container && wrapper) {
              // Smoothly scroll to center the active circle using GSAP so it can be interrupted
              const scrollTarget = wrapper.offsetLeft - container.offsetWidth / 2 + wrapper.offsetWidth / 2;
              gsap.to(container, { scrollLeft: scrollTarget, duration: 0.5, ease: 'power2.out' });
              
              // Apply active glow class
              section.querySelectorAll('.hl-circle-wrapper').forEach(w => w.classList.remove('active-glow'));
              wrapper.classList.add('active-glow');
            }
          }
        },
        position
      );

      // Hover events for each circle
      const wrapper = circle.closest('.hl-circle-wrapper');
      if (wrapper) {
        const handleMouseEnter = () => {
          hoveringCirclesCount++;
          pauseTl();
        };
        const handleMouseLeave = () => {
          hoveringCirclesCount = Math.max(0, hoveringCirclesCount - 1);
          // Short delay to allow smooth transition checking before resuming
          setTimeout(playTl, 50);
        };
        
        wrapper.addEventListener('mouseenter', handleMouseEnter);
        wrapper.addEventListener('mouseleave', handleMouseLeave);
        
        cleanupFunctions.push(() => {
          wrapper.removeEventListener('mouseenter', handleMouseEnter);
          wrapper.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    });

    // Scroller / User scroll events
    if (container) {
      container.addEventListener('wheel', handleUserInteraction, { passive: true });
      container.addEventListener('touchstart', handleUserInteraction, { passive: true });
      container.addEventListener('touchmove', handleUserInteraction, { passive: true });
      container.addEventListener('mousedown', handleUserInteraction, { passive: true });
    }

    // Pause timeline initially, play only when section is in view
    tl.pause();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            playTl();
          } else {
            pauseTl();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      tl.kill(); // Clean up on unmount
      
      if (container) {
        container.removeEventListener('wheel', handleUserInteraction);
        container.removeEventListener('touchstart', handleUserInteraction);
        container.removeEventListener('touchmove', handleUserInteraction);
        container.removeEventListener('mousedown', handleUserInteraction);
      }
      clearTimeout(interactionTimeout);
      
      // Remove all hover event listeners
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <section className="section highlights-section" ref={sectionRef} style={{ backgroundImage: 'url(/course-highlight-compressed.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Floating blurred background orbs */}
      <div className="highlights-bg-orbs">
        <div className="hl-orb hl-orb-pink"></div>
        <div className="hl-orb hl-orb-purple"></div>
        <div className="hl-orb hl-orb-white"></div>
      </div>

      <div className="hero-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="highlights-heading anim-text delay-2">Course Highlights</h2>
          <p className="highlights-subtitle anim-text delay-3">Working smart means working hard on what truly matters.</p>
        </div>
      </div>

      {/* Horizontal scroll track wrapper - full width */}
      <div className="highlights-scroll-container anim-image delay-4" style={{ position: 'relative', zIndex: 10 }}>
        <div className="highlights-zigzag-flow">
          {highlights.map((item, idx) => (
            <div className="hl-circle-wrapper" key={idx}>
              <div className="hl-circle">
                <div className="hl-circle-icon">
                  {item.icon}
                </div>
                <span className="hl-circle-text">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
