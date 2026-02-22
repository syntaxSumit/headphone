'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    colSpan?: string;
    rowSpan?: string;
}

const FeatureCard = ({ children, className = "", delay = 0, colSpan = "md:col-span-2", rowSpan = "md:row-span-1" }: FeatureCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className={`group relative ${colSpan} ${rowSpan} rounded-[2rem] glass-card overflow-hidden grain shadow-2xl ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
                    ),
                }}
            />
            <div className="relative z-20 h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};

export default function FeaturesSection() {
    return (
        <section className="relative w-full min-h-screen py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-4 block"
                    >
                        Innovation &amp; Sound
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
                    >
                        Pure <span className="text-gradient">Performance.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/50 text-lg md:text-xl max-w-xl mx-auto font-medium"
                    >
                        Engineered for the absolute pursuit of audio excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px] md:auto-rows-[340px]">

                    {/* Main Feature: ANC — large card with image backdrop */}
                    <FeatureCard colSpan="md:col-span-4" rowSpan="md:row-span-2" delay={0.1}>
                        {/* Background image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=60"
                                alt="Premium headphones"
                                fill
                                className="object-cover object-center opacity-25 group-hover:opacity-35 transition-opacity duration-700 scale-105 group-hover:scale-100"
                                style={{ transition: 'opacity 0.7s ease, transform 0.7s ease' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/80 via-[#050505]/50 to-transparent" />
                        </div>
                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
                                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-none">
                                    Active Noise<br />Cancellation.
                                </h3>
                                <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-md">
                                    Industry-leading hybrid ANC blocks out the world, letting only your music through. Silence has never sounded this good.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-white/10" />
                                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Hybrid Technology</span>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Feature: Battery — with waveform/abstract image */}
                    <FeatureCard colSpan="md:col-span-2" rowSpan="md:row-span-1" delay={0.2}>
                        {/* Top image strip */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&auto=format&fit=crop&q=60"
                                alt="Battery life"
                                fill
                                className="object-cover object-center opacity-15 group-hover:opacity-25 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
                        </div>
                        <div className="relative flex flex-col justify-end h-full p-8">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5 border border-green-500/20 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
                                    <line x1="22" x2="22" y1="11" y2="13" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">30h Playback</h3>
                            <p className="text-white/40 font-medium text-sm">From dawn till dusk, and beyond.</p>
                        </div>
                    </FeatureCard>

                    {/* Feature: Spatial Audio — with abstract 3D image */}
                    <FeatureCard colSpan="md:col-span-2" rowSpan="md:row-span-1" delay={0.3}>
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&auto=format&fit=crop&q=60"
                                alt="Spatial Audio"
                                fill
                                className="object-cover object-center opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
                        </div>
                        <div className="relative flex flex-col justify-end h-full p-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 border border-blue-500/20 text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Spatial Audio</h3>
                            <p className="text-white/40 font-medium text-sm">3D sound that moves with you.</p>
                        </div>
                    </FeatureCard>

                    {/* Feature: Titanium Drivers */}
                    <FeatureCard colSpan="md:col-span-3" rowSpan="md:row-span-1" delay={0.4}>
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700&auto=format&fit=crop&q=60"
                                alt="Titanium Drivers"
                                fill
                                className="object-cover object-right opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                        </div>
                        <div className="relative flex items-center h-full p-8 md:p-10 justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Titanium Drivers</h3>
                                <p className="text-white/40 font-medium">Rigid, lightweight precision.</p>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/5 flex items-center justify-center border border-orange-500/10 text-orange-400 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20M2 12h20M5.88 5.88l12.24 12.24M5.88 18.12L18.12 5.88" />
                                </svg>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Feature: Fast Charge */}
                    <FeatureCard colSpan="md:col-span-3" rowSpan="md:row-span-1" delay={0.5}>
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=700&auto=format&fit=crop&q=60"
                                alt="Fast Charge"
                                fill
                                className="object-cover object-center opacity-15 group-hover:opacity-25 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                        </div>
                        <div className="relative flex items-center h-full p-8 md:p-10 justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Fast Charge</h3>
                                <p className="text-white/40 font-medium">5 min = 3 hours of sound.</p>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-red-500/5 flex items-center justify-center border border-red-500/10 text-red-400 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m13 2-2 10h3L11 22l2-10h-3l2-10Z" />
                                </svg>
                            </div>
                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
}
