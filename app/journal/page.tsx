// app/journal/[slug]/page.tsx
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectToDatabase } from '@/app/lib/mongodb';
import { JournalPost, IJournalPost } from '@/app/models/JournalPost';
import { Card, CardBody } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { ArrowLeft } from 'lucide-react';

async function getPost(slug: string): Promise<IJournalPost | null> {
    await connectToDatabase();
    const post = await JournalPost.findOne({ slug, isPublished: true });
    return post ? JSON.parse(JSON.stringify(post)) : null;
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
    // ✅ Désormais, params est une Promise – on doit la résoudre avec await
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // Convertir le contenu markdown en HTML simple
    const contentHtml = post.content
        .split('\n')
        .map((line: string) => {
            if (line.startsWith('# ')) return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${line.slice(2)}</h1>`;
            if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold text-gray-800 mt-6 mb-3">${line.slice(3)}</h2>`;
            if (line.startsWith('### ')) return `<h3 class="text-xl font-bold text-gray-800 mt-5 mb-2">${line.slice(4)}</h3>`;
            if (line.startsWith('- ')) return `<li class="ml-4 text-gray-600">${line.slice(2)}</li>`;
            if (line.trim() === '') return '<br/>';
            return `<p class="text-gray-600 leading-relaxed mb-3">${line}</p>`;
        })
        .join('');

    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <Link
                        href="/journal"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition mb-6"
                    >
                        <ArrowLeft size={18} /> Retour au journal
                    </Link>

                    <Card>
                        <CardBody>
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag: string) => (
                                        <Badge key={tag} variant="default">#{tag}</Badge>
                                    ))}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
                                <p className="text-sm text-gray-400">
                                    Par {post.author} – {new Date(post.createdAt as Date).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>

                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500">
                                    💬 Partagez cet article avec vos camarades !
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