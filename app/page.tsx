import Header from '@/app/components/layout/Header';
import Hero from '@/app/components/layout/Hero';
import ProductCard from '@/app/components/shop/ProductCard';
import OrderSteps from '@/app/components/common/OrderSteps';
import ContactSection from '@/app/components/common/ContactSection';
import Footer from '@/app/components/layout/Footer';
import { Product } from '@/app/types';
import { connectToDatabase } from '@/app/lib/mongodb';
import { Product as ProductModel } from '@/app/models/Product';

async function getProducts(): Promise<Product[]> {
    await connectToDatabase();
    const products = await ProductModel.find({});
    return JSON.parse(JSON.stringify(products));
}

export default async function Home() {
    const products = await getProducts();

    return (
        <>
            <Header />
            <main>
                <Hero />

                {/* Section produits */}
                <section id="products" className="py-16 bg-gray-50">
                    <div className="container-custom">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
                            📚 Nos produits
                        </h2>
                        <p className="text-center text-gray-500 mb-10">
                            Cliquez sur un produit pour le commander directement sur WhatsApp
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section commande */}
                <section id="order" className="py-16 bg-white">
                    <div className="container-custom">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
                            📥 Comment commander
                        </h2>
                        <p className="text-center text-gray-500 mb-10">
                            Simple, rapide et sans carte bancaire
                        </p>
                        <OrderSteps />
                        <div className="mt-12 bg-emerald-50 rounded-xl p-6 text-center max-w-2xl mx-auto">
                            <h3 className="font-bold text-gray-800 mb-2">📱 Paiement Orange Money</h3>
                            <p className="text-2xl font-bold text-orange-500">+261 32 24 622 74</p>
                            <p className="text-sm text-gray-500 mt-2">📧 darirarakotomavo@gmail.com</p>
                            <p className="text-sm text-gray-500 mt-2">
                                💬 Ou contactez-nous sur <span className="font-semibold text-green-600">WhatsApp</span> : +261 32 24 622 74
                            </p>
                        </div>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}