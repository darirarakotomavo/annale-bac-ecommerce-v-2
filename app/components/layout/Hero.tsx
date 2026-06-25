"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import JourCountdown from "@/app/components/JourCountdown";

export default function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-rose-100">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-2.jpg"
          alt="Réussir votre Bac"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] bg-repeat z-0" />
      <div className="container-custom relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4"
        >
          📚 Bac 2026 – <JourCountdown />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 mb-4 text-left"
        >
          Cours accélérés en Ligne - Préparation BAC 2026 – Série ( L , S , A ,
          C , D ) -
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-blue-700 mb-6 font-light text-left"
        >
          Sujets pdf et corrigés pdf - Bac 2025 - Toutes Matières et Toutes
          Séries - Gratuits -
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-blue-900 max-w-2xl mx-0 mb-8 font-medium text-left leading-relaxed"
        >
          Cours de révisions intensives pour le{" "}
          <span className="text-orange-600 font-bold">Bac 2026</span> avec des
          documents
          <span className="text-orange-600 font-bold">
            - Résumés des Cours - Fiches des Formules
          </span>
          et les{" "}
          <span className="text-orange-600 font-bold">
            Sujets avec corrections détaillées Bac 2025
          </span>{" "}
          toutes Matières et toutes Séries (S , L, A , C, D)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-start"
        >
          <Link
            href="/cours"
            className="bg-blue-300 hover:bg-yellow-300 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl text-sm"
          >
            🎓 Cours de révision
          </Link>
          <Link
            href="/pdf-gratuits"
            className="bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-green-300 hover:text-white px-6 py-3 rounded-lg font-bold transition text-sm"
          >
            📄 Annales 2025
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-6 justify-start text-sm text-blue-800 font-medium"
        >
          <span>✅ Séries ( S , L , A , C , D )</span>
          <span>✅ Toutes matières</span>
          <span>✅ Corrigés détaillés</span>
        </motion.div>
      </div>
    </section>
  );
}
