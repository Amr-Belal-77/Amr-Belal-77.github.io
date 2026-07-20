import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectCardProps {
    project: Project;
    index: number;
    onSelect?: (project: Project) => void;
}

const categoryStyles: Record<Project['category'], string> = {
    'Agentic AI': 'bg-violet-100 text-violet-700',
    'Generative AI': 'bg-fuchsia-100 text-fuchsia-700',
    'Applied AI & Robotics': 'bg-cyan-100 text-cyan-700',
    'HCI & Web App': 'bg-amber-100 text-amber-700',
    'Computer Vision': 'bg-rose-100 text-rose-700',
    'IoT & Machine Learning': 'bg-emerald-100 text-emerald-700',
    'Information Retrieval': 'bg-blue-100 text-blue-700',
    'Classification': 'bg-indigo-100 text-indigo-700',
    'Conversational AI': 'bg-sky-100 text-sky-700',
    'Data Loss Prevention': 'bg-slate-200 text-slate-700',
    'Clustering': 'bg-teal-100 text-teal-700',
    'Data Analytics': 'bg-blue-100 text-blue-700',
    'ML Evaluation': 'bg-indigo-100 text-indigo-700',
    'Regression': 'bg-orange-100 text-orange-700',
    'Assistive Robotics': 'bg-green-100 text-green-700',
    'Wireless Communications': 'bg-lime-100 text-lime-700',
    'ML Algorithms': 'bg-yellow-100 text-yellow-800',
    'ML Engineering': 'bg-purple-100 text-purple-700'
};

const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => {
    const projectUrl = project.githubUrl || (project.link && project.link !== '#' ? project.link : undefined);
    const isGitHubProject = projectUrl?.includes('github.com');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => onSelect?.(project)}
            onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return;
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelect?.(project);
                }
            }}
            role={onSelect ? 'button' : undefined}
            tabIndex={onSelect ? 0 : undefined}
            aria-label={onSelect ? `View details for ${project.title}` : undefined}
            className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 ${onSelect ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400' : ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

            <div className="relative z-10">
                <div className="flex justify-between items-start gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryStyles[project.category]}`}>
                        {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                        {project.documentationUrl && (
                            <a
                                href={project.documentationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} documentation`}
                                title="Documentation"
                                onClick={(event) => event.stopPropagation()}
                                className="p-2 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 transition-colors"
                            >
                                <FileText size={18} />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} live demo`}
                                title="Live Demo"
                                onClick={(event) => event.stopPropagation()}
                                className="p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 transition-colors"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                        {projectUrl && (
                            <a
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} ${isGitHubProject ? 'source code' : 'project link'}`}
                                title={isGitHubProject ? 'Source Code' : 'Project Link'}
                                onClick={(event) => event.stopPropagation()}
                                className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                                {isGitHubProject ? <Github size={20} /> : <ExternalLink size={20} />}
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary-600 transition-colors">
                    {project.title}
                </h3>

                {project.projectType && (
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-3">
                        {project.projectType}
                    </p>
                )}

                <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[60px]">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                            {tech}
                        </span>
                    ))}
                </div>

                {(projectUrl || project.liveUrl || project.documentationUrl) && (
                    <div className="grid sm:grid-cols-2 gap-3 mt-2">
                        {projectUrl && (
                            <a
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                            >
                                {isGitHubProject ? 'Source Code' : 'View Project'}
                                {isGitHubProject ? <Github size={15} /> : <ExternalLink size={14} />}
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
                            >
                                Live Demo <ExternalLink size={14} />
                            </a>
                        )}
                        {project.documentationUrl && (
                            <a
                                href={project.documentationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
                            >
                                Documentation <FileText size={15} />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
