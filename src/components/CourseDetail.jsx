import React, { useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, Play, BookOpen, Sliders, FileVideo, Mic, 
  Workflow, Folder, HardDrive, Video, Camera, Volume2, Palette, Sun, 
  Sparkles, Type, Share, Activity, Aperture, Wand2, Sparkle, Target, 
  PlaySquare, Layout, Instagram, Facebook, Youtube, Smartphone, Linkedin, 
  BadgePercent, Megaphone, Captions, Zap, Headphones, Music, Clock, 
  Gauge, VolumeX, Subtitles, Image, Scissors, Repeat, AlignLeft, Cpu, Star, Film,
  Brain, Database, Code, Terminal, Server, Users, Flag, Mail, MapPin, Calendar, Trophy, ArrowUpRight
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
      salaryInsights: [
        { experience: 'Fresher (0-2 Yrs)', salary: '₹2.5L - ₹4.0L' },
        { experience: 'Mid-Level (2-5 Yrs)', salary: '₹7.0L - ₹12.0L' },
        { experience: 'Senior (5+ Yrs)', salary: '₹15.0L - ₹25.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'Fundamentals', desc: 'Marketing basics & strategy' },
        { step: 2, title: 'Social & SEO', desc: 'Organic growth & rankings' },
        { step: 3, title: 'Paid Ads', desc: 'Google & Meta ad budgets' },
        { step: 4, title: 'AI Integration', desc: 'Automate & optimize with AI' },
        { step: 5, title: 'Placement', desc: 'Resume & mock interviews' }
      ],
      courseIncludes: [
        'Live Classes',
        'Recordings',
        'Real-world Projects',
        'AI Tools',
        'Certificate',
        'Placement Assistance'
      ]
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
      salaryInsights: [
        { experience: 'Fresher (0-2 Yrs)', salary: '₹2.5L - ₹4.5L' },
        { experience: 'Mid-Level (2-5 Yrs)', salary: '₹7.0L - ₹13.0L' },
        { experience: 'Manager (5+ Yrs)', salary: '₹16.0L - ₹40.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'Basics & Content', desc: 'Copywriting & organic strategy' },
        { step: 2, title: 'SEO & Web', desc: 'Website dev & optimization' },
        { step: 3, title: 'Paid Campaigns', desc: 'Master Google & Meta Ads' },
        { step: 4, title: 'Advanced Analytics', desc: 'Tag Manager & Reporting' },
        { step: 5, title: 'Placement', desc: 'Interviews & agency hiring' }
      ],
      courseIncludes: [
        'Live Classes',
        'Ad Budgets',
        'Capstone Project',
        '50+ Premium Tools',
        'Diploma Certificate',
        'Placement Assistance'
      ]
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Master user interface and experience design. Build stunning prototypes, conduct user research, and create design systems.',
      topics: [],
      salaryInsights: [
        { experience: 'Fresher (0-1 Yr)', salary: '₹3.0L - ₹5.0L' },
        { experience: 'Junior (1-3 Yrs)', salary: '₹5.0L - ₹9.0L' },
        { experience: 'Mid-Level (3-5 Yrs)', salary: '₹9.0L - ₹16.0L' },
        { experience: 'Senior (5+ Yrs)', salary: '₹16.0L - ₹28.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'Design Principles', desc: 'Color, typography, layout' },
        { step: 2, title: 'UX Research', desc: 'User personas & wireframing' },
        { step: 3, title: 'Figma Mastery', desc: 'Prototyping & animations' },
        { step: 4, title: 'Design Systems', desc: 'Building scalable components' },
        { step: 5, title: 'Portfolio', desc: 'Behance/Dribbble showcase' }
      ],
      courseIncludes: [
        'Live Classes',
        'Figma Projects',
        'Portfolio Development',
        'Mock Interviews',
        'Certificate',
        'Placement Assistance'
      ]
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Learn industry-standard graphic design tools and techniques to create stunning visual content for brands.',
      topics: [],
      salaryInsights: [
        { experience: 'Fresher', salary: '₹2.0L - ₹3.5L' },
        { experience: '1-3 Years', salary: '₹3.5L - ₹6.0L' },
        { experience: '3-5 Years', salary: '₹6.0L - ₹10.0L' },
        { experience: 'Senior', salary: '₹10.0L - ₹18.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'Fundamentals', desc: 'Design theory & elements' },
        { step: 2, title: 'Photoshop', desc: 'Photo editing & manipulation' },
        { step: 3, title: 'Illustrator', desc: 'Vector graphics & logos' },
        { step: 4, title: 'Brand Identity', desc: 'Creating complete brand kits' },
        { step: 5, title: 'Portfolio', desc: 'Showcasing your best work' }
      ],
      courseIncludes: [
        'Live Classes',
        'Adobe Suite',
        'Practice Exercises',
        'Portfolio Development',
        'Certificate',
        'Placement Assistance'
      ]
    },
    {
      id: 'designer-pro',
      title: 'Designer Pro',
      image: '/Video Editing Fundamentals.webp',
      desc: 'The ultimate design masterclass combining graphic design, UI/UX, and motion graphics for complete creative professionals.',
      topics: [],
      salaryInsights: [
        { experience: 'Fresher', salary: '₹3.5L - ₹6.0L' },
        { experience: '1-3 Years', salary: '₹6.0L - ₹12.0L' },
        { experience: 'Senior', salary: '₹15.0L - ₹25.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'Graphic Design', desc: 'Master Photoshop & Illustrator' },
        { step: 2, title: 'UI/UX Design', desc: 'Web & App interfaces in Figma' },
        { step: 3, title: 'Motion & Video', desc: 'Premiere Pro & After Effects' },
        { step: 4, title: 'Pro Portfolio', desc: 'Multi-disciplinary showcase' },
        { step: 5, title: 'Placement', desc: 'Top agency interviews' }
      ],
      courseIncludes: [
        'Live Classes',
        'All Design Tools',
        'Capstone Project',
        'Portfolio Development',
        'Certificate',
        'Placement Assistance'
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Become a full-stack web developer. Master front-end and back-end technologies to build scalable, responsive web applications.',
      topics: [],
      salaryInsights: [
        { experience: 'Fresher', salary: '₹3.5L - ₹6.0L' },
        { experience: '1-3 Years', salary: '₹6.0L - ₹12.0L' },
        { experience: '3-5 Years', salary: '₹12.0L - ₹20.0L' },
        { experience: 'Senior', salary: '₹20.0L - ₹35.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'Front-end Basics', desc: 'HTML, CSS, JavaScript' },
        { step: 2, title: 'React.js', desc: 'Building modern UIs' },
        { step: 3, title: 'Back-end', desc: 'Node.js & Express' },
        { step: 4, title: 'Databases', desc: 'MongoDB & SQL' },
        { step: 5, title: 'Deployment', desc: 'AWS & Vercel hosting' }
      ],
      courseIncludes: [
        'Live Classes',
        'Source Code',
        'Real-world Projects',
        'Github Portfolio',
        'Certificate',
        'Placement Assistance'
      ]
    },
    {
      id: 'app-development',
      title: 'App Development',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Build cross-platform mobile applications for iOS and Android using modern frameworks like React Native or Flutter.',
      topics: [],
      salaryInsights: [
        { experience: 'Fresher', salary: '₹4.0L - ₹7.0L' },
        { experience: '1-3 Years', salary: '₹7.0L - ₹14.0L' },
        { experience: '3-5 Years', salary: '₹14.0L - ₹22.0L' },
        { experience: 'Senior', salary: '₹22.0L - ₹40.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'UI Fundamentals', desc: 'Mobile UI concepts' },
        { step: 2, title: 'Core Framework', desc: 'React Native / Flutter' },
        { step: 3, title: 'State & APIs', desc: 'Data management' },
        { step: 4, title: 'Native Modules', desc: 'Camera, Maps, Sensors' },
        { step: 5, title: 'App Store', desc: 'Publishing to iOS & Android' }
      ],
      courseIncludes: [
        'Live Classes',
        'Source Code',
        'Capstone Project',
        'App Publishing',
        'Certificate',
        'Placement Assistance'
      ]
    },
    {
      id: 'basic-video-editing',
      title: 'Basic Video Editing',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Learn the fundamentals of video editing to create engaging content for YouTube, Instagram Reels, and corporate videos.',
      topics: [],
      salaryInsights: [
        { experience: 'Fresher', salary: '₹2.5L - ₹4.0L' },
        { experience: '1-3 Years', salary: '₹4.0L - ₹7.0L' },
        { experience: 'Senior', salary: '₹8.0L - ₹15.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'Fundamentals', desc: 'Storytelling & timeline' },
        { step: 2, title: 'Premiere Pro', desc: 'Cuts, transitions, audio' },
        { step: 3, title: 'Color Grading', desc: 'Cinematic looks' },
        { step: 4, title: 'Social Media', desc: 'Short-form content' },
        { step: 5, title: 'Portfolio', desc: 'Showreel creation' }
      ],
      courseIncludes: [
        'Live Classes',
        'Practice Footage',
        'Real-world Projects',
        'Showreel Development',
        'Certificate',
        'Placement Assistance'
      ]
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Master After Effects and bring static designs to life with advanced motion graphics, VFX, and 2D animation.',
      topics: [],
      salaryInsights: [
        { experience: 'Fresher', salary: '₹3.0L - ₹5.0L' },
        { experience: '1-3 Years', salary: '₹5.0L - ₹9.0L' },
        { experience: '3-5 Years', salary: '₹9.0L - ₹16.0L' },
        { experience: 'Senior', salary: '₹16.0L - ₹25.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'After Effects Basics', desc: 'Keyframes & layers' },
        { step: 2, title: '2D Animation', desc: 'Shape layers & expressions' },
        { step: 3, title: 'Typography', desc: 'Kinetic typography' },
        { step: 4, title: 'VFX', desc: 'Tracking & compositing' },
        { step: 5, title: 'Showreel', desc: 'Professional portfolio' }
      ],
      courseIncludes: [
        'Live Classes',
        'Project Files',
        'Real-world Projects',
        'Showreel Development',
        'Certificate',
        'Placement Assistance'
      ]
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
        'Week 1 - LLM Fundamentals & Environment Setup',
        'Week 2 - Multi Model APIs & Tool Calling',
        'Week 3 - Hugging Face & Open Source Models',
        'Week 4 - Model Evaluation & Code Generation',
        'Week 5 - Retrieval-Augmented Generation (RAG)',
        'Week 6 - Agentic AI Fundamentals',
        'Week 7 - OpenAI Agents SDK & CrewAI',
        'Week 8 - LangChain & LangGraph',
        'Week 9 - Fine-Tuning (SFT & QLoRA)',
        'Week 10 - MCP, Deployment & Capstone Project'
      ],
      salaryInsights: [
        { experience: 'Fresher (0-2 Yrs)', salary: '₹6.0L - ₹10.0L' },
        { experience: 'Mid-Level (2-5 Yrs)', salary: '₹10.0L - ₹18.0L' },
        { experience: 'Senior (5+ Yrs)', salary: '₹18.0L - ₹30.0L+' },
        { experience: 'Lead AI Engineer', salary: '₹30.0L - ₹50.0L+' }
      ],
      learningProcess: [
        { step: 1, title: 'LLM Fundamentals', desc: 'APIs, prompt engineering & local models' },
        { step: 2, title: 'RAG Systems', desc: 'Vector DBs, embeddings & retrieval' },
        { step: 3, title: 'AI Agents', desc: 'LangChain, CrewAI & tool calling' },
        { step: 4, title: 'Fine-Tuning', desc: 'SFT, QLoRA & Hugging Face' },
        { step: 5, title: 'Deployment', desc: 'FastAPI, MCP & Production apps' }
      ],
      courseIncludes: [
        'Live Classes',
        'Real API Credits',
        'Source Code',
        'Capstone Project',
        'Certificate',
        'Placement Assistance'
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

        
        {/* Course Includes Section */}
        {module.courseIncludes && (
          <div className="course-includes-section">
            <h2 className="section-title">This Course Includes</h2>
            <div className="course-includes-grid">
              {module.courseIncludes.map((item, idx) => (
                <div key={idx} className="course-include-item">
                  <CheckCircle2 size={16} className="include-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

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

        
        {/* Learning Process Roadmap */}
        {module.learningProcess && (
          <div className="learning-process-section" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <h2 className="section-title">Your Learning Roadmap</h2>
            <div className="learning-timeline">
              {module.learningProcess.map((step, idx) => (
                <div key={idx} className="timeline-step">
                  <div className="timeline-number">{step.step}</div>
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Salary Insights Table */}
        {module.salaryInsights && (
          <div className="salary-insights-section" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <h2 className="section-title">Salary Insights (India)</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Estimated market compensation based on current industry data.</p>
            <div className="salary-table-wrapper">
              <table className="salary-table">
                <thead>
                  <tr>
                    <th>Experience Level</th>
                    <th>Estimated Salary (LPA)</th>
                  </tr>
                </thead>
                <tbody>
                  {module.salaryInsights.map((insight, idx) => (
                    <tr key={idx}>
                      <td>{insight.experience}</td>
                      <td className="salary-value"><strong>{insight.salary}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* What You'll Walk Away With Section */}
        <div className="walk-away-section">
          <div className="walk-away-header">
            <span className="walk-away-line"></span>
            <h3 className="walk-away-title">WHAT YOU'LL WALK AWAY WITH</h3>
          </div>
          
          <div className="walk-away-grid">
            <div className="walk-away-card">
              <div className="walk-icon-box">
                <Zap size={20} className="walk-icon" />
              </div>
              <h4>Job-Ready Skills</h4>
              <p>Learn the core tools that every digital marketing employer looks for — from day one</p>
            </div>
            
            <div className="walk-away-card">
              <div className="walk-icon-box">
                <Trophy size={20} className="walk-icon" />
              </div>
              <h4>Live Campaign Practice</h4>
              <p>Run actual Google and Meta ad campaigns with real budgets during the course</p>
            </div>
            
            <div className="walk-away-card">
              <div className="walk-icon-box">
                <Sparkles size={20} className="walk-icon" />
              </div>
              <h4>50+ Premium Tools</h4>
              <p>Hands-on access to industry-leading tools used by top agencies and brands</p>
            </div>
            
            <div className="walk-away-card">
              <div className="walk-icon-box">
                <Star size={20} className="walk-icon" />
              </div>
              <h4>Placement Support</h4>
              <p>250+ hiring partners across agencies, brands and startups — ready to hire you</p>
            </div>
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
