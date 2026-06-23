// app/components/JourCountdown.tsx
'use client';

import { useState, useEffect } from 'react';

export default function JourCountdown() {
    const [jours, setJours] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const target = new Date('2026-07-20');
        const update = () => {
            const now = new Date();
            const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            setJours(diff > 0 ? diff : 0);
            setLoading(false);
        };
        update();
        const interval = setInterval(update, 1000 * 60 * 60); // mise à jour toutes les heures
        return () => clearInterval(interval);
    }, []);

    if (loading) return <span>J-?</span>;
    return <span>J-{jours}</span>;
}