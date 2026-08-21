import React from 'react';

export default function Software() {
  const tools = [
    { code: "Pr", cls: "pr", name: "Adobe Premiere Pro", desc: "Non-linear timeline editing & color grading" },
    { code: "Ae", cls: "ae", name: "Adobe After Effects", desc: "Motion graphics, VFX & text animations" },
    { code: "Au", cls: "au", name: "Adobe Audition", desc: "Audio restoration, noise reduction & mixing" },
    { code: "Cc", cls: "cc", name: "CapCut Desktop", desc: "Trending short-form video & viral templates" },
    { code: "Cv", cls: "cv", name: "Canva Video Editor", desc: "Quick social graphic promos & reels layout" },
    { code: "AI", cls: "ai", name: "AI Video Suite", desc: "Auto-subtitles, AI voice & smart editing tools" }
  ];

  return (
    <section id="software" className="section">
      <div className="container">
        <div className="text-center mx-auto">
          <span className="section-tag anim-text delay-1">Industry Tools</span>
          <h2 className="section-title anim-text delay-2">Software You'll Master</h2>
          <p className="section-subtitle mx-auto anim-text delay-3">
            Gain practical, hands-on experience with the exact software stack used by professional production studios worldwide.
          </p>
        </div>

        <div className="software-grid">
          {tools.map((t, i) => (
            <div className={`software-card anim-card delay-${(i % 3) + 1}`} key={i}>
              <div className={`software-badge-icon ${t.cls}`}>{t.code}</div>
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
