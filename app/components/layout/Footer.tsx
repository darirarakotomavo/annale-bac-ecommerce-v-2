import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary-900 text-gray-300 pt-12 pb-6">
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">📚 Annales Bac S 2025</h3>
                        <p className="text-sm">Des ressources éducatives de qualité pour réussir le Bac Madagascar.</p>
                        <p className="text-sm mt-2">© {year} Richard RAKOTOMAVO</p>
                        <p className="text-sm">Tous droits réservés</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3">Liens utiles</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#products" className="hover:text-white transition">📚 Produits</Link></li>
                            <li><Link href="#order" className="hover:text-white transition">📥 Commander</Link></li>
                            <li><Link href="/cours" className="hover:text-white transition">🎓 Cours</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">📖 À propos</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">📞 Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3">Suivez-moi</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://www.facebook.com/votre-profil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">📘 Facebook</a></li>
                            <li><a href="https://www.instagram.com/votre-profil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">📸 Instagram</a></li>
                            <li><a href="https://www.youtube.com/votre-chaine" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">▶️ YouTube</a></li>
                            <li><a href="https://www.tiktok.com/@votre-compte" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">🎵 TikTok</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3">Contact</h4>
                        <p className="text-sm">📞 +261 32 24 622 74</p>
                        <p className="text-sm">📧 darirarakotomavo@gmail.com</p>
                        <p className="text-sm">💬 WhatsApp : +261 32 24 622 74</p>
                    </div>
                </div>
                <div className="pt-6 text-center text-sm text-gray-400">
                    <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
            </div>
        </footer>
    );
}