import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, CheckCircle2, ExternalLink, FileText, FolderKanban, Github, Layers3, X } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    useEffect(() => {
        if (!project) return;

        const previousOverflow = document.body.style.overflow;
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [project, onClose]);

    const projectUrl = project?.githubUrl || (project?.link && project.link !== '#' ? project.link : undefined);
    const isGitHubProject = projectUrl?.includes('github.com');

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6">
                    <motion.button
                        type="button"
                        aria-label="Close project details"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm"
                    />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`project-title-${project.id}`}
                        initial={{ opacity: 0, scale: 0.94, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 24 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close project details"
                            className="absolute top-4 right-4 p-2 bg-white/15 text-white backdrop-blur rounded-full hover:bg-white/25 transition-colors z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="bg-slate-900 text-white p-7 md:p-9 relative overflow-hidden">
                            <div className="absolute -right-5 -bottom-8 opacity-10">
                                <FolderKanban size={180} />
                            </div>

                            <div className="relative z-10 pr-10">
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-500/15 text-primary-300 border border-primary-400/25">
                                        {project.projectType || 'Project'}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/10">
                                        {project.category}
                                    </span>
                                </div>

                                <h2 id={`project-title-${project.id}`} className="text-2xl md:text-3xl font-mono font-bold leading-tight mb-5">
                                    {project.title}
                                </h2>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-mono">
                                    {project.date && (
                                        <div className="flex items-center gap-2">
                                            <Calendar size={15} />
                                            {project.date}
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Layers3 size={15} />
                                        {project.techStack.length} technologies
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-7 md:p-9 space-y-7">
                            <div>
                                <h3 className="font-mono text-lg font-bold text-slate-800 mb-3">
                                    // Project_Overview
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {project.purpose && (
                                <div>
                                    <h3 className="font-mono text-lg font-bold text-slate-800 mb-3">
                                        // Purpose_&_Use
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.purpose}
                                    </p>
                                </div>
                            )}

                            {project.features && project.features.length > 0 && (
                                <div>
                                    <h3 className="font-mono text-lg font-bold text-slate-800 mb-3">
                                        // Key_Features:
                                    </h3>
                                    <div className="grid gap-3">
                                        {project.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h3 className="font-mono text-lg font-bold text-slate-800 mb-3">
                                    // Tech_Stack:
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {project.techStack.map((tech) => (
                                        <div key={tech} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
                                            <CheckCircle2 size={15} className="text-green-500 shrink-0" />
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {(projectUrl || project.liveUrl || project.documentationUrl) && (
                                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                                    {projectUrl && (
                                        <a
                                            href={projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-3 flex items-center justify-center gap-2 font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                                        >
                                            {isGitHubProject ? <Github size={18} /> : <ExternalLink size={18} />}
                                            {isGitHubProject ? 'View Source Code' : 'View Project'}
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-3 flex items-center justify-center gap-2 font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
                                        >
                                            <ExternalLink size={18} />
                                            Open Live Demo
                                        </a>
                                    )}
                                    {project.documentationUrl && (
                                        <a
                                            href={project.documentationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-3 flex items-center justify-center gap-2 font-semibold text-sky-700 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors"
                                        >
                                            <FileText size={18} />
                                            View Documentation
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
