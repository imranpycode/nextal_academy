import React, { useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, Play, BookOpen, Sliders, FileVideo, Mic, 
  Workflow, Folder, HardDrive, Video, Camera, Volume2, Palette, Sun, 
  Sparkles, Type, Share, Activity, Aperture, Wand2, Sparkle, Target, 
  PlaySquare, Layout, Instagram, Facebook, Youtube, Smartphone, Linkedin, 
  BadgePercent, Megaphone, Captions, Zap, Headphones, Music, Clock, 
  Gauge, VolumeX, Subtitles, Image, Scissors, Repeat, AlignLeft, Cpu, Star, Film,
  Brain, Database, Code, Terminal, Server, Users, Flag, Mail
} from 'lucide-react';

export default function CourseDetail({ slug, onBack, onOpenEnrollModal }) {
  // Ensure we start at the top of the page when opening a detail view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    {
      id: 'ai-digital-marketing',
      title: 'AI Integrated Digital Marketing',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Master the future of marketing with our comprehensive AI Integrated Digital Marketing course. Learn to leverage artificial intelligence across all core digital marketing channels.',
      topics: [
        { label: 'Module 1: Introduction to Digital Marketing', icon: <BookOpen size={16} /> },
        { label: 'Module 2: Content Marketing', icon: <Type size={16} /> },
        { label: 'Module 3: AI Tools for Digital Marketing', icon: <Sparkles size={16} /> },
        { label: 'Module 4: Social Media Marketing (SMO)', icon: <Instagram size={16} /> },
        { label: 'Module 5: Search Engine Optimization (SEO)', icon: <Target size={16} /> },
        { label: 'Module 6: Meta Ads (Facebook & Instagram Ads)', icon: <Facebook size={16} /> },
        { label: 'Module 7: Google Ads (PPC)', icon: <Megaphone size={16} /> },
        { label: 'Module 8: Email Marketing & Automation', icon: <Mail size={16} /> },
        { label: 'Module 9: Analytics & Reporting', icon: <Activity size={16} /> }
      ],
    },
    {
      id: 'diploma-digital-marketing',
      title: 'Diploma in Digital Marketing',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Master the complete spectrum of digital marketing from organic social media to advanced analytics and e-commerce.',
      topics: [
        { label: 'Module 1: Introduction to Digital Marketing', icon: <BookOpen size={16} /> },
        { label: 'Module 2: Content Marketing & Copywriting', icon: <Type size={16} /> },
        { label: 'Module 3: AI Tools for Digital Marketing', icon: <Sparkles size={16} /> },
        { label: 'Module 4: Social Media Marketing (SMO)', icon: <Instagram size={16} /> },
        { label: 'Module 5: Social Media Marketing (Organic)', icon: <Share size={16} /> },
        { label: 'Module 6: Search Engine Optimization (SEO)', icon: <Target size={16} /> },
        { label: 'Module 7: Meta Ads (Facebook & Instagram Ads)', icon: <Facebook size={16} /> },
        { label: 'Module 8: Google Ads (PPC)', icon: <Megaphone size={16} /> },
        { label: 'Module 9: Email Marketing & Marketing Automation', icon: <Zap size={16} /> },
        { label: 'Module 10: Website Development', icon: <Code size={16} /> },
        { label: 'Module 11: Google Analytics & Tag Manager', icon: <Activity size={16} /> },
        { label: 'Module 12: E-commerce Marketing', icon: <BadgePercent size={16} /> },
        { label: 'Module 13: Affiliate, Influencer & Mobile Marketing', icon: <Users size={16} /> },
        { label: 'Module 14: AI-Powered Market Research & Competitor Intelligence', icon: <Brain size={16} /> },
        { label: 'Module 15: Personal Branding', icon: <Star size={16} /> }
      ],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Course content coming soon...',
      topics: [],
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Course content coming soon...',
      topics: [],
    },
    {
      id: 'designer-pro',
      title: 'Designer Pro',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Course content coming soon...',
      topics: [],
    },
    {
      id: 'web-development',
      title: 'Web Development',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Course content coming soon...',
      topics: [],
    },
    {
      id: 'app-development',
      title: 'App Development',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Course content coming soon...',
      topics: [],
    },
    {
      id: 'basic-video-editing',
      title: 'Basic Video Editing',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Course content coming soon...',
      topics: [],
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Course content coming soon...',
      topics: [],
    },
    {
      id: 'adv-gen-ai',
      title: 'Advanced Certification in Gen AI',
      image: '/genai&agenai.webp',
      desc: 'Master Generative AI, Large Language Models (LLMs), RAG, AI Agents, LangChain, LangGraph, CrewAI, MCP, Fine-Tuning, and production-ready AI application development through hands-on projects and real-world engineering practices.',
      topics: [
        { label: 'Introduction to Generative AI', icon: <Sparkles size={16} /> },
        { label: 'Prompt Engineering', icon: <Type size={16} /> },
        { label: 'OpenAI API', icon: <Code size={16} /> },
        { label: 'Ollama & Local LLMs', icon: <Terminal size={16} /> },
        { label: 'LangChain', icon: <Workflow size={16} /> },
        { label: 'LangGraph', icon: <Activity size={16} /> },
        { label: 'CrewAI', icon: <Users size={16} /> },
        { label: 'RAG', icon: <Database size={16} /> },
        { label: 'Vector Databases', icon: <Database size={16} /> },
        { label: 'Embeddings', icon: <Activity size={16} /> },
        { label: 'Tool Calling', icon: <Zap size={16} /> },
        { label: 'AI Agents', icon: <Brain size={16} /> },
        { label: 'Multi-Agent Systems', icon: <Workflow size={16} /> },
        { label: 'MCP (Model Context Protocol)', icon: <Server size={16} /> },
        { label: 'Hugging Face', icon: <Sparkles size={16} /> },
        { label: 'Fine-Tuning (SFT & QLoRA)', icon: <Cpu size={16} /> },
        { label: 'OpenAI Agents SDK', icon: <Code size={16} /> },
        { label: 'FastAPI', icon: <Server size={16} /> },
        { label: 'React AI Dashboard', icon: <Layout size={16} /> },
        { label: 'Production Deployment', icon: <Target size={16} /> },
        { label: 'Final Capstone Project', icon: <Flag size={16} /> }
      ],
      weeklyModules: [
        'Week 1 — LLM Fundamentals & Environment Setup',
        'Week 2 — Multi Model APIs & Tool Calling',
        'Week 3 — Hugging Face & Open Source Models',
        'Week 4 — Model Evaluation & Code Generation',
        'Week 5 — Retrieval-Augmented Generation (RAG)',
        'Week 6 — Agentic AI Fundamentals',
        'Week 7 — OpenAI Agents SDK & CrewAI',
        'Week 8 — LangChain & LangGraph',
        'Week 9 — Fine-Tuning (SFT & QLoRA)',
        'Week 10 — MCP, Deployment & Capstone Project'
      ]
    }
  ];

  const module = modules.find(m => m.id === slug) || modules[0];

  const academyFeatures = [
    "100% Practical Training",
    "Industry-Oriented Curriculum",
    "Live Editing Projects",
    "Portfolio Development",
    "Learn from Experienced Trainers",
    "Motion Graphics Training",
    "YouTube & Social Media Editing",
    "Reels & Short Video Creation",
    "Internship Opportunities",
    "Placement Assistance"
  ];

  return (
    <div className="course-detail-page">
      <div className="container-fluid">
        
        {/* Back Button */}
        <div style={{ paddingTop: '2rem', marginBottom: '1.5rem' }}>
          <button className="btn btn-secondary back-btn" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Course Overview
          </button>
        </div>

        {/* Hero Section */}
        <div className="course-detail-hero">
          <div className="course-detail-content">
            <span className="section-tag cyan">Module Detail</span>
            <h1 className="course-detail-title">{module.title}</h1>
            <p className="course-detail-desc">{module.desc}</p>
            <button className="btn btn-primary" onClick={onOpenEnrollModal} style={{ marginTop: '1.5rem' }}>
              <Star size={16} /> Enroll in this Module
            </button>
          </div>
          <div className="course-detail-media">
            <img src={module.image} alt={module.title} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Weekly Modules Section */}
        {module.weeklyModules && (
          <div className="course-detail-section" style={{ marginTop: '4rem' }}>
            <h2 className="section-title">Weekly Modules</h2>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
              {module.weeklyModules.map((week, idx) => (
                <div key={idx} style={{ 
                  padding: '1.25rem 1.5rem', 
                  background: 'linear-gradient(135deg, rgba(246, 36, 119, 0.04), rgba(34, 0, 102, 0.04))', 
                  border: '1px solid rgba(34, 0, 102, 0.1)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #E60067, #220066)', 
                    color: '#fff', 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}>{idx + 1}</div>
                  {week}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What You Will Learn Section */}
        <div className="course-detail-section" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <h2 className="section-title">{module.id === 'module-7' ? 'Gen & Agentic AI Course' : 'What You Will Learn'}</h2>
          <div className="topics-grid">
            {module.topics.map((t, idx) => (
              <div className="topic-chip" key={idx}>
                {t.icon} {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* Academy Content Section (from PDF) */}
        <div className="academy-content-section">
          <div className="academy-content-inner">
            <div className="academy-content-text">
              <h2 className="section-title" style={{ color: 'var(--text-white)' }}>Why Choose Nextal Academy?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                We believe the best way to learn video editing is through practical experience. Our industry-focused curriculum helps you master professional editing techniques while working on real projects.
              </p>
              <div className="academy-features-grid">
                {academyFeatures.map((feature, idx) => (
                  <div className="academy-feature-item" key={idx}>
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-coral)' }} /> 
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
