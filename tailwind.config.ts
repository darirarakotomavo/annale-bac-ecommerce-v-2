// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            spacing: {
                '0.5': '0.05rem',
                '1': '0.1rem',
                '2': '0.2rem',
                '3': '0.3rem',
                '4': '0.4rem',
                '5': '0.5rem',
                '6': '0.6rem',
                '8': '0.8rem',
                '10': '1rem',
                '12': '1.2rem',
                '16': '1.6rem',
                '20': '2rem',
                '24': '2.4rem',
                '32': '3.2rem',
                '40': '4rem',
            },
            fontSize: {
                xs: ['0.7rem', { lineHeight: '1' }],
                sm: ['0.8rem', { lineHeight: '1.1' }],
                base: ['0.9rem', { lineHeight: '1.2' }],
                lg: ['1.0rem', { lineHeight: '1.2' }],
                xl: ['1.1rem', { lineHeight: '1.2' }],
                '2xl': ['1.3rem', { lineHeight: '1.2' }],
                '3xl': ['1.6rem', { lineHeight: '1.1' }],
                '4xl': ['2.0rem', { lineHeight: '1.1' }],
                '5xl': ['2.4rem', { lineHeight: '1.1' }],
                '6xl': ['3.0rem', { lineHeight: '1.1' }],
            },
            colors: {
                primary: {
                    50: '#e8f0fe',
                    100: '#d1e0fd',
                    200: '#a3c1fb',
                    300: '#75a2f9',
                    400: '#4783f7',
                    500: '#1a64f5',
                    600: '#1550c4',
                    700: '#103c93',
                    800: '#0a2862',
                    900: '#051431',
                },
                // Ajout de couleurs de texte foncées
                text: {
                    DEFAULT: '#000000',
                    light: '#1a1a1a',
                },
            },
        },
    },
    plugins: [],
};

export default config;