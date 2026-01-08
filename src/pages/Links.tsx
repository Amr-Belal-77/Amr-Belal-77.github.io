import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { contactInfo, socialLinks } from '../data/linksData';
import emailjs from '@emailjs/browser';

const Links = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const SERVICE_ID = 'cv_service';
    const TEMPLATE_ID = 'template_m1wyr5j';
    const PUBLIC_KEY = 'c-IliCshQ14iAzuw-';

    // Initialize EmailJS with Public Key
    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formState.name,
                    reply_to: formState.email, // Standard EmailJS field
                    message: formState.message,
                    to_name: 'Amr Belal Arab',
                }
            );

            setIsSuccess(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Submission failed (Error 412). This usually means the Public Key or Template ID needs a refresh. Please try clicking "Save" on your template in EmailJS and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-12 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    {contactInfo.openToWork ? 'Currently open for new opportunities.' : 'Always happy to connect.'}
                    Feel free to reach out for collaborations or just to say hi.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column: Contact Info & Links */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-4">
                            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-slate-600 hover:text-primary-600 transition-colors">
                                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                    <Mail size={20} />
                                </div>
                                <span>{contactInfo.email}</span>
                            </a>
                            <div className="flex items-center gap-4 text-slate-600">
                                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                    <Phone size={20} />
                                </div>
                                <span>{contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-600">
                                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                    <MapPin size={20} />
                                </div>
                                <span>{contactInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold px-2">Connect Elsewhere</h2>
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:scale-[1.02] transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg text-white" style={{ backgroundColor: link.color }}>
                                        <link.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">{link.name}</h3>
                                        <p className="text-xs text-slate-500">{link.description}</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-slate-300 group-hover:text-primary-600 transition-colors" size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 bg-primary-50 rounded-bl-full opacity-50 -mr-6 -mt-6"></div>

                    <h2 className="text-2xl font-bold mb-6 relative z-10">Send a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 disabled:bg-slate-400 transition-all flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <span>Sending...</span>
                            ) : isSuccess ? (
                                <>
                                    <span>Message Sent!</span>
                                    <CheckCircle size={20} className="text-green-400" />
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Links;
