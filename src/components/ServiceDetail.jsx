import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Calendar, ShieldCheck, Sparkles, Send } from 'lucide-react';

const serviceDetails = {
  "video-editing": {
    title: "Video Editing & Production",
    subtitle: "Master Cinematic Storytelling & Industry-Standard Tools",
    desc: "Dive deep into the art of professional video editing. Learn pacing, audio synchronization, B-roll selection, color grading, and speed ramping using Adobe Premiere Pro and CapCut.",
    duration: "2 Months (Practical Course)",
    outcomes: [
      "Master Adobe Premiere Pro and advanced editing techniques",
      "Understand multi-cam editing and audio enhancement",
      "Learn commercial color grading and cinematic pacing",
      "Build a complete video portfolio with live client projects"
    ],
    curriculum: [
      "Module 1: Editing Fundamentals & Project Setup",
      "Module 2: Timeline Operations, Cuts, & Audio Syncing",
      "Module 3: Visual Effects, Titles, & Dynamic Transitions",
      "Module 4: Color Correction, Grading, & Cinematic Looks",
      "Module 5: Exporting & Publishing for YouTube and TV"
    ]
  },
  "motion-graphics": {
    title: "Motion Graphics & VFX",
    subtitle: "Bring Static Designs to Life with Adobe After Effects",
    desc: "Learn to create eye-catching kinetic typography, logo stings, promotional animations, and keyframe-based visual effects that captivate audiences.",
    duration: "2 Months (Motion Focus)",
    outcomes: [
      "Master keyframes, ease curves, and speed graphs in After Effects",
      "Design professional logo animations and kinetic typography",
      "Understand nesting, pre-comps, and layer styles",
      "Integrate motion graphics seamlessly into promotional videos"
    ],
    curriculum: [
      "Module 1: After Effects Interface & Core Animation",
      "Module 2: Shape Layers, Path Animations, & Text Effects",
      "Module 3: Masking, Mattes, & Chroma Key (Green Screen)",
      "Module 4: 3D Layers, Cameras, Lighting, & Expressions",
      "Module 5: Rendering Formats & Portfolio Asset Design"
    ]
  },
  "social-reels": {
    title: "Reels & Short-Form Content",
    subtitle: "Master the Algorithms on Instagram, Shorts & TikTok",
    desc: "Short-form video is the fastest-growing digital medium. Learn vertical framing, attention-grabbing hooks, fast cuts, kinetic subtitles, and audio mixing that drive viral reach.",
    duration: "4 Weeks (Social Specialization)",
    outcomes: [
      "Create high-retention Instagram Reels and YouTube Shorts",
      "Master CapCut Mobile & Desktop tools for fast turnaround",
      "Design attention hooks and high-impact auto-captions",
      "Learn social media editing formulas for maximum engagement"
    ],
    curriculum: [
      "Module 1: Short-form Pacing & Hook Design Techniques",
      "Module 2: Advanced Editing in CapCut (Transitions & Speed Ramps)",
      "Module 3: Subtitles, Captions, sound effects, and music layering",
      "Module 4: Trend Analysis & Optimizing Videos for Algorithms"
    ]
  },
  "generative-ai": {
    title: "Generative AI Content Creation",
    subtitle: "Create Copy, Graphics, and Videos with the Power of AI",
    desc: "Unleash AI for content creation. Learn to design prompt recipes, generate photorealistic images, generate synthetic voiceovers, and speed up creative workflows by 10x.",
    duration: "4 Weeks (Specialized Workshop)",
    outcomes: [
      "Write high-efficiency prompt scripts for text and design",
      "Generate stunning graphics using Midjourney and DALL-E",
      "Produce synthetic voiceovers and automated transcriptions",
      "Build a complete content calendar entirely powered by AI"
    ],
    curriculum: [
      "Module 1: Prompt Engineering Principles & ChatGPT formulas",
      "Module 2: AI Art Generation (Midjourney parameters & styles)",
      "Module 3: Audio AI & Synthesizer Voices",
      "Module 4: Workflow Integration & Ethical AI practices"
    ]
  },
  "agentic-ai": {
    title: "Agentic AI & Automation",
    subtitle: "Build Multi-Agent Workflows & Autonomous Teams",
    desc: "The next wave of AI is Agentic. Learn to build collaborative networks of AI agents that execute complex, multi-step business processes autonomously.",
    duration: "6 Weeks (Advanced Workshop)",
    outcomes: [
      "Design multi-agent systems using CrewAI or AutoGen",
      "Build self-correcting autonomous workflows",
      "Integrate AI agents with external APIs and databases",
      "Develop custom tools for autonomous execution tasks"
    ],
    curriculum: [
      "Module 1: Intro to Autonomous Agents & LLM Tool Use",
      "Module 2: Designing Multi-Agent Systems & Role Definitions",
      "Module 3: CrewAI Orchestration, Memory, & Tool Integration",
      "Module 4: Deployment, Logging, & Continuous Loop Optimization"
    ]
  },
  "live-portfolio": {
    title: "Live Client Projects",
    subtitle: "Gain Real Studio Experience Before You Graduate",
    desc: "Work on genuine creative briefs from real clients. Edit commercial promos, design databases, and test workflows under direct professional supervision.",
    duration: "Ongoing (Integrated in Curriculum)",
    outcomes: [
      "Work directly with commercial client briefs and assets",
      "Receive feedback from agency heads and directors",
      "Understand project delivery timelines and client management",
      "Graduate with a professional portfolio showing real-world value"
    ],
    curriculum: [
      "Phase 1: Project Onboarding & Client Brief Analysis",
      "Phase 2: Pre-production, Draft Setup & Prototyping",
      "Phase 3: Execution, Feedback Iterations & Refinements",
      "Phase 4: Client Presentation, Exporting & Asset Handoff"
    ]
  },
  "placement-support": {
    title: "Career & Placement Support",
    subtitle: "Launch Your Professional Career with Confidence",
    desc: "We bridge the gap between classroom training and professional employment. Get placement assistance, resume formatting, mock interviews, and portfolio reviews.",
    duration: "Lifelong Alumni Access",
    outcomes: [
      "Receive direct introductions to leading agencies & firms",
      "Perfect your resume and digital portfolio presentation",
      "Master mock technical and behavioral interviews",
      "Get career advice and mentorship from industry specialists"
    ],
    curriculum: [
      "Milestone 1: Portfolio Structuring & Visual Audits",
      "Milestone 2: Resume Drafting & LinkedIn Optimization",
      "Milestone 3: Mock Interviews & Group Presentations",
      "Milestone 4: Placement Calls & Career Coaching Sessions"
    ]
  }
};

