"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  // Marquer le composant comme monté uniquement côté client
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-green-50 text-gray-800 shadow-md border-b border-green-200">
      <div className="container-custom py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <Image
              src="/images/logo-annales.svg"
              alt="Annales Bac S 2025"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <h1 className="text-xl md:text-2xl font-bold text-black">
              Annales Bac S 2025
            </h1>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/#products"
              className="text-gray-800 hover:text-green-200 transition font-medium"
            >
              📚 Produits
            </Link>
            <Link
              href="/#order"
              className="text-gray-800 hover:text-green-200 transition font-medium"
            >
              📥 Commander
            </Link>
            <Link
              href="/cours"
              className="text-gray-800 hover:text-green-200 transition font-medium"
            >
              🎓 Révision Bac 2026
            </Link>
            <Link
              href="/journal"
              className="text-gray-800 hover:text-green-200 transition font-medium"
            >
              📖 Journal
            </Link>
            <Link
              href="/pdf-gratuits"
              className="text-gray-800 hover:text-green-200 transition font-medium"
            >
              📄 PDF Gratuits
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-green-200 transition font-medium"
            >
              📖 À propos
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-green-200 transition font-medium"
            >
              📞 Contact
            </Link>

            {/* Réseaux sociaux avec icônes react-icons */}
            <a
              href="https://www.facebook.com/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-800 hover:text-[#1877f2] transition-colors duration-200 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-800 hover:text-[#e4405f] transition-colors duration-200 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/votre-chaine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-800 hover:text-[#ff0000] transition-colors duration-200 text-xl"
            >
              <FaYoutube />
            </a>

            {/* Panier */}
            <Link
              href="/panier"
              className="relative text-gray-800 hover:text-green-200 transition flex items-center gap-1"
            >
              <ShoppingCart size={22} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden text-gray-800 hover:text-green-200 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-3 border-t border-green-200 pt-4">
            <Link
              href="/#products"
              className="text-gray-800 hover:text-green-200 transition"
              onClick={() => setIsOpen(false)}
            >
              📚 Produits
            </Link>
            <Link
              href="/#order"
              className="text-gray-800 hover:text-green-200 transition"
              onClick={() => setIsOpen(false)}
            >
              📥 Commander
            </Link>
            <Link
              href="/cours"
              className="text-gray-800 hover:text-green-200 transition"
              onClick={() => setIsOpen(false)}
            >
              🎓 Révision Bac 2026
            </Link>
            <Link
              href="/journal"
              className="text-gray-800 hover:text-green-200 transition"
              onClick={() => setIsOpen(false)}
            >
              📖 Journal
            </Link>
            <Link
              href="/pdf-gratuits"
              className="text-gray-800 hover:text-green-200 transition"
              onClick={() => setIsOpen(false)}
            >
              📄 PDF Gratuits
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-green-200 transition"
              onClick={() => setIsOpen(false)}
            >
              📖 À propos
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-green-200 transition"
              onClick={() => setIsOpen(false)}
            >
              📞 Contact
            </Link>
            <Link
              href="/panier"
              className="text-gray-800 hover:text-green-200 transition flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              🛒 Panier
              {mounted && totalItems > 0 && (
                <span className="bg-green-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {totalItems}
                </span>
              )}
            </Link>
            <div className="flex gap-4 pt-2 border-t border-green-200">
              <a
                href="https://www.facebook.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-800 hover:text-[#1877f2] transition-colors duration-200 text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-800 hover:text-[#e4405f] transition-colors duration-200 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/votre-chaine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-800 hover:text-[#ff0000] transition-colors duration-200 text-xl"
              >
                <FaYoutube />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
