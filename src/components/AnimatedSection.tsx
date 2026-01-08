import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'left' | 'right' | 'down' | 'none';
    duration?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0, direction = 'up', duration = 0.6 }: AnimatedSectionProps) => {
    const getInitial = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 30 };
            case 'down': return { opacity: 0, y: -30 };
            case 'left': return { opacity: 0, x: 30 };
            case 'right': return { opacity: 0, x: -50 };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: 30 };
        }
    };

    return (
        <motion.div
            initial={getInitial()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
