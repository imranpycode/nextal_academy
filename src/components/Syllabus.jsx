import React, { useState, useEffect, useRef } from 'react';
import {
  Film,
  Scissors,
  Sparkles,
  Share2,
  Camera,
  Bot,
  CheckCircle2,
  Play,
  BookOpen,
  Sliders,
  FileVideo,
  Mic,
  Workflow,
  Folder,
  HardDrive,
  Video,
  Volume2,
  Palette,
  Sun,
  Type,
  Share,
  Activity,
  Aperture,
  Brain,
  Database,
  Code,
  Terminal,
  Server,
  Users,
  Flag,
  Wand2,
  Sparkle,
  Target,
  PlaySquare,
  Layout,
  Instagram,
  Facebook,
  Youtube,
  Smartphone,
  Linkedin,
  BadgePercent,
  Megaphone,
  Captions,
  Zap,
  Headphones,
  Music,
  Clock,
  Gauge,
  VolumeX,
  Subtitles,
  Image,
  Repeat,
  AlignLeft,
  Cpu,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Syllabus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef();
  const startTimeRef = useRef(null);
  const SLIDE_DURATION = 5000;

  const modules = [
    {
      id: 'ai-digital-marketing',
      title: 'AI Integrated Digital Marketing',
      tabLabel: '1. AI Marketing',
      image: '/Video Editing Fundamentals.webp',
      icon: <Megaphone size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'diploma-digital-marketing',
      title: 'Diploma in Digital Marketing',
      tabLabel: '2. Diploma DM',
      image: '/Video Editing Fundamentals.webp',
      icon: <BadgePercent size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      tabLabel: '3. UI/UX',
      image: '/Video Editing Fundamentals.webp',
      icon: <Palette size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      tabLabel: '4. Graphics',
      image: '/Video Editing Fundamentals.webp',
      icon: <Image size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'designer-pro',
      title: 'Designer Pro',
      tabLabel: '5. Designer Pro',
      image: '/Video Editing Fundamentals.webp',
      icon: <Wand2 size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'web-development',
      title: 'Web Development',
      tabLabel: '6. Web Dev',
      image: '/Video Editing Fundamentals.webp',
      icon: <Code size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'app-development',
      title: 'App Development',
      tabLabel: '7. App Dev',
      image: '/Video Editing Fundamentals.webp',
      icon: <Smartphone size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'basic-video-editing',
      title: 'Basic Video Editing',
      tabLabel: '8. Video Basics',
      image: '/Video Editing Fundamentals.webp',
      icon: <Film size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      tabLabel: '9. Motion VFX',
      image: '/Video Editing Fundamentals.webp',
      icon: <Scissors size={18} />,
      desc: 'Course content coming soon...',
      highlights: ['Syllabus coming soon'],
      topics: []
    },
    {
      id: 'adv-gen-ai',
      title: 'Advanced Certification in Gen AI',
      tabLabel: '10. Gen AI',
      image: '/genai&agenai.webp',
      icon: <Brain size={18} />,
      desc: 'Master Generative AI, Large Language Models (LLMs), RAG, AI Agents, LangChain, LangGraph, CrewAI, MCP, Fine-Tuning, and production-ready AI application development through hands-on projects and real-world engineering practices.',
      highlights: [
        'OpenAI API, Prompting & LangChain',
        'RAG, Vector DBs & Local LLMs',
        'Multi-Agent Systems & Fine-Tuning'
      ],
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
      ]
    }
  ];

  useEffect(() => {
    if (isHovered) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      startTimeRef.current = null;
      return;
    }

    const animate = (time) => {
      if (!startTimeRef.current) {
        startTimeRef.current = time - (progress / 100) * SLIDE_DURATION;
      }
      const elapsed = time - startTimeRef.current;
      const currentProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        handleNext();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % modules.length);
    setProgress(0);
    startTimeRef.current = null;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + modules.length) % modules.length);
    setProgress(0);
    startTimeRef.current = null;
  };

  return (
    <section id="syllabus" className="section section-alt">
      <div className="container">
        <div className="text-center mx-auto anim-text delay-2" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title animated-heading-shimmer">What You Will Learn</h2>
        </div>

        <div 
          className="premium-slider-container anim-image delay-4"
        >
          {/* Left Content Area */}
          <div className="slider-content-area">
            {modules.map((m, idx) => (
              <div 
                key={m.id} 
                className={`slider-content-slide ${idx === currentIndex ? 'active' : ''}`}
              >
                <div>
                  <div className="slide-badge">
                    {m.icon} {m.tabLabel}
                  </div>
                  <h3 className="slide-title">{m.title}</h3>
                  <p className="slide-desc">{m.desc}</p>
                  
                  <div className="slide-highlights">
                    {m.highlights.map((h, i) => (
                      <div className="slide-highlight-item" key={i}>
                        <CheckCircle2 size={18} style={{ color: 'var(--accent-coral)' }} /> {h}
                      </div>
                    ))}
                  </div>
                </div>

                <a href={`/course/${m.id}`} className="btn btn-primary slide-cta">
                  Explore Module <ArrowRight size={16} />
                </a>
              </div>
            ))}
            
            {/* Navigation Controls */}
            <div className="slider-navigation">
              <div className="slider-progress-wrapper">
                <span className="slider-counter">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
                </span>
                <div className="slider-progress-track">
                  <div 
                    className="slider-progress-fill" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <div className="slider-arrows">
                <button className="slider-arrow" onClick={handlePrev} aria-label="Previous Module">
                  <ChevronLeft size={20} />
                </button>
                <button className="slider-arrow" onClick={handleNext} aria-label="Next Module">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div 
            className="slider-media-area"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {modules.map((m, idx) => (
              <div 
                key={m.id} 
                className={`slider-media-slide ${idx === currentIndex ? 'active' : ''}`}
              >
                <img src={m.image} alt={m.title} loading={idx === 0 ? "eager" : "lazy"} decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
