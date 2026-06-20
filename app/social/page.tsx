import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Card, CardBody } from '@/app/components/ui/Card';
import FacebookWidget from '@/app/components/social/FacebookWidget';
import InstagramWidget from '@/app/components/social/InstagramWidget';
import TikTokEmbed from '@/app/components/social/TikTokEmbed';

export default function SocialPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">📱 Suivez-moi</h1>
                    <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                        Rejoignez-moi sur mes réseaux sociaux pour ne rien manquer
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Facebook */}
                        <Card>
                            <CardBody>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">📘 Facebook</h2>
                                <FacebookWidget
                                    pageUrl="https://www.facebook.com/votre-profil"
                                    width={340}
                                    height={400}
                                />
                            </CardBody>
                        </Card>

                        {/* Instagram */}
                        <Card>
                            <CardBody>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">📸 Instagram</h2>
                                <InstagramWidget username="votre-profil" width={340} height={400} />
                            </CardBody>
                        </Card>

                        {/* TikTok - prend toute la largeur */}
                        <Card className="lg:col-span-2">
                            <CardBody>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">🎵 TikTok</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TikTokEmbed
                                        videoUrl="https://www.tiktok.com/@votre-compte/video/123456789"
                                        width={320}
                                        height={400}
                                    />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-gray-600 mb-4">
                                            📱 Suivez-moi sur TikTok pour des vidéos éducatives et des conseils.
                                        </p>
                                        <a
                                            href="https://www.tiktok.com/@votre-compte"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition text-center"
                                        >
                                            🎵 Suivre sur TikTok
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}