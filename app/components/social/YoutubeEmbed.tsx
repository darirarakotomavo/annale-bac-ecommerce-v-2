'use client';

import { useState } from 'react';
import { Skeleton } from '@/app/components/ui/Skeleton';
import { Play } from 'lucide-react';

interface YoutubeEmbedProps {
    videoId: string;
    title?: string;
    className?: string;
}

export default function YoutubeEmbed({
    videoId,
    title = 'Vidéo',
    className = '',
}: YoutubeEmbedProps) {
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    if (!videoId) return null;

    if (!isPlaying) {
        return (
            <div
                className={`relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group ${className}`}
                onClick={() => setIsPlaying(true)}
            >
                <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover"
                    onLoad={() => setLoading(false)}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-black ${className}`}>
            {loading && <Skeleton className="absolute inset-0" />}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setLoading(false)}
            />
        </div>
    );
}