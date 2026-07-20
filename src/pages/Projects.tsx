import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const latestProjectOrder = [
    'weekly-genai-linkedin-agent',
    'ish-intelligent-spherical-home',
    'raay',
    'sourcecraft-research',
    'hci-course-registration'
];

const orderedProjects = [...projectsData].sort((firstProject, secondProject) => {
    const firstIndex = latestProjectOrder.indexOf(firstProject.id);
    const secondIndex = latestProjectOrder.indexOf(secondProject.id);

    if (firstIndex === -1 && secondIndex === -1) return 0;
    if (firstIndex === -1) return 1;
    if (secondIndex === -1) return -1;
    return firstIndex - secondIndex;
});

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="py-12" id="projects-preview">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Featured <span className="text-gradient">Projects</span>
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A collection of my work in Artificial Intelligence, Machine Learning, and Software Development.
                    Each project represents a unique challenge and solution.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {orderedProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} onSelect={setSelectedProject} />
                ))}
            </div>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
};

export default Projects;
