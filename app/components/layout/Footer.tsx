import Link from "next/link";
import {
  FaFacebook,
  FaXTwitter, // Nouveau logo X (ex-Twitter)
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className="bg-Lime-800 text-gray-700 pt-8 pb-4 border-t border-blue-200">
      <div className="container-custom">
        {/* Grille principale : 1 col mobile, 2 tablette, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-blue-200">
          {/* Colonne 1 : À propos / Marque */}
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

          {/* Colonne 2 : Liens utiles */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">Liens utiles</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="#products"
                  className="text-yellow-400 hover:text-blue-700 transition"
                >
                  📚 Produits
                </Link>
              </li>
              <li>
                <Link
                  href="#order"
                  className="text-yellow-400 hover:text-blue-700 transition"
                >
                  📥 Commander
                </Link>
              </li>
              <li>
                <Link
                  href="/cours"
                  className="text-yellow-400 hover:text-blue-700 transition"
                >
                  🎓 Révision Bac 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-yellow-400 hover:text-blue-700 transition"
                >
                  📖 Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-gratuits"
                  className="text-yellow-400 hover:text-blue-700 transition"
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
                  className="text-yellow-400 hover:text-blue-700 transition"
                >
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Suivez-moi (Style Flaticon avec icônes) */}
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Suivez-moi</h4>
            <div className="flex flex-wrap gap-4 text-2xl">
              <a
                href="https://www.facebook.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-yellow-400 hover:text-[#1877f2] transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-yellow-400 hover:text-[#e4405f] transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/votre-chaine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-yellow-400 hover:text-[#df1414] transition-colors duration-200"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@votre-compte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me/261322462274"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-600 hover:text-[#25d366] transition-colors duration-200"
              >
                <FaWhatsapp />
              </a>
            </div>
            {/* Petit rappel du numéro sous les icônes (optionnel) */}
            <p className="text-xs text-gray-500 mt-2">📞 +261 32 24 622 74</p>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="text-blue-800 font-semibold mb-2">Contact</h4>
            <p className="text-sm text-yellow-400">📞 +261 32 24 622 74</p>
            <p className="text-sm text-yellow-400">
              📧 darirarakotomavo@gmail.com
            </p>
            <p className="text-sm text-yellow-400">
              💬 WhatsApp : +261 32 24 622 74
            </p>
          </div>
        </div>

        {/* Bas de page : mention de mise à jour */}
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
