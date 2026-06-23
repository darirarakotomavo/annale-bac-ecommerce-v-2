// app/components/layout/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import JourCountdown from "@/app/components/JourCountdown";

export default function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] bg-repeat" />
      <div className="container-custom relative z-10">
        {/* Badge : jaune doré, texte noir */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4"
        >
          📚 Bac 2026 – <JourCountdown />
        </motion.span>

        {/* Titre principal : blanc */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 text-shadow text-left"
        >
          Réussissez votre Bac
        </motion.h1>

        {/* Sous-titre : jaune doré */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-amber-400 mb-6 font-light text-left"
        >
          Cours de révision accélérée & Annales 2025
        </motion.h2>

        {/* Description : blanc + jaune pour les mots clés */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white max-w-2xl mx-0 mb-8 font-medium text-left leading-relaxed"
        >
          Préparez-vous intensivement pour le{" "}
          <span className="text-amber-400 font-bold">Bac 2026</span> avec des
          cours adaptés (
          <span className="text-amber-400 font-bold">Séries L et S</span>) et
          les
          <span className="text-amber-400 font-bold"> annales 2025</span> toutes
          matières.
        </motion.p>

        {/* Boutons : alignés à gauche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-start"
        >
          <Link
            href="/cours"
            className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl text-sm"
          >
            🎓 Cours de révision
          </Link>
          <Link
            href="/pdf-gratuits"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-bold transition text-sm"
          >
            📄 Annales 2025
          </Link>
        </motion.div>

        {/* Tags : texte gris clair */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-6 justify-start text-sm text-gray-300 font-medium"
        >
          <span>✅ Séries L & S</span>
          <span>✅ Toutes matières</span>
          <span>✅ Corrigés détaillés</span>
        </motion.div>
      </div>
    </section>
  );
}
