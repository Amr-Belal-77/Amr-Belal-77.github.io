import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';


const Hero3D = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    // WebGi-style: Dynamic Glare moves opposite to rotation
    const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
    const glareOpacity = useTransform(mouseX, [-0.5, 0, 0.5], [0.3, 0, 0.3]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to center of the container (-0.5 to 0.5)
        const mouseXPos = (e.clientX - rect.left) / width - 0.5;
        const mouseYPos = (e.clientY - rect.top) / height - 0.5;

        x.set(mouseXPos);
        y.set(mouseYPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className="w-[320px] h-[400px] md:w-[380px] md:h-[500px] relative perspective-1200" // Deeper perspective
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative w-full h-full rounded-3xl transition-all duration-300"
            >
                {/* Main Card Container with "Thick Glass" feel */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-full rounded-3xl overflow-hidden border-[1px] border-white/40 shadow-2xl skew-y-0 group bg-slate-900"
                    style={{
                        transformStyle: "preserve-3d",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" // Deep soft shadow
                    }}
                >
                    {/* Dynamic Specular Glare (WebGi Style) */}
                    <motion.div
                        className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay"
                        style={{
                            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, transparent 50%)`,
                            opacity: glareOpacity
                        }}
                    />

                    {/* AI Neural Overlay - Visible on Hover */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none bg-slate-900/30 backdrop-blur-[2px]">
                        {/* Provided AI Brain Image */}
                        <img
                            src="/ai-brain-bg.jpg"
                            alt="AI Brain Overlay"
                            className="w-full h-full object-cover absolute inset-0 mix-blend-screen opacity-90 scale-110 group-hover:scale-100 transition-transform duration-1000"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Animated SVG Nodes */}
                            <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] animate-pulse-slow opacity-80">
                                <circle cx="50" cy="50" r="2" fill="#38bdf8" className="animate-ping" />
                                <line x1="50" y1="50" x2="30" y2="30" stroke="#38bdf8" strokeWidth="0.4" strokeOpacity="0.7" />
                                <line x1="50" y1="50" x2="70" y2="30" stroke="#8b5cf6" strokeWidth="0.4" strokeOpacity="0.7" />
                            </svg>
                        </div>
                    </div>

                    {/* Normal State: Standard Profile Image */}
                    <img
                        src="/profile.jpg"
                        alt="Amr Belal Arab"
                        className="w-full h-full object-cover relative z-10 transition-all duration-700 group-hover:opacity-20 group-hover:scale-105"
                    />

                    {/* Cinematic Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-white/10 z-10" />

                    {/* Glass Shine Edge */}
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-white/30 z-40 pointer-events-none" />
                </motion.div>

                {/* Floating Elements - 3D Parallax */}
                <motion.div
                    style={{ transform: "translateZ(40px)" }}
                    className="absolute -top-6 -right-6 px-5 py-3 bg-white/10 backdrop-blur-xl rounded-xl shadow-xl text-sm font-bold text-white border border-white/20 hidden md:flex items-center gap-2"
                >
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                    Deep Learning Architect
                </motion.div>

                <motion.div
                    style={{ transform: "translateZ(60px)" }}
                    className="absolute -bottom-6 -left-6 px-5 py-3 bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-xl text-sm font-bold text-primary-400 border border-white/10 hidden md:block"
                >
                    Machine Learning Expert
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero3D;