export default function ServiceDetail({ slug, onBack, onOpenEnrollModal }) {
  const service = serviceDetails[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="container" style={{ paddingBlock: 'var(--section-spacing-md)', paddingInline: '1.5rem', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <p style={{ margin: '1rem 0 2rem 0' }}>The service details page you are trying to visit does not exist.</p>
        <button onClick={onBack} className="btn btn-primary">Go Back Home</button>
      </div>
    );
  }

  return (
    <section key={slug} className="service-detail-section" style={{ paddingBlock: 'var(--section-spacing-md)', background: '#ffffff', opacity: 0, animation: 'pageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
      <div className="container">
        {/* Back Button */}
        <button onClick={onBack} className="service-detail-back-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--accent-coral)', fontWeight: '600', cursor: 'pointer', marginBottom: '2.5rem', padding: '0', fontSize: '1rem' }}>
          <ArrowLeft size={18} /> Back to Home
        </button>

        <div className="service-detail-grid" style={{ display: 'grid', gap: '2rem', alignItems: 'stretch' }}>
          {/* Main Info */}
          <div className="service-detail-main" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="service-detail-title" style={{ fontSize: '3rem', color: 'var(--primary-dark)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1rem' }}>
              {service.title}
            </h1>
            <p className="service-detail-subtitle" style={{ fontSize: '1.25rem', color: 'var(--accent-coral)', fontWeight: '600', marginBottom: '1.5rem' }}>
              {service.subtitle}
            </p>
            <p className="service-detail-desc" style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.75', marginBottom: '3rem' }}>
              {service.desc}
            </p>

            {/* Benefits Panel */}
            <div className="service-curriculum-panel" style={{ flex: 1, background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)', marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1.5rem', fontWeight: '700' }}>Why Choose Nextal Academy?</h3>
              <div className="curriculum-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "100% Practical & Hands-on Training",
                  "Industry-Oriented Curriculum",
                  "Work on Live Commercial Projects",
                  "Build a Professional Portfolio",
                  "Internship & Placement Assistance",
                  "Learn from Experienced Industry Trainers"
                ].map((benefit, idx) => (
                  <div key={idx} className="curriculum-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1rem', borderBottom: idx < 5 ? '1px solid var(--border-light)' : 'none' }}>
                    <div style={{ width: '8px', height: '8px', background: 'var(--accent-coral)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="service-detail-sidebar" style={{ display: 'flex', flexDirection: 'column', position: 'sticky', top: '100px', background: 'linear-gradient(135deg, #5E086B 0%, #220066 100%)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', color: 'var(--text-white)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-white)', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} className="text-accent" style={{ color: 'var(--accent-coral)' }} /> Course Details
            </h3>

            <div className="sidebar-meta-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="sidebar-meta-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Calendar size={20} style={{ color: 'var(--accent-coral)', flexShrink: 0 }} />
                <div>
                  <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Duration</h5>
                  <p style={{ fontSize: '1rem', fontWeight: '600', margin: 0, color: 'var(--text-white)' }}>{service.duration}</p>
                </div>
              </div>

              <div className="sidebar-meta-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <ShieldCheck size={20} style={{ color: 'var(--accent-coral)', flexShrink: 0 }} />
                <div>
                  <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Certification</h5>
                  <p style={{ fontSize: '1rem', fontWeight: '600', margin: 0, color: 'var(--text-white)' }}>Nextal Academy Certified</p>
                </div>
              </div>
            </div>

            <div className="sidebar-outcomes">
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', fontWeight: '700', marginBottom: '1rem' }}>Key Learning Outcomes</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {service.outcomes.map((outcome, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-coral)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.4' }}>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 'auto', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.06)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', fontWeight: '700', marginBottom: '0.5rem' }}>Ready to Start?</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5', margin: 0 }}>
                Join our intensive program to build yourself into what you want to become, gain hands-on experience, and secure your creative career with industry-leading mentors.
              </p>
            </div>

            <button onClick={onOpenEnrollModal} className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', background: 'var(--accent-coral)', color: 'var(--text-white)', border: 'none', borderRadius: 'var(--radius-sm)', padding: '0.9rem 1.5rem', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 8px 16px rgba(246,36,119,0.3)' }}>
              <Send size={16} /> Enroll in Course
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
