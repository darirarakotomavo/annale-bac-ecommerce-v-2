"use client";

import { Product } from "@/app/types";
import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/context/ToastContext";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";
import {
  IconMaths,
  IconPhysique,
  IconSVT,
  IconPhilosophie,
  IconFrancais,
  IconHistoireGeo,
  IconAnglais,
  IconMalagasy,
  IconEconomie,
  IconComptabilite,
  IconDroit,
  IconSES,
  IconEconomieGenerale,
  IconPack,
  IconCode,
  IconVideo,
} from "@/app/components/ui/Icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  // Sciences (Série S)
  "📐": IconMaths,
  "⚡": IconPhysique,
  "🧬": IconSVT,
  // Lettres (Série L)
  "📖": IconPhilosophie,
  "✍️": IconFrancais,
  "🌍": IconHistoireGeo,
  // Tronc commun (S, L, OSE)
  "🗣️": IconAnglais,
  "🏝️": IconMalagasy,
  "📈": IconSES,
  // Éco (Série OSE)
  "💰": IconEconomie,
  "📊": IconComptabilite,
  "⚖️": IconDroit,
  "🏛️": IconEconomieGenerale,
  // Packs / autres
  "🎯": IconPack,
  "📦": IconCode,
  "🎬": IconVideo,
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const isPopular = product.isPopular;
  const isEnseignant = product.isEnseignant;

  // WhatsApp
  const phoneNumber = "261322462274";
  const message = `Bonjour, je souhaite commander : ${product.name} (${product.price} Ar).`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const IconComponent = iconMap[product.icon] || IconMaths;

  // Ajout au panier + toast
  const handleAddToCart = () => {
    addToCart(product);
    showToast(`✅ ${product.name} ajouté au panier`, "success", 3000);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="text-5xl text-gray-700">
            <IconComponent className="w-12 h-12 text-blue-700" />
          </div>
          <div className="flex flex-wrap gap-1">
            {isPopular && <Badge variant="warning">⭐ Populaire</Badge>}
            {isEnseignant && <Badge variant="purple">👨🏫 Enseignant</Badge>}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-3">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>

        <ul className="space-y-2 mb-6">
          {product.features.map((feature, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-600 flex items-start gap-2"
            >
              <span className="text-emerald-500">✅</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          <div>
            <span className="text-2xl font-bold text-emerald-600">
              {product.price} Ariary
            </span>
            {product.pages > 0 && (
              <p className="text-xs text-gray-400">{product.pages} pages</p>
            )}
            <p className="text-xs text-orange-500 font-medium mt-1">
              💬 Prix négociable
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold transition inline-flex items-center justify-center gap-1.5 text-sm"
              aria-label={`Ajouter ${product.name} au panier`}
            >
              <ShoppingCart size={16} />
              Ajouter
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-semibold transition inline-flex items-center justify-center gap-1.5 text-sm"
              aria-label="Commander sur WhatsApp"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}