"use client";

import Link from "next/link";
import { Play, ArrowRight, Calculator, Atom, Dna, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/common/Logo";

export default function Hero() {
    return (
        <section className="mt-13 pt-40 pb-40 px-5 bg-indigo-600 text-white text-center relative">

            {/* 3D Image Placeholders */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Math Icon */}
                <motion.div
                    initial={{ opacity: 0, x: -100, y: 40, rotate: -12 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
                    transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
                    className="absolute top-20 left-10 transform rotate-12"
                >
                    <motion.div
                        animate={{ rotate: [-6, 6, -6], y: [0, -6, 0, 6, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        className="flex items-center justify-center"
                    >
                        <Calculator className="w-24 h-24 md:w-48 md:h-48 text-white/40" />
                    </motion.div>
                </motion.div>

                {/* Physics Icon */}
                <motion.div
                    initial={{ opacity: 0, x: 100, y: 40, rotate: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.35 }}
                    className="absolute top-16 right-20 md:right-50 transform -rotate-6"
                >
                    <motion.div
                        animate={{ rotate: [4, -4, 4], y: [0, -5, 0, 5, 0] }}
                        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="flex items-center justify-center"
                    >
                        <Atom className="w-20 h-20 md:w-48 md:h-48 text-white/40" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, rotate: -3 }}
                    animate={{ opacity: 1, y: 0, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.5 }}
                    className="absolute bottom-20 left-1/4 transform rotate-3"
                >
                    <motion.div
                        animate={{ rotate: [-5, 5, -5], y: [0, -7, 0, 7, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                        className="flex items-center justify-center"
                    >
                        <Dna className="w-24 h-24 md:w-48 md:h-48 text-white/40" />
                    </motion.div>
                </motion.div>

                {/* Chemistry Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotate: 12 }}
                    animate={{ opacity: 1, y: 0, rotate: -12 }}
                    transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.65 }}
                    className="absolute bottom-32 right-10 transform -rotate-12"
                >
                    <motion.div
                        animate={{ rotate: [6, -6, 6], y: [0, -6, 0, 6, 0] }}
                        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                        className="flex items-center justify-center"
                    >
                        <FlaskConical className="w-20 h-20 md:w-48 md:h-48 text-white/40" />
                    </motion.div>
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-extrabold mb-5 leading-tight"
                >
                    <Logo size="xl" variant="light" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-extrabold mt-10 leading-tight"
                >
                    ប្រព័ន្ធសិក្សា សម្រាប់សិស្សកម្ពុជា
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl md:text-5xl font-extrabold mt-10 leading-tight"
                >
                    យោងតាមកម្មវិធីសិក្សា ក្រសួងអប់រំ យុវជន និងកីឡា
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex gap-5 justify-center flex-wrap mt-20"
                >
                    <Link
                        href="/docs"
                        className="bg-white text-indigo-600 px-8 py-4 rounded-full no-underline font-semibold text-base transition-all duration-300 hover:bg-gray-100 flex items-center gap-2"
                    >
                        <Play size={20} />
                        ចាប់ផ្តើមរៀន
                    </Link>
                    <a
                        href="#features"
                        className="bg-transparent text-white px-8 py-4 rounded-full no-underline font-semibold text-base transition-all duration-300 border-2 border-white hover:bg-white/10 flex items-center gap-2"
                    >
                        <ArrowRight size={20} />
                        ស្វែងយល់បន្ថែម
                    </a>
                </motion.div>
            </div>
        </section>
    );
}


