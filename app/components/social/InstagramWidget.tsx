'use client';

import { useState, useEffect } from 'react';
import { Skeleton } from '@/app/components/ui/Skeleton';

interface InstagramWidgetProps {
    username: string;
    width?: number;
    height?: number;
}

export default function InstagramWidget({
    username = 'votre-profil',
    width = 340,
    height = 450,
}: InstagramWidgetProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Skeleton className={`w-[${width}px] h-[${height}px] rounded-xl`} />;
    }

    return (
        <div className="flex justify-center">
            <div
                className="overflow-hidden rounded-xl shadow-md"
                style={{ width, height }}
            >
                <iframe
                    src={`https://www.instagram.com/${username}/embed/`}
                    width={width}
                    height={height}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    title="Instagram Feed"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}