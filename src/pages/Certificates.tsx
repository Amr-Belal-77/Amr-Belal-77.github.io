import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, CheckCircle2, X } from 'lucide-react';
import { certificatesData } from '../data/certificatesData';
import type { Certificate } from '../data/certificatesData';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <div className="py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Training &amp; <span className="text-gradient">Certifications</span>
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A track record of continuous learning and specialization in modern technologies.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificatesData.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        layoutId={`card-${cert.id}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedCert(cert)}
                        className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 cursor-pointer hover:shadow-lg hover:border-primary-200 transition-all group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-primary-50 rounded-lg text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>
                            <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">{cert.date}</span>
                        </div>

                        <h3 className="font-bold text-lg text-slate-800 mb-1 group-hover:text-primary-600 transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-sm text-slate-500 mb-4">{cert.issuer}</p>

                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                                {cert.field}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`card-${selectedCert.id}`}
                            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="bg-slate-900 text-white p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Award size={120} />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start">
                                    <div className="flex-1">
                                        <h2 className="text-3xl font-mono font-bold mb-2">
                                            {selectedCert.title}
                                        </h2>
                                        <p className="text-xl text-primary-400 font-medium mb-4">{selectedCert.issuer}</p>

                                        <div className="flex gap-4 text-sm text-slate-400 font-mono">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                {selectedCert.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Award size={14} />
                                                {selectedCert.field}
                                            </div>
                                        </div>
                                    </div>

                                    {selectedCert.imageUrl && (
                                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-1 shrink-0 shadow-lg rotate-3 border border-white/20 overflow-hidden">
                                            <img src={selectedCert.imageUrl} alt={selectedCert.title} className="w-full h-full object-cover rounded-lg" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div>
                                    <h3 className="font-mono text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    // Certificate_Description
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {selectedCert.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-mono text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    // Key_Takeaways:
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {selectedCert.skills.map(skill => (
                                            <div key={skill} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                                                <CheckCircle2 size={14} className="text-green-500" />
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certificates;
