import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowLeft, CheckCircle2, Play, BookOpen, Sliders, FileVideo, Mic, 
  Workflow, Folder, HardDrive, Video, Camera, Volume2, Palette, Sun, 
  Sparkles, Type, Share, Activity, Aperture, Wand2, Sparkle, Target, 
  PlaySquare, Layout, Instagram, Facebook, Youtube, Smartphone, Linkedin, 
  BadgePercent, Megaphone, Captions, Zap, Headphones, Music, Clock, 
  Gauge, VolumeX, Subtitles, Image, Scissors, Repeat, AlignLeft, Cpu, Star, Film,
  Brain, Database, Code, Terminal, Server, Users, Flag, Mail, MapPin, Calendar, Trophy, ArrowUpRight
} from 'lucide-react';
import '../course-premium.css';

// Intersection Observer Hook for reveal animations
function useScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-blur');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}

export default function CourseDetail({ slug, onBack, onOpenEnrollModal }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef(null);
  
  useScrollObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Scroll Progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);

    // Custom Cursor
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .premium-pill, .module-premium-card, .timeline-card, .premium-feature-card, .dashboard-row')) {
        cursorRef.current?.classList.add('hovering');
      } else {
        cursorRef.current?.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
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
        { experience: 'Fresher (0-2 Yrs)', salary: '\u20B92.5L - \u20B94.0L' },
        { experience: 'Mid-Level (2-5 Yrs)', salary: '\u20B97.0L - \u20B912.0L' },
        { experience: 'Senior (5+ Yrs)', salary: '\u20B915.0L - \u20B925.0L+' }
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
        { experience: 'Fresher (0-2 Yrs)', salary: '\u20B92.5L - \u20B94.5L' },
        { experience: 'Mid-Level (2-5 Yrs)', salary: '\u20B97.0L - \u20B913.0L' },
        { experience: 'Manager (5+ Yrs)', salary: '\u20B916.0L - \u20B940.0L+' }
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
      title: 'UI/UX Design Mastery',
      image: '/Video Editing Fundamentals.webp',
      desc: 'A comprehensive Six-Month Mastery Course covering everything from Graphic Design fundamentals to advanced UI/UX, Prototyping, and AI tools.',
      topics: [
        { label: 'Module 1: Introduction to Graphic Design', icon: <BookOpen size={16} /> },
        { label: 'Module 2: Adobe Photoshop', icon: <Image size={16} /> },
        { label: 'Module 3: Adobe Illustrator', icon: <Palette size={16} /> },
        { label: 'Module 4: Adobe InDesign', icon: <Layout size={16} /> },
        { label: 'Module 5: Branding & Identity Design', icon: <Star size={16} /> },
        { label: 'Module 6: Social Media & Digital Creatives', icon: <Share size={16} /> },
        { label: 'Module 7: Print Media Design', icon: <Folder size={16} /> },
        { label: 'Module 8: UI Graphics & Web Design Basics', icon: <Code size={16} /> },
        { label: 'Module 9: Motion Graphics Basics', icon: <Film size={16} /> },
        { label: 'Module 10: AI Tools for Graphic Design', icon: <Sparkles size={16} /> },
        { label: 'Module 11: Introduction to UI/UX Design', icon: <Layout size={16} /> },
        { label: 'Module 12: User Experience (UX) Fundamentals', icon: <Brain size={16} /> },
        { label: 'Module 13: Wireframing & User Flows', icon: <Workflow size={16} /> },
        { label: 'Module 14: UI Design with Figma', icon: <Palette size={16} /> },
        { label: 'Module 15: Responsive Web Design', icon: <Smartphone size={16} /> },
        { label: 'Module 16: Mobile App UI Design', icon: <Smartphone size={16} /> },
        { label: 'Module 17: Interactive Prototyping', icon: <PlaySquare size={16} /> },
        { label: 'Module 18: UX Testing & Accessibility', icon: <Target size={16} /> },
        { label: 'Module 19: AI Tools for UI/UX Design', icon: <Wand2 size={16} /> },
        { label: 'Module 20: Design Systems & Collaboration', icon: <Users size={16} /> },
        { label: 'Module 21: UI Graphics & Web Design Basics', icon: <Code size={16} /> },
        { label: 'Module 22: Packaging & Product Design', icon: <Folder size={16} /> }
      ],
      salaryInsights: [
        { experience: 'Fresher (0-1 Yr)', salary: '\u20B93.0L - \u20B95.0L' },
        { experience: 'Junior (1-3 Yrs)', salary: '\u20B95.0L - \u20B99.0L' },
        { experience: 'Mid-Level (3-5 Yrs)', salary: '\u20B99.0L - \u20B916.0L' },
        { experience: 'Senior (5+ Yrs)', salary: '\u20B916.0L - \u20B928.0L+' }
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
      topics: [
        { label: 'Module 1: Introduction to Graphic Design', icon: <BookOpen size={16} /> },
        { label: 'Module 2: Adobe Photoshop', icon: <Image size={16} /> },
        { label: 'Module 3: Adobe Illustrator', icon: <Palette size={16} /> },
        { label: 'Module 4: Adobe InDesign', icon: <Layout size={16} /> },
        { label: 'Module 5: Branding & Identity Design', icon: <Star size={16} /> },
        { label: 'Module 6: Social Media & Digital Creatives', icon: <Share size={16} /> },
        { label: 'Module 7: Print Media Design', icon: <Folder size={16} /> },
        { label: 'Module 8: UI Graphics & Web Design Basics', icon: <Smartphone size={16} /> },
        { label: 'Module 9: Motion Graphics Basics', icon: <Film size={16} /> },
        { label: 'Module 10: AI Tools for Graphic Design', icon: <Sparkles size={16} /> }
      ],
      salaryInsights: [
        { experience: 'Fresher', salary: '\u20B92.0L - \u20B93.5L' },
        { experience: '1-3 Years', salary: '\u20B93.5L - \u20B96.0L' },
        { experience: '3-5 Years', salary: '\u20B96.0L - \u20B910.0L' },
        { experience: 'Senior', salary: '\u20B910.0L - \u20B918.0L+' }
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
        { experience: 'Fresher', salary: '\u20B93.5L - \u20B96.0L' },
        { experience: '1-3 Years', salary: '\u20B96.0L - \u20B912.0L' },
        { experience: 'Senior', salary: '\u20B915.0L - \u20B925.0L+' }
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
        { experience: 'Fresher', salary: '\u20B93.5L - \u20B96.0L' },
        { experience: '1-3 Years', salary: '\u20B96.0L - \u20B912.0L' },
        { experience: '3-5 Years', salary: '\u20B912.0L - \u20B920.0L' },
        { experience: 'Senior', salary: '\u20B920.0L - \u20B935.0L+' }
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
      title: 'Full Stack Mobile App Development',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Master full stack cross-platform mobile app development with Flutter, Firebase, and AI integration for iOS and Android.',
      topics: [
        { label: 'Module 1: Programming Fundamentals', icon: <Terminal size={16} /> },
        { label: 'Module 2: Flutter Fundamentals', icon: <Smartphone size={16} /> },
        { label: 'Module 3: Advanced Flutter Development', icon: <Code size={16} /> },
        { label: 'Module 4: UI/UX for Mobile Apps', icon: <Layout size={16} /> },
        { label: 'Module 5: Firebase Integration', icon: <Database size={16} /> },
        { label: 'Module 6: API Integration & Backend Basics', icon: <Server size={16} /> },
        { label: 'Module 7: State Management & App Architecture', icon: <Workflow size={16} /> },
        { label: 'Module 8: Advanced Mobile Features', icon: <Zap size={16} /> },
        { label: 'Module 9: AI-Powered App Development', icon: <Brain size={16} /> },
        { label: 'Module 10: App Testing & Deployment', icon: <Target size={16} /> }
      ],
      salaryInsights: [
        { experience: 'Fresher', salary: '\u20B94.0L - \u20B97.0L' },
        { experience: '1-3 Years', salary: '\u20B97.0L - \u20B914.0L' },
        { experience: '3-5 Years', salary: '\u20B914.0L - \u20B922.0L' },
        { experience: 'Senior', salary: '\u20B922.0L - \u20B940.0L+' }
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
      title: 'Video Editing Mastery',
      image: '/Video Editing Fundamentals.webp',
      desc: 'Learn the fundamentals of video editing to create engaging content for YouTube, Instagram Reels, and corporate videos with a complete 3-month curriculum.',
      topics: [
        { label: 'Module 1: Video Editing Fundamentals', icon: <Film size={16} /> },
        { label: 'Module 2: Adobe Premiere Pro Essentials', icon: <Scissors size={16} /> },
        { label: 'Module 3: Professional Editing Techniques', icon: <Layout size={16} /> },
        { label: 'Module 4: Audio Editing & Sound Design', icon: <Volume2 size={16} /> },
        { label: 'Module 5: Motion Graphics & Titles', icon: <Type size={16} /> },
        { label: 'Module 6: Adobe After Effects Basics', icon: <Sparkles size={16} /> },
        { label: 'Module 7: Color Correction & Color Grading', icon: <Palette size={16} /> },
        { label: 'Module 8: Visual Effects & Green Screen', icon: <Wand2 size={16} /> },
        { label: 'Module 9: Social Media Video Production', icon: <Share size={16} /> },
        { label: 'Module 10: AI-Powered Video Editing', icon: <Brain size={16} /> },
        { label: 'Module 11: Exporting & Client Delivery', icon: <Folder size={16} /> }
      ],
      salaryInsights: [
        { experience: 'Fresher', salary: '\u20B92.5L - \u20B94.0L' },
        { experience: '1-3 Years', salary: '\u20B94.0L - \u20B97.0L' },
        { experience: 'Senior', salary: '\u20B98.0L - \u20B915.0L+' }
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
      title: 'Motion Graphics Mastery',
      image: '/Video Editing Fundamentals.webp',
      desc: 'A complete six-month mastery course to learn After Effects, VFX, 3D integration, and professional motion graphics from beginner to advanced level.',
      topics: [
        { label: 'Module 1: Fundamentals of Video Production & Editing', icon: <Film size={16} /> },
        { label: 'Module 2: Adobe Premiere Pro \u2013 Beginner to Advanced', icon: <Scissors size={16} /> },
        { label: 'Module 3: Professional Editing Techniques', icon: <Layout size={16} /> },
        { label: 'Module 4: Audio Editing & Sound Design', icon: <Volume2 size={16} /> },
        { label: 'Module 5: Motion Graphics & Animation', icon: <Type size={16} /> },
        { label: 'Module 6: Adobe After Effects \u2013 Complete Workflow', icon: <Sparkles size={16} /> },
        { label: 'Module 7: Visual Effects (VFX)', icon: <Wand2 size={16} /> },
        { label: 'Module 8: Color Correction & Professional Color Grading', icon: <Palette size={16} /> },
        { label: 'Module 9: 3D Integration & Visual Enhancement', icon: <Camera size={16} /> },
        { label: 'Module 10: Content Creation for Digital Platforms', icon: <Share size={16} /> },
        { label: 'Module 11: AI-Powered Video Editing & Automation', icon: <Brain size={16} /> },
        { label: 'Module 12: Branding & Graphic Design for Editors', icon: <Star size={16} /> },
        { label: 'Module 13: Exporting, Delivery & Broadcast Standards', icon: <Folder size={16} /> }
      ],
      salaryInsights: [
        { experience: 'Fresher', salary: '\u20B93.0L - \u20B95.0L' },
        { experience: '1-3 Years', salary: '\u20B95.0L - \u20B99.0L' },
        { experience: '3-5 Years', salary: '\u20B99.0L - \u20B916.0L' },
        { experience: 'Senior', salary: '\u20B916.0L - \u20B925.0L+' }
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
        { experience: 'Fresher (0-2 Yrs)', salary: '\u20B96.0L - \u20B910.0L' },
        { experience: 'Mid-Level (2-5 Yrs)', salary: '\u20B910.0L - \u20B918.0L' },
        { experience: 'Senior (5+ Yrs)', salary: '\u20B918.0L - \u20B930.0L+' },
        { experience: 'Lead AI Engineer', salary: '\u20B930.0L - \u20B950.0L+' }
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
      
      {/* Premium Background Blobs */}
      <div className="premium-background">
        <div className="particles-layer"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: scrollProgress }}></div>
      </div>

      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}></div>

      <div className="container-fluid" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <div className="reveal-up" style={{ paddingTop: '2rem', marginBottom: '1.5rem' }}>
          <button className="btn btn-secondary back-btn" onClick={onBack} style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <ArrowLeft size={16} /> Back to Course Overview
          </button>
        </div>

        {/* Hero Section */}
        <div className="course-detail-hero glass-card reveal-scale" style={{ padding: '3rem', margin: '2rem 0' }}>
          <div className="course-detail-content">
            <span className="section-tag cyan">Module Detail</span>
            <h1 className="course-detail-title">{module.title}</h1>
            <p className="course-detail-desc">{module.desc}</p>
            <button className="btn btn-primary" onClick={onOpenEnrollModal} style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, #F62477, #220066)', border: 'none', boxShadow: '0 10px 20px rgba(246, 36, 119, 0.3)' }}>
              <Sparkles size={16} className="heading-icon" /> Enroll in this Module
            </button>
          </div>
          <div className="course-detail-media" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img src={module.image} alt={module.title} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Course Includes Section */}
        {module.courseIncludes && (
          <div className="course-includes-section reveal-up stagger-container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <h2 className="premium-heading"><Sparkle size={24} className="heading-icon" style={{ color: '#F62477' }} /> This Course Includes</h2>
            <div className="premium-pill-grid">
              {module.courseIncludes.map((item, idx) => (
                <div key={idx} className="premium-pill">
                  <CheckCircle2 size={16} className="premium-pill-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="premium-divider"></div>
          </div>
        )}

        {/* Weekly Modules Section */}
        {module.weeklyModules && (
          <div className="course-detail-section reveal-blur stagger-container">
            <h2 className="premium-heading"><Calendar size={24} className="heading-icon" style={{ color: '#220066' }} /> Weekly Curriculum</h2>
            <div className="module-premium-grid">
              {module.weeklyModules.map((week, idx) => (
                <div key={idx} className="module-premium-card">
                  <div className="module-badge">{idx + 1}</div>
                  <div className="module-text">{week}</div>
                </div>
              ))}
            </div>
            <div className="premium-divider"></div>
          </div>
        )}

        {/* What You Will Learn Section */}
        {!module.weeklyModules && module.topics && module.topics.length > 0 && (
          <div className="course-detail-section reveal-blur stagger-container">
            <h2 className="premium-heading"><Target size={24} className="heading-icon" style={{ color: '#00C3FF' }} /> What You Will Learn</h2>
            <div className="module-premium-grid">
              {module.topics.map((t, idx) => (
                <div className="module-premium-card" key={idx}>
                  <div className="module-badge" style={{ background: 'linear-gradient(135deg, #00C3FF, #060B5E)' }}>
                    {idx + 1}
                  </div>
                  <div className="module-text">{t.label}</div>
                </div>
              ))}
            </div>
            <div className="premium-divider"></div>
          </div>
        )}

        {/* Learning Process Roadmap */}
        {module.learningProcess && (
          <div className="learning-process-section reveal-up">
            <h2 className="premium-heading"><Workflow size={24} className="heading-icon" style={{ color: '#F62477' }} /> Your Learning Roadmap</h2>
            <div className="premium-timeline">
              <div className="timeline-track">
                <div className="timeline-progress" style={{ height: scrollProgress }}></div>
              </div>
              {module.learningProcess.map((step, idx) => (
                <div key={idx} className="premium-timeline-step">
                  <div className="timeline-node">{step.step}</div>
                  <div className="timeline-card">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="premium-divider"></div>
          </div>
        )}

        {/* Salary Insights Table */}
        {module.salaryInsights && (
          <div className="salary-insights-section reveal-scale">
            <h2 className="premium-heading"><ArrowUpRight size={24} className="heading-icon" style={{ color: '#00C3FF' }} /> Salary Insights (India)</h2>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Estimated market compensation based on current industry data.</p>
            <div className="premium-dashboard">
              <div className="dashboard-inner">
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Experience Level</th>
                      <th>Estimated Salary (LPA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {module.salaryInsights.map((insight, idx) => (
                      <tr key={idx} className="dashboard-row">
                        <td>{insight.experience}</td>
                        <td className="salary-gradient">{insight.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="premium-divider"></div>
          </div>
        )}

        {/* What You'll Walk Away With Section */}
        <div className="walk-away-section reveal-up stagger-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="premium-heading" style={{ fontSize: '2rem' }}><Trophy size={28} className="heading-icon" style={{ color: '#F62477' }} /> What You'll Walk Away With</h2>
          </div>
          
          <div className="premium-feature-grid">
            <div className="premium-feature-card">
              <div className="feature-icon-wrapper">
                <Zap size={24} />
              </div>
              <h4>Job-Ready Skills</h4>
              <p>Learn the core tools that every employer looks for — from day one.</p>
            </div>
            
            <div className="premium-feature-card">
              <div className="feature-icon-wrapper">
                <Target size={24} />
              </div>
              <h4>Live Campaign Practice</h4>
              <p>Run actual ad campaigns and projects with real budgets during the course.</p>
            </div>
            
            <div className="premium-feature-card">
              <div className="feature-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h4>50+ Premium Tools</h4>
              <p>Hands-on access to industry-leading tools used by top agencies and brands.</p>
            </div>
            
            <div className="premium-feature-card">
              <div className="feature-icon-wrapper">
                <Star size={24} />
              </div>
              <h4>Placement Support</h4>
              <p>250+ hiring partners across agencies, brands and startups — ready to hire you.</p>
            </div>
          </div>
        </div>
          
        {/* Academy Content Section */}
        <div className="academy-content-section glass-card reveal-blur" style={{ marginTop: '5rem', background: 'linear-gradient(135deg, rgba(6, 11, 94, 0.9), rgba(74, 29, 115, 0.9))', color: 'white' }}>
          <div className="academy-content-inner">
            <div className="academy-content-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="section-title" style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Why Choose Nextal Academy?</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.7' }}>
                We believe the best way to learn is through practical experience. Our industry-focused curriculum helps you master professional techniques while working on real projects.
              </p>
              <div className="premium-pill-grid" style={{ justifyContent: 'center' }}>
                {academyFeatures.map((feature, idx) => (
                  <div className="premium-pill" key={idx} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                    <CheckCircle2 size={16} style={{ color: '#00C3FF' }} /> 
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
