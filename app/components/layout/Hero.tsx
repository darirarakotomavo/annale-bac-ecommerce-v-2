// app/components/layout/Hero.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" />
            <div className="container-custom relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-yellow-400 text-primary-900 px-4 py-1 rounded-full text-sm font-semibold mb-4"
                >
                    📚 Bac 2026 – J-27
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 text-shadow"
                >
                    Réussissez votre Bac
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-yellow-300 mb-6 font-light"
                >
                    Cours de révision accélérée & Annales 2025
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
                >
                    Préparez-vous intensivement pour le Bac 2026 avec des cours adaptés (Séries L et S) et les annales 2025 toutes matières.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Link href="/cours" className="btn-primary bg-yellow-400 hover:bg-yellow-500 text-primary-900">
                        🎓 Cours de révision
                    </Link>
                    <Link href="/pdf-gratuits" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                        📄 Annales 2025
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 flex flex-wrap gap-6 justify-center text-sm text-gray-300"
                >
                    <span>✅ Séries L & S</span>
                    <span>✅ Toutes matières</span>
                    <span>✅ Corrigés détaillés</span>
                </motion.div>
            </div>
        </section>
    );
}