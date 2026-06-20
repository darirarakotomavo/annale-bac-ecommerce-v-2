'use client';

import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Button } from '@/app/components/ui/Button';
import { Card, CardBody } from '@/app/components/ui/Card';
import { Trash2, ShoppingBag, Minus, Plus } from 'lucide-react';

export default function PanierPage() {
    const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

    if (cart.length === 0) {
        return (
            <>
                <Header />
                <main className="min-h-screen py-16 bg-gray-50">
                    <div className="container-custom max-w-4xl text-center">
                        <div className="text-8xl mb-6">🛒</div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
                        <p className="text-gray-500 mb-8">Explorez nos produits et ajoutez ce qui vous intéresse.</p>
                        <Link href="/#products" className="btn-primary inline-block">
                            📚 Voir les produits
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const phoneNumber = '261322462274';
    const message = `Bonjour, je souhaite commander les produits suivants :\n${cart.map(item => `- ${item.name} (${item.quantity}x) : ${item.price * item.quantity} €`).join('\n')}\nTotal : ${getTotalPrice()} €`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <ShoppingBag size={32} /> Votre panier
                        <span className="text-sm font-normal text-gray-500">({getTotalItems()} articles)</span>
                    </h1>

                    <Card>
                        <CardBody className="p-0">
                            <ul className="divide-y divide-gray-200">
                                {cart.map((item) => (
                                    <li key={item.id} className="p-6 flex flex-wrap items-center justify-between gap-4 hover:bg-gray-50 transition">
                                        <div className="flex items-center gap-4">
                                            <span className="text-3xl">{item.icon}</span>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.price} €</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 rounded-full hover:bg-gray-200 transition"
                                                    aria-label="Diminuer"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 rounded-full hover:bg-gray-200 transition"
                                                    aria-label="Augmenter"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                            <span className="font-bold text-emerald-600 min-w-[60px] text-right">
                                                {item.price * item.quantity} €
                                            </span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700 transition p-1"
                                                aria-label="Supprimer"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardBody>
                    </Card>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-gray-600">
                                Total : <span className="font-bold text-2xl text-emerald-600">{getTotalPrice()} €</span>
                            </p>
                            <p className="text-sm text-gray-500">{getTotalItems()} article(s)</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="danger" size="sm" onClick={clearCart}>
                                Vider
                            </Button>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow hover:shadow-lg inline-flex items-center gap-2"
                            >
                                💬 Commander sur WhatsApp
                            </a>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">
                        💡 Vous pouvez négocier le prix directement sur WhatsApp.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}