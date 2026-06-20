import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { Card, CardBody } from '@/app/components/ui/Card';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">📖 À propos</h1>

                    <Card>
                        <CardBody className="space-y-6">
                            <div className="text-center">
                                <div className="text-8xl mb-4">👨‍🏫</div>
                                <h2 className="text-2xl font-bold text-gray-800">Richard RAKOTOMAVO</h2>
                                <p className="text-gray-500">Professeur - Autodidacte - Passionné d'éducation</p>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">🎯 Ma mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Je crée des ressources pédagogiques de qualité pour aider les élèves malgaches à réussir
                                    leurs examens et à développer leurs compétences en informatique.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">📚 Ce que je propose</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>✅ Corrigés détaillés du Bac Madagascar</li>
                                    <li>✅ Cours d'informatique (Word, Excel, programmation)</li>
                                    <li>✅ Vidéos YouTube pour apprendre à son rythme</li>
                                    <li>✅ Accompagnement personnalisé</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">💡 Pourquoi moi ?</h3>
                                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                                    <li>Autodidacte, je comprends les difficultés d'apprentissage</li>
                                    <li>Des contenus adaptés au contexte malgache</li>
                                    <li>Prix négociables pour rendre l'éducation accessible</li>
                                    <li>Paiement Orange Money, simple et sécurisé</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                                <p className="text-gray-700 font-medium">
                                    💬 Une question ? Contactez-moi sur WhatsApp ou par email.
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    📞 +261 32 24 622 74 &nbsp;|&nbsp; 📧 darirarakotomavo@gmail.com
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer />
        </>
    );
}