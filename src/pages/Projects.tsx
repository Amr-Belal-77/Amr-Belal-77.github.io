import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
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
                {projectsData.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
