import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Card, CardBody } from '@/app/components/ui/Card';
import { connectToDatabase } from '@/app/lib/mongodb';
import { Product } from '@/app/models/Product'; // ✅ Import du modèle
import { Product as ProductType } from '@/app/types'; // ✅ Import du type
import YoutubeEmbed from '@/app/components/social/YoutubeEmbed';

async function getVideoProducts() {
    await connectToDatabase();
    const products = await Product.find({ videoUrl: { $exists: true, $ne: '' } });
    return JSON.parse(JSON.stringify(products));
}

export default async function VideosPage() {
    const videos = await getVideoProducts();

    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">🎬 Nos vidéos</h1>
                    <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                        Des cours vidéo pour apprendre à votre rythme, où que vous soyez.
                    </p>

                    {videos.length === 0 ? (
                        <p className="text-center text-gray-500">Aucune vidéo disponible pour le moment.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {videos.map((video: ProductType) => { // ✅ Typage correct
                                const videoId = video.videoUrl?.split('embed/')[1] || video.videoUrl?.split('v=')[1];
                                return (
                                    <Card key={video._id} hover>
                                        <YoutubeEmbed videoId={videoId || ''} title={video.name} />
                                        <CardBody>
                                            <h3 className="font-bold text-lg text-gray-800">{video.name}</h3>
                                            <p className="text-sm text-gray-500">{video.description}</p>
                                            <p className="text-sm font-bold text-emerald-600 mt-2">{video.price} €</p>
                                        </CardBody>
                                    </Card>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}