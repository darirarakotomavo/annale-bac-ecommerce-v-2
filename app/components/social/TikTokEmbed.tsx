'use client';

import { useState } from 'react';
import { Skeleton } from '@/app/components/ui/Skeleton';

interface TikTokEmbedProps {
    videoUrl: string;
    width?: number;
    height?: number;
}

export default function TikTokEmbed({
    videoUrl,
    width = 340,
    height = 500,
}: TikTokEmbedProps) {
    const [loading, setLoading] = useState(true);

    return (
        <div className="flex justify-center">
            <div
                className="overflow-hidden rounded-xl shadow-md relative"
                style={{ width, height }}
            >
                {loading && (
                    <Skeleton className={`w-full h-full absolute inset-0`} />
                )}
                <iframe
                    src={videoUrl}
                    width={width}
                    height={height}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    title="TikTok Video"
                    className="w-full h-full relative z-10"
                    onLoad={() => setLoading(false)}
                />
            </div>
        </div>
    );
}