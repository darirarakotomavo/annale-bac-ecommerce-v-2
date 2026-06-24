// app/page.tsx
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import ProductCard from "@/app/components/shop/ProductCard";
import OrderSteps from "@/app/components/common/OrderSteps";
import ContactSection from "@/app/components/common/ContactSection";
import Footer from "@/app/components/layout/Footer";
import { Product } from "@/app/types";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Product as ProductModel } from "@/app/models/Product";
import Link from "next/link";

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

        {/* Section des deux piliers : Cours de révision Bac 2026 et Annales Bac 2025 */}
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-primary-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
                <div className="text-5xl mb-2">🎓</div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Cours de révision Bac 2026
                </h2>
                <p className="text-gray-600 mt-1 text-sm">Série L et S</p>
                <p className="text-xs text-gray-500">
                  Préparez-vous intensivement
                </p>
                <Link
                  href="/cours"
                  className="mt-3 inline-block bg-primary-200 hover:bg-yellow-300 text-white px-4 py-1 rounded-lg font-semibold text-sm transition"
                >
                  Accéder →
                </Link>
              </div>
              <div className="bg-yellow-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
                <div className="text-5xl mb-2">📚</div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Annales Bac 2025
                </h2>
                <p className="text-gray-600 mt-1 text-sm">
                  Toutes matières - Séries S et L
                </p>
                <p className="text-xs text-gray-500">Sujets + Corrigés</p>
                <Link
                  href="/pdf-gratuits"
                  className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg font-semibold text-sm transition"
                >
                  Voir →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section produits */}
        <section id="products" className="py-8 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-2">
              📚 Nos produits
            </h2>
            <p className="text-center text-gray-500 text-sm mb-6">
              Cliquez pour commander sur WhatsApp
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="order" className="py-8 bg-white">
          <div className="container-custom">
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-2">
              📥 Comment commander
            </h2>
            <p className="text-center text-gray-500 text-sm mb-6">
              Simple, rapide et sans carte bancaire
            </p>
            <OrderSteps />
            <div className="mt-6 bg-emerald-50 rounded-xl p-4 text-center max-w-2xl mx-auto">
              <h3 className="font-bold text-gray-800 text-sm">
                📱 Paiement Orange Money
              </h3>
              <p className="text-lg font-bold text-orange-500">
                +261 32 24 622 74
              </p>
              <p className="text-xs text-gray-500">
                📧 darirarakotomavo@gmail.com
              </p>
              <p className="text-xs text-gray-500">
                💬 WhatsApp : +261 32 24 622 74
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
