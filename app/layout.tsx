import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/app/context/CartContext';
import { ToastProvider } from '@/app/context/ToastContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://annale-bac-ecommerce-v-2.vercel.app'),
    title: 'Annales Bac S 2025 - Corrigés Madagascar',
    description: 'Corrigés complets des épreuves du Bac Madagascar - Série Scientifique 2025. Formations en ligne, cours, vidéos et PDF.',
    keywords: 'Bac Madagascar, Corrigés, Maths, Physique, Informatique, Formation',
    authors: [{ name: 'Richard RAKOTOMAVO' }],
    openGraph: {
        title: 'Annales Bac S 2025 - Corrigés Madagascar',
        description: 'Corrigés complets des épreuves du Bac Madagascar - Série Scientifique 2025.',
        url: 'https://annale-bac-ecommerce-v-2.vercel.app',
        siteName: 'Annales Bac S 2025',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Annales Bac S 2025 - Corrigés Madagascar',
        description: 'Corrigés complets des épreuves du Bac Madagascar - Série Scientifique 2025.',
        images: ['/images/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" data-scroll-behavior="smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={inter.className}>
                <ToastProvider>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </ToastProvider>
            </body>
        </html>
    );
}