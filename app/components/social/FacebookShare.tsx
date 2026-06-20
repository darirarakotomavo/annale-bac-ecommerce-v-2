'use client';

import { Button } from '@/app/components/ui/Button';
import { Facebook } from 'lucide-react';

interface FacebookShareProps {
    url?: string;
    quote?: string;
    hashtag?: string;
    className?: string;
}

export default function FacebookShare({
    url = typeof window !== 'undefined' ? window.location.href : '',
    quote = '📚 Découvrez ces ressources éducatives de qualité !',
    hashtag = 'AnnalesBacMadagascar',
    className = '',
}: FacebookShareProps) {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}&hashtag=${encodeURIComponent(hashtag)}`;

    const handleShare = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes');
    };

    return (
        <Button
            variant="facebook"
            className={className}
            onClick={handleShare}
        >
            <Facebook size={18} /> Partager
        </Button>
    );
}