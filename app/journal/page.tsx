// 📁 app/journal/page.tsx – Version ultra-compacte, contrastes renforcés
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
      <main className="min-h-screen py-8 bg-sky-50">
        <div className="container-custom max-w-6xl mx-auto px-3 md:px-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-sky-900 mb-1">
              📖 Journal des Révisions
            </h1>
            <p className="text-xs text-sky-700 max-w-2xl mx-auto">
              Des conseils, des astuces et des réflexions pour vous accompagner
              dans votre préparation au Bac 2026.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 bg-cyan-400 text-olive-950 px-2.5 py-0.5 rounded-full text-[10px] font-medium">
              📝 {posts.length} articles publiés
            </div>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-sky-700 text-sm">
              Aucun article disponible pour le moment.
            </p>
          ) : (
            <div className="space-y-4">
              {posts.map((post: IJournalPost) => (
                <Link href={`/journal/${post.slug}`} key={post.slug}>
                  <Card hover>
                    <CardBody className="px-3 py-2">
                      <div className="flex flex-wrap items-start justify-between gap-1">
                        <div className="flex-1">
                          <h2 className="text-lg font-bold text-sky-900 mb-0.5 leading-tight">
                            {post.title}
                          </h2>
                          <p className="text-xs text-sky-800 mb-1.5 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-0.5">
                            {post.tags.map((tag: string) => (
                              <Badge
                                key={tag}
                                variant="default"
                                className="text-[10px] px-1.5 py-0.5"
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-[10px] text-sky-600 whitespace-nowrap">
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleDateString(
                                "fr-FR",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                },
                              )
                            : "Date inconnue"}
                        </div>
                      </div>
                      <div className="mt-1.5 text-xs text-primary-600 font-medium">
                        Lire la suite →
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-6 bg-primary-50 border border-primary-200 rounded-xl p-4 text-center">
            <h3 className="font-bold text-sky-900 text-xs mb-0.5">
              💬 Rejoignez la communauté
            </h3>
            <p className="text-[10px] text-sky-800">
              Partagez vos questions et vos progrès sur mes réseaux sociaux.
            </p>
            <div className="flex justify-center gap-2 mt-1.5 text-xs">
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
