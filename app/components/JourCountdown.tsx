'use client';

import { useState, useEffect } from 'react';

export default function JourCountdown() {
    const [jours, setJours] = useState<number | null>(null);

    useEffect(() => {
        const target = new Date('2026-07-20');
        const update = () => {
            const now = new Date();
            const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            setJours(diff > 0 ? diff : 0);
        };
        update();
        const interval = setInterval(update, 1000 * 60 * 60); // mise à jour toutes les heures
        return () => clearInterval(interval);
    }, []);

    if (jours === null) return <span>J-?</span>;
    return <span>J-{jours}</span>;
}