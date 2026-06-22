'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    // Résout l'erreur d'hydratation entre le serveur et le client
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-primary-900 text-white shadow-lg">
            <div className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
                        <h1 className="text-xl md:text-2xl font-bold">📚 Annales Bac S 2025</h1>
                    </Link>

                    {/* Navigation desktop */}
                    <nav className="hidden lg:flex items-center gap-6">
                        <Link href="/#products" className="hover:text-yellow-300 transition font-medium">
                            📚 Produits
                        </Link>
                        <Link href="/#order" className="hover:text-yellow-300 transition font-medium">
                            📥 Commander
                        </Link>
                        <Link href="/cours" className="hover:text-yellow-300 transition font-medium">
                            🎓 Cours
                        </Link>
                        <Link href="/pdf-gratuits" className="hover:text-yellow-300 transition font-medium">
                            📄 PDF Gratuits
                        </Link>
                        <Link href="/about" className="hover:text-yellow-300 transition font-medium">
                            📖 À propos
                        </Link>
                        <Link href="/contact" className="hover:text-yellow-300 transition font-medium">
                            📞 Contact
                        </Link>

                        {/* Réseaux sociaux (emoji) */}
                        <a
                            href="https://www.facebook.com/votre-profil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300 transition"
                            aria-label="Facebook"
                        >
                            📘
                        </a>
                        <a
                            href="https://www.instagram.com/votre-profil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300 transition"
                            aria-label="Instagram"
                        >
                            📸
                        </a>
                        <a
                            href="https://www.youtube.com/votre-chaine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300 transition"
                            aria-label="YouTube"
                        >
                            ▶️
                        </a>

                        {/* Panier */}
                        <Link href="/panier" className="relative hover:text-yellow-300 transition flex items-center gap-1">
                            <ShoppingCart size={22} />
                            {mounted && totalItems > 0 && (
                                <span className="absolute -top-2 -right-3 bg-yellow-400 text-primary-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </nav>

                    {/* Bouton menu mobile */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Menu mobile déroulant */}
                {isOpen && (
                    <nav className="lg:hidden mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4">
                        <Link
                            href="/#products"
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            📚 Produits
                        </Link>
                        <Link
                            href="/#order"
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            📥 Commander
                        </Link>
                        <Link
                            href="/cours"
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            🎓 Cours
                        </Link>
                        <Link
                            href="/pdf-gratuits"
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            📄 PDF Gratuits
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            📖 À propos
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            📞 Contact
                        </Link>
                        <Link
                            href="/panier"
                            className="hover:text-yellow-300 transition flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            🛒 Panier
                            {mounted && totalItems > 0 && (
                                <span className="bg-yellow-400 text-primary-900 text-xs font-bold rounded-full px-2 py-0.5">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <div className="flex gap-4 pt-2 border-t border-gray-700">
                            <a
                                href="https://www.facebook.com/votre-profil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition"
                            >
                                📘
                            </a>
                            <a
                                href="https://www.instagram.com/votre-profil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition"
                            >
                                📸
                            </a>
                            <a
                                href="https://www.youtube.com/votre-chaine"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition"
                            >
                                ▶️
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}