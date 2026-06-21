'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
            {/* <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" /> */}
            <div className="container-custom relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-yellow-400 text-primary-900 px-4 py-1 rounded-full text-sm font-semibold mb-4"
                >
                    📚 Session 2025
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 text-shadow"
                >
                    Annales Bac Madagascar
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-yellow-300 mb-6 font-light"
                >
                    Série Scientifique - Session 2025
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
                >
                    Les corrigés complets des épreuves de <strong className="text-yellow-300">Mathématiques</strong> et{' '}
                    <strong className="text-yellow-300">Sciences Physiques</strong> pour réussir votre Baccalauréat.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Link href="#products" className="btn-primary bg-yellow-400 hover:bg-yellow-500 text-primary-900">
                        📚 Voir les produits
                    </Link>
                    <Link href="#order" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                        📥 Commander
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 flex flex-wrap gap-6 justify-center text-sm text-gray-300"
                >
                    <span>✅ 4 000+ étudiants</span>
                    <span>✅ 50+ cours</span>
                    <span>✅ 100% satisfait</span>
                </motion.div>
            </div>
        </section>
    );
}