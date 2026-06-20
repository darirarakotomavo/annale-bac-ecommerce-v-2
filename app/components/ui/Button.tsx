'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
                secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
                outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
                success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
                danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
                whatsapp: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
                facebook: 'bg-[#1877f2] text-white hover:bg-[#0d65d9] focus:ring-[#1877f2]',
                instagram: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f56040] text-white hover:opacity-90',
                ghost: 'hover:bg-gray-100 text-gray-700',
            },
            size: {
                sm: 'px-3 py-1.5 text-sm',
                md: 'px-4 py-2 text-base',
                lg: 'px-6 py-3 text-lg',
                icon: 'p-2',
            },
            fullWidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
    children: React.ReactNode;
}

export function Button({ className, variant, size, fullWidth, isLoading, children, disabled, ...props }: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size, fullWidth, className }))}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
}