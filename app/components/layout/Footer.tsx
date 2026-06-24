import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 text-gray-700 pt-8 pb-4 border-t border-blue-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-blue-200">
          <div>
            <h3 className="text-blue-900 font-bold text-base mb-2">
              📚 Annales Bac S 2025
            </h3>
            <p className="text-sm text-gray-600">
              Des ressources éducatives de qualité pour réussir le Bac
              Madagascar.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              © {year} Richard RAKOTOMAVO
            </p>
            <p className="text-sm text-gray-600">Tous droits réservés</p>
          </div>
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Liens utiles</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="#products"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📚 Produits
                </Link>
              </li>
              <li>
                <Link
                  href="#order"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📥 Commander
                </Link>
              </li>
              <li>
                <Link
                  href="/cours"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  🎓 Révision Bac 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📖 Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-gratuits"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📄 PDF Gratuits
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📖 À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Suivez-moi</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/votre-profil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📘 Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/votre-profil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  📸 Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/votre-chaine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  ▶️ YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@votre-compte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transition"
                >
                  🎵 TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-600">📞 +261 32 24 622 74</p>
            <p className="text-sm text-gray-600">
              📧 darirarakotomavo@gmail.com
            </p>
            <p className="text-sm text-gray-600">
              💬 WhatsApp : +261 32 24 622 74
            </p>
          </div>
        </div>
        <div className="pt-4 text-center text-sm text-gray-500">
          <p>
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
