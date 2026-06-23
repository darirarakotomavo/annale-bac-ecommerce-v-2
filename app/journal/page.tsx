// app/journal/page.tsx
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import { connectToDatabase } from "@/app/lib/mongodb";
import { JournalPost, IJournalPost } from "@/app/models/JournalPost";
import { Card, CardBody } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";

async function getPosts(): Promise<IJournalPost[]> {
  await connectToDatabase();
  const posts = await JournalPost.find({ isPublished: true }).sort({
    createdAt: -1,
  });
  return JSON.parse(JSON.stringify(posts));
}

export default async function JournalPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen py-16 bg-gray-50">
        {/* ✅ max-w-6xl au lieu de max-w-4xl + px-2 pour réduire les marges */}
        <div className="container-custom max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📖 Journal des Révisions
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Des conseils, des astuces et des réflexions pour vous accompagner
              dans votre préparation au Bac 2026.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              📝 {posts.length} articles publiés
            </div>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              Aucun article disponible pour le moment.
            </p>
          ) : (
            <div className="space-y-8">
              {posts.map((post: IJournalPost) => (
                <Link href={`/journal/${post.slug}`} key={post.slug}>
                  <Card hover>
                    <CardBody>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-3">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag: string) => (
                              <Badge key={tag} variant="default">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap">
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleDateString(
                                "fr-FR",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                },
                              )
                            : "Date inconnue"}
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-primary-600 font-medium">
                        Lire la suite →
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-800 mb-2">
              💬 Rejoignez la communauté
            </h3>
            <p className="text-sm text-gray-600">
              Partagez vos questions et vos progrès sur mes réseaux sociaux.
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <a
                href="https://www.facebook.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                📘 Facebook
              </a>
              <a
                href="https://www.instagram.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                📸 Instagram
              </a>
              <a
                href="https://wa.me/261322462274"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
