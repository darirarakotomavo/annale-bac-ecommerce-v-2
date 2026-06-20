import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Link from 'next/link';
import { Card, CardBody } from '@/app/components/ui/Card';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom max-w-2xl">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">📞 Contact</h1>
                    <p className="text-center text-gray-500 mb-8">Pour toute question ou commande, contactez-moi</p>

                    <Card>
                        <CardBody className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">📱 Orange Money</h2>
                                <p className="text-2xl font-bold text-orange-500">+261 32 24 622 74</p>
                            </div>

                            <div className="text-center border-t border-gray-100 pt-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">📧 Email</h2>
                                <p className="text-lg text-gray-600">darirarakotomavo@gmail.com</p>
                            </div>

                            <div className="text-center border-t border-gray-100 pt-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">🔒 GitHub</h2>
                                <p className="text-sm text-gray-500">Dépôt privé - Accès après achat</p>
                                <Link
                                    href="https://github.com/darirarakotomavo/annales-bac-S-madagsikara-2025"
                                    target="_blank"
                                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-block mt-1"
                                >
                                    Voir le dépôt →
                                </Link>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mt-4">
                                <p className="text-sm text-gray-400 text-center">Réponse dans les 24h</p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer />
        </>
    );
}