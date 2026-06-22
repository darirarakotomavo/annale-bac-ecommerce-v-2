'use client';

import { Product } from '@/app/types';
import { useCart } from '@/app/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { Badge } from '@/app/components/ui/Badge';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const isPopular = product.isPopular;
    const isEnseignant = product.isEnseignant;

    const phoneNumber = '261322462274';
    const message = `Bonjour, je souhaite commander : ${product.name} (${product.price} €).`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="text-5xl">{product.icon}</div>
                    <div className="flex flex-wrap gap-1">
                        {isPopular && <Badge variant="warning">⭐ Populaire</Badge>}
                        {isEnseignant && <Badge variant="purple">👨‍🏫 Enseignant</Badge>}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-3">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>

                <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-emerald-500">✅</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3">
                    <div className="flex items-end justify-between">
                        <div>
                            <span className="text-2xl font-bold text-emerald-600">{product.price} €</span>
                            {product.pages > 0 && (
                                <p className="text-xs text-gray-400">{product.pages} pages</p>
                            )}
                            <p className="text-xs text-orange-500 font-medium mt-1">💬 Prix négociable</p>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => addToCart(product)}
                                className="flex items-center gap-1"
                            >
                                <ShoppingCart size={16} /> Ajouter
                            </Button>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-semibold transition flex items-center gap-1 text-sm"
                            >
                                💬
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}