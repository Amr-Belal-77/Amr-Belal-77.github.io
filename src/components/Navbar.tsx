import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'Links', path: '/links' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto liquid-glass rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 hover:shadow-2xl hover:bg-white/40">
                <NavLink to="/" className="flex items-center gap-2 text-xl font-bold font-mono tracking-wide hover:text-primary-600 transition-colors">
                    <Code2 className="w-6 h-6 text-primary-500" />
                    <span>&lt;/Amr&gt;</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-all duration-300 hover:text-primary-600 relative group ${isActive ? 'text-primary-600' : 'text-slate-600'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-4 md:hidden flex flex-col gap-4"
                    >
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'hover:bg-slate-50 text-slate-600'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
