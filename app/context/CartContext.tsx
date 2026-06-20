'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '@/app/types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

// ✅ Déclaration du contexte AVANT le provider
const CartContext = createContext<CartContextType | undefined>(undefined);

// Charger le panier depuis localStorage
const loadCartFromStorage = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    try {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(loadCartFromStorage);

    const updateCart = (newCart: CartItem[]) => {
        setCart(newCart);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    const addToCart = (product: Omit<CartItem, 'quantity'>) => {
        const prev = cart;
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
            updateCart(prev.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            updateCart([...prev, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: string) => {
        updateCart(cart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        updateCart(cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => updateCart([]);

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotalPrice,
                getTotalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}