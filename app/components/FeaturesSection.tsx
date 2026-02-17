'use client';

import { motion } from 'framer-motion';

export default function FeaturesSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden bg-[#050505]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#050505] to-[#0a0a0a] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                        Premium Features
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Crafted to perfection, designed for audiophiles
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]">

                    {/* Large Feature - Active Noise Cancellation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative md:col-span-4 md:row-span-2 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 mb-6 text-white/90">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12h5" />
                                        <path d="M17 12h5" />
                                        <path d="M9 12v.01" />
                                        <path d="M13 12v.01" />
                                        <path d="M15 12v.01" />
                                        <path d="M11 12v.01" />
                                        <path d="M6 16v-8" />
                                        <path d="M18 16v-8" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                    Active Noise<br />Cancellation
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                                    Immerse yourself in pure silence with our adaptive hybrid ANC technology that filters out ambient noise in real-time, delivering an uninterrupted audio experience.
                                </p>
                            </div>
                            <div className="mt-6">
                                <span className="text-sm text-white/60 font-medium tracking-wider uppercase">Hybrid ANC</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Medium Feature - Battery Life */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative md:col-span-2 md:row-span-1 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
                                    <line x1="22" x2="22" y1="11" y2="13" />
                                    <line x1="6" x2="6" y1="11" y2="13" />
                                    <line x1="10" x2="10" y1="11" y2="13" />
                                    <line x1="14" x2="14" y1="11" y2="13" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                    30h Battery
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base">
                                    All-day playback on a single charge
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Medium Feature - Spatial Audio */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative md:col-span-2 md:row-span-1 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                    Spatial Audio
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base">
                                    Immersive 3D sound experience
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Feature - Premium Materials */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative md:col-span-3 md:row-span-1 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 h-full flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                    Premium Materials
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base">
                                    Titanium drivers & memory foam
                                </p>
                            </div>
                            <div className="w-12 h-12 text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Feature - Quick Charge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative md:col-span-3 md:row-span-1 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 h-full flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                    Fast Charging
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base">
                                    5 min charge = 3 hours playback
                                </p>
                            </div>
                            <div className="w-12 h-12 text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
