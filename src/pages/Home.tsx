import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Code2, Brain, Database, Monitor, Calendar, X, ArrowUpRight, ArrowRight, Bot, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import { trainingsData } from '../data/trainingsData';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import AnimatedSection from '../components/AnimatedSection';
import ProjectModal from '../components/ProjectModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showAllSkills, setShowAllSkills] = useState(false);
    const topProjectIds = [
        'weekly-genai-linkedin-agent',
        'sourcecraft-research',
        'ish-intelligent-spherical-home',
        'raay'
    ];
    const topProjects = topProjectIds
        .map((id) => projectsData.find((project) => project.id === id))
        .filter((project): project is Project => Boolean(project));
    const scrollToProjects = () => {
        const element = document.getElementById('top-projects');
        element?.scrollIntoView({ behavior: 'smooth' });
    };


    const featuredSkills = ['Python', 'Java', 'Javascript', 'OOP', 'ML Techniques', 'LSTM', 'Apache Spark', 'React', 'TypeScript', 'Tailwind CSS'];

    const additionalSkills = [
        'Agentic AI', 'Multi-Agent Systems', 'LLMs', 'LangGraph', 'Gemini API', 'Prompt Engineering',
        'Structured Outputs', 'RAG', 'Generative AI', 'Transformers', 'HuggingFace', 'GANs',
        'Diffusion Models', 'NLP', 'Sentiment Analysis', 'Information Retrieval', 'NLTK', 'Gensim',
        'Computer Vision', 'CNN', 'YOLO', 'InsightFace', 'Speech-to-Text', 'Text-to-Speech',
        'Scikit-learn', 'Pandas', 'NumPy', 'K-Means', 'DBSCAN', 'PCA', 'Classification',
        'Regression', 'Clustering', 'Feature Engineering', 'Matplotlib', 'Seaborn', 'Plotly',
        'FastAPI', 'Flask', 'Streamlit', 'Node.js', 'Express', 'PHP', 'MySQL', 'PostgreSQL',
        'Supabase', 'REST APIs', 'Flutter', 'HTML', 'CSS', 'IoT', 'ESP32', 'Raspberry Pi',
        'Robotics', 'Docker', 'GitHub Actions', 'Pytest'
    ];

    const services = [
        {
            title: 'End-to-End ML Pipelines',
            description: 'Building robust machine learning models from data collection to deployment.',
            icon: Brain,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            title: 'Data Analysis & Dashboards',
            description: 'Transforming raw data into actionable insights with interactive visualizations.',
            icon: Database,
            color: 'bg-purple-100 text-purple-600'
        },
        {
            title: 'AI-Powered Web Apps',
            description: 'Integrating intelligent features into modern full-stack web applications.',
            icon: Code2,
            color: 'bg-cyan-100 text-cyan-600'
        },
        {
            title: 'NLP & Chatbots',
            description: 'Creating conversational AI interfaces and advanced text processing solutions.',
            icon: Monitor,
            color: 'bg-indigo-100 text-indigo-600'
        },
        {
            title: 'Agentic AI Systems',
            description: 'Designing reliable multi-agent workflows that research, verify, reason, and automate complex tasks.',
            icon: Bot,
            color: 'bg-violet-100 text-violet-600'
        },
        {
            title: 'LLM Applications',
            description: 'Building production-focused LLM experiences with structured outputs, RAG, quality gates, and evaluation.',
            icon: Sparkles,
            color: 'bg-fuchsia-100 text-fuchsia-600'
        }
    ];

    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-20 overflow-x-hidden px-6 md:px-12 lg:px-16">
            {/* Hero Section */}
            <section className="min-h-[calc(100vh-100px)] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-6 z-10"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-2 shadow-sm border border-primary-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Applied AI &amp; Generative AI Engineer
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                            Hi, I'm <br />
                            <span className="text-gradient">Amr Belal Arab</span>
                        </h1>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="inline-flex items-center gap-2 text-primary-600 font-bold text-lg bg-primary-50 px-4 py-1 rounded-lg border border-primary-100"
                        >
                            <span className="text-2xl">4+</span>
                            <span className="text-sm uppercase tracking-wider leading-tight">Years of<br />Experience</span>
                        </motion.div>
                    </div>

                    <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                        I build production-ready AI systems that turn data, language, and models into real-world products.
                        My focus is Applied AI and Generative AI Engineering—from machine learning and LLM applications to agentic, multi-agent workflows.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="/Amr_Belal_Applied_AI_GenAI_Engineer_Resume.pdf"
                            download
                            title="Two-page resume tailored for Applied AI and Generative AI roles"
                            className="btn-liquid px-8 py-3 rounded-full font-bold text-slate-800 flex items-center gap-2 hover:text-primary-600 shadow-lg hover:shadow-primary-200/50 transition-all border border-slate-200 bg-white"
                        >
                            <Download className="w-5 h-5" />
                            Download Targeted Resume
                        </a>
                        <a
                            href="/Amr Belal_AI-Engineer_CV.pdf"
                            download
                            title="Complete four-page CV with the full project history"
                            className="btn-liquid px-8 py-3 rounded-full font-bold text-slate-700 flex items-center gap-2 hover:text-primary-600 border border-slate-200 bg-white"
                        >
                            <Download className="w-5 h-5" />
                            Download Complete CV
                        </a>
                        <button
                            onClick={scrollToProjects}
                            className="btn-liquid px-8 py-3 rounded-full font-bold text-slate-700 flex items-center gap-2 hover:text-primary-600 border border-slate-200 bg-white"
                        >
                            <ArrowDown className="w-5 h-5" />
                            View Projects
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 w-full h-[400px] lg:h-[500px] relative"
                >
                    {/* Abstract background blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                    <Hero3D />
                </motion.div>
            </section>

            {/* About Section */}
            <AnimatedSection direction="up" delay={0.1}>
                <section className="relative">
                    <div className="liquid-glass p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-2xl overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-400/10 to-transparent blur-3xl group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                            <div className="relative group/img shrink-0">
                                <div className="absolute -inset-2 bg-gradient-to-br from-primary-400 to-purple-500 rounded-3xl blur opacity-20 group-hover/img:opacity-40 transition-opacity duration-500"></div>
                                <div className="w-56 h-40 md:w-72 md:h-52 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center overflow-hidden shadow-xl border border-white/40 rotate-1 group-hover/img:rotate-0 transition-all duration-500 relative z-10">
                                    <img
                                        src="/about_me_ai_visual.png"
                                        alt="AI Machine Learning Intelligence"
                                        className="w-full h-full object-cover opacity-90 group-hover/img:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent"></div>
                                </div>
                            </div>

                            <div className="space-y-6 flex-1">
                                <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                    About Me
                                    <span className="h-1 w-12 bg-primary-600 rounded-full"></span>
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium">
                                    As an <span className="text-primary-600 font-bold">Applied AI &amp; Generative AI Engineer</span>, I design and build intelligent systems that move from experimentation to real-world impact.
                                    My experience spans machine learning, LLM applications, agentic and multi-agent workflows, NLP, computer vision, and end-to-end AI delivery.
                                    I combine strong engineering fundamentals with practical problem-solving to create reliable, scalable, and user-focused AI products.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Skills & Services Section */}
            <AnimatedSection>
                <section className="space-y-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 inline-block">Skills & Services</h2>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {featuredSkills.map((skill) => (
                                <span key={skill} className="px-5 py-2.5 liquid-glass rounded-full text-base font-semibold text-slate-700 border border-white/50 hover:text-primary-600 hover:shadow-lg transition-all cursor-default">
                                    {skill}
                                </span>
                            ))}
                            <AnimatePresence initial={false}>
                                {showAllSkills && additionalSkills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.85, y: 8 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.85, y: 8 }}
                                        transition={{ duration: 0.2, delay: Math.min(index * 0.015, 0.25) }}
                                        className="px-5 py-2.5 liquid-glass rounded-full text-base font-semibold text-slate-700 border border-white/50 hover:text-primary-600 hover:shadow-lg transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </AnimatePresence>
                            <button
                                type="button"
                                onClick={() => setShowAllSkills((current) => !current)}
                                aria-expanded={showAllSkills}
                                className="px-5 py-2.5 liquid-glass rounded-full text-sm font-semibold text-primary-600 border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all inline-flex items-center gap-1.5"
                            >
                                {showAllSkills ? (
                                    <>Show less <ChevronUp size={16} /></>
                                ) : (
                                    <>+ more <ChevronDown size={16} /></>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -8 }}
                                className="p-6 liquid-glass rounded-2xl hover:shadow-xl transition-all group border border-white/40 h-full"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/80 to-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner border border-white/50 text-primary-600`}>
                                    <service.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection>
                <section>
                    <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 inline-block">Education</h2>
                    <div className="liquid-glass p-10 rounded-3xl border border-white/40 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-60"></div>

                        <div className="flex flex-col md:flex-row items-center gap-8 md:items-start relative z-10 mb-8">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg p-4 border border-slate-100 flex-shrink-0">
                                <img src="/university.png" alt="University Logo" className="w-full h-full object-contain p-1" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                                    Helwan International Technological University
                                </h3>
                                <h4 className="font-mono text-xl md:text-2xl font-semibold text-primary-600 mt-3">Bachelor's Degree in Artificial Intelligence</h4>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 mt-5">
                                    <span className="bg-white/40 border border-white/30 px-5 py-2 rounded-full flex items-center gap-2 font-medium">
                                        <Calendar size={16} /> 2022 – 2026
                                    </span>
                                    <span className="font-bold text-primary-600 bg-primary-50/50 px-5 py-2 rounded-full border border-primary-100/50 text-base">GPA: 3.78</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-slate-200/50 my-8"></div>

                        <div>
                            <p className="font-bold text-sm mb-6 text-slate-800 uppercase tracking-widest text-center md:text-left opacity-80">Key Coursework</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 text-lg">
                                <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-primary-500 rounded-full shadow-sm"></span>Object-Oriented Programming (OOP)</li>
                                <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-primary-500 rounded-full shadow-sm"></span>Data Structures & Algorithms</li>
                                <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-primary-500 rounded-full shadow-sm"></span>Machine Learning & Neural Networks</li>
                                <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-primary-500 rounded-full shadow-sm"></span>Database Management Systems</li>
                                <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-primary-500 rounded-full shadow-sm"></span>Computer Vision & NLP</li>
                                <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-primary-500 rounded-full shadow-sm"></span>Software Engineering</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Trainings & Certifications Section (Directly under Education) */}
            <AnimatedSection delay={0.2}>
                <section className="space-y-10">
                    <div className="flex items-end justify-between px-4">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 inline-block">Trainings & Certifications</h2>

                    </div>

                    <div className="flex overflow-x-auto pb-12 gap-6 snap-x hide-scrollbar px-4 pt-4">
                        {trainingsData.map((training, idx) => (
                            <div
                                key={idx}
                                onClick={() => training.certificateImage && setSelectedCert(training.certificateImage)}
                                className={`min-w-[320px] md:min-w-[400px] liquid-glass p-8 rounded-2xl snap-center hover:shadow-2xl transition-all relative overflow-hidden group border border-white/40 flex flex-col ${training.certificateImage ? 'cursor-pointer hover:border-primary-400 active:scale-[0.98]' : ''}`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                {training.certificateImage && (
                                    <div className="absolute top-4 right-4 text-xs font-bold px-2 py-1 bg-primary-100 text-primary-700 rounded-full border border-primary-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Certificate
                                    </div>
                                )}
                                <h3 className="font-bold text-xl mb-2 text-slate-800 line-clamp-2 min-h-[3.5rem]">{training.title}</h3>
                                <p className="text-primary-600 font-semibold mb-4 text-sm">{training.institution}</p>
                                <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-white/30 inline-flex px-3 py-1 rounded-full border border-white/20 w-fit">
                                    <Calendar size={14} />
                                    <span>{training.date}</span>
                                </div>
                                <ul className="space-y-3 mt-auto">
                                    {training.takeaways.map((point, i) => (
                                        <li key={i} className="text-sm text-slate-600 flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0 shadow-lg shadow-accent-500/50"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* Top Projects Section */}
            <AnimatedSection delay={0.25}>
                <section id="top-projects" className="space-y-10 px-4">
                    <div className="flex items-end justify-between">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 inline-block">Top Projects</h2>
                        <Link to="/projects" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1 transition-colors">
                            View all <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {topProjects.map((project) => (
                            <button
                                type="button"
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group liquid-glass p-8 rounded-2xl border border-white/40 hover:border-primary-300 transition-all hover:shadow-xl relative overflow-hidden text-left w-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary-600">
                                    <ArrowUpRight size={24} />
                                </div>

                                {project.projectType && (
                                    <span className="inline-flex mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-100/80 text-primary-700 border border-primary-200/70">
                                        {project.projectType}
                                    </span>
                                )}

                                <h3 className="text-2xl font-bold mb-3 text-slate-800 pr-8">{project.title}</h3>
                                <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs font-mono px-2 py-1 bg-white/50 text-slate-600 rounded border border-white/20">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-xs font-mono px-2 py-1 bg-white/50 text-slate-500 rounded border border-white/20">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* Call to Action */}
            <AnimatedSection delay={0.3}>
                <section className="text-center py-20 bg-slate-900 text-white rounded-3xl relative overflow-hidden mx-4 shadow-2xl ring-1 ring-white/10">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
                    <div className="relative z-10 px-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Something Intelligent</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Looking for an AI Engineer to bring your data to life? I'm currently open for freelance projects and opportunities.
                        </p>
                        <Link
                            to="/links"
                            className="btn-liquid px-12 py-5 rounded-xl font-bold text-lg text-slate-900 hover:text-primary-700 inline-flex items-center gap-2"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </AnimatedSection>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedCert}
                                alt="Certificate"
                                className="w-full h-auto max-h-[80vh] object-contain bg-slate-950"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
