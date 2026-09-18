"use client";

import Link from "next/link";
// import Image from "next/image";
import { motion } from "framer-motion";
import JourCountdown from "@/app/components/JourCountdown";

export default function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Image de fond */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-2.jpeg"
          alt="Réussir votre Bac"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div> */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] bg-repeat z-0" />
      <div className="container-custom relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-sky-400 text-white px-4 py-1 rounded-full text-sm font-bold mb-4"
        >
          📚 Bac 2026 – <JourCountdown />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-3xl lg:text-2xl font-extrabold text-sky-900 mb-4 text-left"
        >
          Séances de préparation en Ligne BAC 2027 Série ( L , S , OSE )
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-sky-700 mb-6 font-light text-left"
        >
          Sujets et corrigés Bac 2026 Toutes Matières Série ( L , S , OSE)
          pdf Gratuits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-sky-900 max-w-2xl mx-0 mb-8 font-medium text-left leading-relaxed"
        >
          Simulations Bac chronométrées pour le{" "}
          <span className="text-sky-600 font-bold">Bac 2027</span>
          <span className="text-sky-600 font-bold">
            -- Plans et Méthodologies pour Dissertations philosophiques ; Fiches
            des Formules ;
          </span>
          et les{" "}
          <span className="text-sky-600 font-bold">
            Sujets types Bac avec corrections détaillées
          </span>{" "}
          toutes Matières et toutes Séries (S , L, OSE)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-start"
        >
          <Link
            href="/cours"
            className="bg-sky-300 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl text-sm"
          >
            🎓 Cours de préparation
          </Link>
          <Link
            href="/pdf-gratuits"
            className="bg-transparent border-2 border-sky-700 text-sky-700 hover:bg-sky-400 hover:text-white px-6 py-3 rounded-lg font-bold transition text-sm"
          >
            📄 Annales 2026
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-6 justify-start text-sm text-sky-800 font-medium"
        >
          <span>✅ Séries ( L , S , OSE)</span>
          <span>✅ Toutes matières</span>
          <span>✅ Corrigés détaillés</span>
        </motion.div>
      </div>
    </section>
  );
}
