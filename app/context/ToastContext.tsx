'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Toast } from '@/app/components/ui/Toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastContextType {
    showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<{ id: number; message: string; type: ToastType; duration: number }[]>([]);
    let idCounter = 0;

    const showToast = (message: string, type: ToastType = 'info', duration = 5000) => {
        const id = idCounter++;
        setToasts((prev) => [...prev, { id, message, type, duration }]);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}