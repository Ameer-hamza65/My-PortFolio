"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, ChevronDown, Sparkles, Brain, Code, Zap, Award, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [neurons, setNeurons] = useState([]);
  const [connections, setConnections] = useState([]);
  
  // Animated Title State
  const titles = [
    { text: "Machine Learning Engineer", color: "from-emerald-400 to-cyan-400" },
    { text: "AI Engineer", color: "from-purple-400 to-pink-400" },
    { text: "Software Engineer", color: "from-cyan-400 to-blue-400" }
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex].text;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate neurons for brain network
    const newNeurons = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      pulseDelay: Math.random() * 3
    }));
    setNeurons(newNeurons);

    // Generate connections between nearby neurons
    const newConnections = [];
    for (let i = 0; i < newNeurons.length; i++) {
      for (let j = i + 1; j < newNeurons.length; j++) {
        const dx = newNeurons[i].x - newNeurons[j].x;
        const dy = newNeurons[i].y - newNeurons[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 20) {
          newConnections.push({
            x1: newNeurons[i].x,
            y1: newNeurons[i].y,
            x2: newNeurons[j].x,
            y2: newNeurons[j].y,
            animationDelay: Math.random() * 2
          });
        }
      }
    }
    setConnections(newConnections);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "SolveIt - AI Math & Physics Tutor",
      description: "AI-powered tutoring system with step-by-step problem solving for math and physics",
      tech: ["FastAPI", "Streamlit", "Gemini AI", "Python"],
      features: [
        "Comprehensive math tools: Algebra, Calculus, Geometry, Trigonometry",
        "Physics modules: Kinematics, Dynamics, Energy, Electricity",
        "Interactive unit conversion and step-by-step explanations"
      ],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      link: "https://github.com/Ameer-hamza65/SolveIt"
    },
    {
      title: "StudyBuddy",
      description: "AI-powered learning companion with RAG pipeline and dynamic quiz generation",
      tech: ["FastAPI", "Streamlit", "LangChain", "Gemini AI"],
      features: [
        "Learning Route RAG pipeline with LangChain and Gemini embeddings",
        "Dynamic 10-question MCQ quiz generation",
        "Instant scoring and feedback system"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      link: "https://github.com/Ameer-hamza65/StudyBuddy"
    },
    {
      title: "RAGcruit",
      description: "Dynamic RAG system for automated resume screening and ranking",
      tech: ["Google Gemini", "LangGraph", "FAISS", "FastAPI"],
      features: [
        "PDF content extraction and skill detection",
        "Job description matching with custom similarity metrics",
        "Multi-resume ranking with trust score calculation"
      ],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      link: "https://github.com/Ameer-hamza65/RAGcruit"
    },
    {
      title: "LawLM - Legal Research Assistant",
      description: "Comprehensive legal research chatbot with 50+ Supreme Court cases",
      tech: ["Gemini LLM", "BART", "FAISS", "Python"],
      features: [
        "Intelligent Q&A with RAG and entity extraction",
        "Legal document summarization using BART",
        "Semantic search through Supreme Court judgments"
      ],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      link: "https://github.com/Ameer-hamza65/LawLM-Legal-Research"
    },
    {
      title: "Book Recommendation System",
      description: "Personalized book recommendations using collaborative filtering",
      tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      features: [
        "Collaborative filtering algorithm",
        "NearestNeighbors implementation",
        "Interactive web interface"
      ],
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      link: "https://github.com/Ameer-hamza65/Book-Recomendation-system-deployed"
    },
    {
      title: "AI Doctor with Speech & Vision",
      description: "End-to-end doctor simulation with multimodal capabilities",
      tech: ["Gradio", "Whisper", "GTTS", "Llama 3.3"],
      features: [
        "Speech-to-text with Whisper",
        "Vision capabilities integration",
        "Text-to-speech responses"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      link: "https://github.com/Ameer-hamza65/End-to-End-Doctor-with-Speech-and-vision"
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      platform: "Coursera",
      date: "2024",
      link: "https://coursera.org/verify/specialization/MO3WJ7EPOQPO",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Fundamentals of NLP and Transformers",
      issuer: "NVIDIA",
      platform: "Coursera",
      date: "2024",
      link: "https://coursera.org/verify/4CPBJ685ZFQI",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University",
      platform: "Coursera",
      date: "2024",
      link: "https://coursera.org/verify/L3CMXWHQM3ZQ",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "Stanford University",
      platform: "Coursera",
      date: "2024",
      link: "https://coursera.org/verify/M7KZET94G51P",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Gen AI Engineering with Transformers & LLMs",
      issuer: "IBM",
      platform: "Credly",
      date: "2025",
      link: "https://www.credly.com/go/y98CT9Cl",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Building Autonomous AI Agents with LangGraph",
      issuer: "Packt",
      platform: "Coursera",
      date: "2024",
      link: "https://coursera.org/verify/REBKXGYN34L3",
      icon: <Code className="w-8 h-8" />
    }
  ];

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Vync AI",
      location: "Islamabad",
      period: "June 2024 - August 2024",
      description: [
        "Developed machine learning models for real-world applications",
        "Collaborated with senior engineers on AI-driven projects",
        "Gained hands-on experience with production-level ML systems"
      ],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "AI/ML Engineer",
      company: "Fiverr",
      location: "Remote",
      period: "October 2023 - Present",
      description: [
        "Successfully delivered 20+ ML projects to international clients",
        "Built custom RAG-based chatbots and AI agent systems",
        "Maintained 5-star rating with consistent client satisfaction"
      ],
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "SQL", "C++", "Java", "JavaScript", "HTML", "CSS"],
    "AI & Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "NLP", "Generative AI", "Agentic AI", "RAG Systems"],
    "Libraries & Frameworks": ["Numpy", "Pandas", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain", "LangGraph", "CrewAI", "Streamlit"],
    "Tools": ["Git", "GitHub", "Docker", "AWS", "HuggingFace", "N8N", "Make.com", "Lovable", "Flask"],
    "Databases": ["MySQL", "Oracle", "FAISS", "Vector DBs"]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
      {/* Neural Network Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-30">
          {/* Connections between neurons */}
          {connections.map((conn, index) => (
            <line
              key={index}
              x1={`${conn.x1}%`}
              y1={`${conn.y1}%`}
              x2={`${conn.x2}%`}
              y2={`${conn.y2}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${conn.animationDelay}s` }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Neurons */}
        {neurons.map((neuron) => (
          <div
            key={neuron.id}
            className="absolute rounded-full bg-emerald-400"
            style={{
              left: `${neuron.x}%`,
              top: `${neuron.y}%`,
              width: `${neuron.size}px`,
              height: `${neuron.size}px`,
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
              animationName: 'neuronPulse',
              animationDuration: '2s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDelay: `${neuron.pulseDelay}s`,
            }}
          />
        ))}
      </div>



      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`w-8 h-8 border-2 border-emerald-400 rounded-full transition-transform duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}>
          <div className="w-2 h-2 bg-emerald-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-40 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AH
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'certifications', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-emerald-400 transition-colors ${activeSection === section ? 'text-emerald-400' : ''}`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {section}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg">
            {['home', 'about', 'experience', 'skills', 'certifications', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Modern Hexagonal Profile Picture */}
          <div className="mb-8 relative inline-block group">
            <div className="relative w-64 h-64">
              {/* Outer Hexagonal Border with Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-purple-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-3xl bg-slate-950"></div>
              </div>
              
              {/* Inner Image Container */}
              <div className="absolute inset-3 rounded-3xl overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                <img 
                  src="/images/image.jpeg" 
                  alt="Ameer Hamza"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-emerald-400"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-purple-400"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-pink-400"></div>
              
              {/* Orbiting Particles */}
              <div className="absolute -top-4 left-1/2 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>



          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ameer Hamza
          </h1>
          
          {/* Animated Typewriter Title */}
          <div className="h-16 flex items-center justify-center">
            <p className={`text-2xl md:text-4xl font-light bg-gradient-to-r ${titles[currentTitleIndex].color} bg-clip-text text-transparent`}>
              {displayedText}
              <span className="animate-blink">|</span>
            </p>
          </div>



          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 mt-4">
            Crafting intelligent AI solutions that solve real-world challenges. 
            Specialized in Generative AI, RAG Systems, and Agentic AI.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:ameerhmza547@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a 
              href="https://github.com/Ameer-hamza65"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 hover:bg-emerald-500/10 rounded-full transition-all shadow-lg"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/Ameer-hamza65" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ameer-hamza-710183272/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ameerhmza547@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+923055993795" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-emerald-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-2xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Turning ideas into intelligent systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
          A Software Engineering student at UET Taxila, I specialize in Artificial Intelligence and Machine Learning, building real-world solutions powered by Generative AI.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
          With hands-on experience in RAG-based chatbots, AI agents, and end-to-end ML systems, I’ve delivered impactful projects to international clients on Fiverr. My expertise spans Generative AI, NLP, and cutting-edge tools like LangChain, LangGraph, and LLMs. Backed by certifications from Stanford and IBM and a CGPA of 3.37, I’m driven to push the boundaries of what AI can do.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            My Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-cyan-400 hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-8 md:mb-0`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-105 transform shadow-xl">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-cyan-400 mb-1">{exp.company}</p>
                    <p className="text-gray-400 mb-1">{exp.location}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                    <ul className={`text-gray-300 space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center z-10 border-4 border-slate-900 shadow-lg">
                  {exp.icon}
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-105 transform shadow-xl">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">BSc in Software Engineering</h3>
                  <p className="text-xl text-cyan-400 mb-1">University of Engineering and Technology, Taxila</p>
                  <p className="text-sm text-gray-500 mb-4">Sep 2022 - Jun 2026</p>
                  <p className="text-gray-300 text-sm">
                    Currently pursuing Software Engineering at UET Taxila, focusing on software development principles and modern technologies. The program blends theoretical knowledge with practical experience, preparing me to tackle real-world challenges in the tech industry.
                  </p>
                  <p className="text-emerald-400 mt-4 font-semibold">CGPA: 3.37</p>
                </div>
              </div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center z-10 border-4 border-slate-900 shadow-lg">
                <Code className="w-6 h-6" />
              </div>
              
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all transform hover:scale-105 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full text-sm border border-emerald-500/30 transition-all cursor-default transform hover:scale-105"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all transform hover:scale-105 hover:-translate-y-2 shadow-xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-4">{cert.platform}</p>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-semibold"
                >
                  Verify Certificate <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all transform hover:scale-105 hover:-translate-y-2 shadow-xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs text-gray-400">• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 rounded-full text-xs text-cyan-400 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View on GitHub <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <a 
              href="https://github.com/Ameer-hamza65"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50 text-lg font-semibold"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Github className="w-6 h-6" />
              Explore More Projects on GitHub
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 mb-4 font-mono">What's Next</p>
          <h2 className="text-5xl font-bold mb-8 text-gray-200">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I am always open to new opportunities and collaborations. If you have a project in mind, or just want to say hi, feel free to send me an email.
          </p>

          <a 
            href="mailto:ameerhmza547@gmail.com"
            className="inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all transform hover:scale-105 text-lg font-mono shadow-lg shadow-emerald-500/30"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Say Hello
          </a>

          <div className="mt-20 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm font-mono">
              Designed & Built by Ameer Hamza
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;