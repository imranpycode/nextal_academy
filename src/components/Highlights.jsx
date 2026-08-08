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
    { text: "Professional Portfolio Development", icon: <FolderOpen size={28} /> },
    { text: "Motion Graphics Training", icon: <Clapperboard size={28} /> },
    { text: "AI Video Editing Tools", icon: <Bot size={28} /> },
    { text: "Resume Building & Review", icon: <FileText size={28} /> },
    { text: "Interview Preparation", icon: <MessageSquare size={28} /> },
    { text: "Internship Opportunities", icon: <Building2 size={28} /> },
    { text: "Placement Assistance", icon: <Award size={28} /> },
    { text: "Industry Recognized Certificate", icon: <Medal size={28} /> }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const circles = section.querySelectorAll('.hl-circle');

    // Build one single GSAP timeline with infinite repeat
    const tl = gsap.timeline({
      repeat: -1,       // Loop forever
      repeatDelay: 1.5  // 1.5s pause between each full wave pass
    });

    circles.forEach((circle, index) => {
      const position = index * (0.7 - 0.12); // 0.12s overlap between each circle

      tl.fromTo(
        circle,
        { x: 0, y: 0, rotation: 0 },
        {
          keyframes: [
            { x: 18, y: -18, rotation: 8,  duration: 0.35, ease: 'power2.in' },
            { x: 0,  y: 0,   rotation: 0,  duration: 0.35, ease: 'power2.out' }
          ],
          duration: 0.7
        },
        position
      );
    });

    // Pause timeline initially, play only when section is in view
    tl.pause();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();   // Start/resume when visible
          } else {
            tl.pause();  // Pause when scrolled out of view
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      tl.kill(); // Clean up on unmount
    };
  }, []);

  return (
    <section className="section highlights-section" ref={sectionRef}>
      {/* Floating blurred background orbs */}
      <div className="highlights-bg-orbs">
        <div className="hl-orb hl-orb-pink"></div>
        <div className="hl-orb hl-orb-purple"></div>
        <div className="hl-orb hl-orb-white"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="highlights-heading anim-text delay-2">Course Highlights</h2>
          <p className="highlights-subtitle anim-text delay-3">Working smart means working hard on what truly matters.</p>
        </div>
      </div>

      {/* Horizontal scroll track wrapper */}
      <div className="highlights-scroll-container anim-image delay-4">
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
