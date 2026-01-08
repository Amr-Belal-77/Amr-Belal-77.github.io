import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
            ${project.category === 'AI' ? 'bg-purple-100 text-purple-600' :
                            project.category === 'NLP' ? 'bg-blue-100 text-blue-600' :
                                project.category === 'IoT' ? 'bg-green-100 text-green-600' :
                                    'bg-slate-100 text-slate-600'
                        }`}>
                        {project.category}
                    </span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                        <Github size={20} />
                    </a>
                </div>

                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary-600 transition-colors">
                    {project.title}
                </h3>

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

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-sm font-medium text-white bg-slate-900 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                >
                    View Code <ExternalLink size={14} />
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
