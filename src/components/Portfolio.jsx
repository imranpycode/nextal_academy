import React from 'react';
import { Play } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    { title: "Promotional Videos", desc: "Commercial product launches, brand teasers, and corporate promos.", bg: "#1e293b" },
    { title: "Corporate Videos", desc: "Company profiles, client testimonials, and internal training reels.", bg: "#0f172a" },
    { title: "YouTube Videos", desc: "Talking head videos, vlogs, documentaries, and tech reviews.", bg: "#1e1b4b" },
    { title: "Instagram Reels & Shorts", desc: "Fast-paced vertical videos with animated subtitles and sound effects.", bg: "#31103f" },
    { title: "Product Advertisements", desc: "E-commerce video ads, social media sponsored ads, and story ads.", bg: "#064e3b" },
    { title: "Travel & Cinematic Videos", desc: "Cinematic travel vlogs with color grading and speed ramping.", bg: "#451a03" },
    { title: "Wedding Highlights", desc: "Emotional wedding teasers, story trailers, and event highlights.", bg: "#3b0764" },
    { title: "Event & Music Videos", desc: "Concert highlights, stage shows, and rhythm-based music videos.", bg: "#172554" },
    { title: "Social Media Campaigns", desc: "Multi-platform campaign video packages with brand consistent assets.", bg: "#0284c7" }
  ];

  return (
    <section id="portfolio" className="section section-alt">
      <div className="container">
        <div className="text-center mx-auto">
          <span className="section-tag cyan">Practical Showcase</span>
          <h2 className="section-title">Live Projects & Portfolio Development</h2>
          <p className="section-subtitle mx-auto">
            Work on real-world editing projects during your course to build a versatile portfolio that opens doors to exciting career opportunities.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div className="portfolio-card" key={i}>
              <div className="portfolio-thumb">
                <div className="portfolio-thumb-bg" style={{ backgroundColor: p.bg }}></div>
                <div className="portfolio-play-btn"><Play size={20} /></div>
              </div>
              <div className="portfolio-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
