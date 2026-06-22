'use client';

import { useEffect, useRef } from 'react';

// ✅ Type spécifique pour le SDK Facebook
interface FacebookSDK {
    XFBML: {
        parse: (element: HTMLElement) => void;
    };
}

interface FacebookWidgetProps {
    pageUrl: string;
    width?: number;
    height?: number;
    tabs?: 'timeline' | 'events' | 'messages';
    smallHeader?: boolean;
    adaptContainerWidth?: boolean;
    hideCover?: boolean;
    showFacepile?: boolean;
}

export default function FacebookWidget({
    pageUrl = 'https://www.facebook.com/votre-profil',
    width = 340,
    height = 500,
    tabs = 'timeline',
    smallHeader = false,
    adaptContainerWidth = true,
    hideCover = false,
    showFacepile = true,
}: FacebookWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Charger le SDK Facebook
        if (typeof window !== 'undefined' && !document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v19.0';
            document.head.appendChild(script);
        }

        // ✅ Utilisation du type FacebookSDK
        const fb = (window as Window & { FB?: FacebookSDK }).FB;
        if (fb && containerRef.current) {
            fb.XFBML.parse(containerRef.current);
        }
    }, []);

    return (
        <div ref={containerRef} className="flex justify-center">
            <div
                className="fb-page"
                data-href={pageUrl}
                data-tabs={tabs}
                data-width={width}
                data-height={height}
                data-small-header={smallHeader}
                data-adapt-container-width={adaptContainerWidth}
                data-hide-cover={hideCover}
                data-show-facepile={showFacepile}
            />
        </div>
    );
}