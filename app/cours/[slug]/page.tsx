import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { notFound } from 'next/navigation';
import { Card, CardBody } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { connectToDatabase } from '@/app/lib/mongodb';
import { Course } from '@/app/models/Course';
import { Course as CourseType, Lesson } from '@/app/types';
import YoutubeEmbed from '@/app/components/social/YoutubeEmbed';

async function getCourse(slug: string): Promise<CourseType | null> {
    await connectToDatabase();
    const course = await Course.findOne({ slug, isPublished: true });
    return course ? JSON.parse(JSON.stringify(course)) : null;
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
    const course = await getCourse(params.slug);

    if (!course) {
        notFound();
    }

    const phoneNumber = '261322462274';
    const message = `Bonjour, je souhaite m'inscrire au cours : ${course.title} (${course.price} €).`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom max-w-5xl">
                    {/* En-tête */}
                    <Card className="mb-8">
                        <CardBody className="p-8">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <Badge variant="info">{course.category}</Badge>
                                        <Badge
                                            variant={
                                                course.level === 'debutant'
                                                    ? 'success'
                                                    : course.level === 'intermediaire'
                                                    ? 'warning'
                                                    : course.level === 'avance'
                                                    ? 'danger'
                                                    : 'info'
                                            }
                                        >
                                            {course.level}
                                        </Badge>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{course.title}</h1>
                                    <p className="text-gray-500 mt-2 text-lg">{course.description}</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg min-w-[180px] text-center">
                                    <p className="text-sm text-gray-500">Prix</p>
                                    <p className="text-2xl font-bold text-emerald-600">{course.price} €</p>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition w-full text-center"
                                    >
                                        💬 S&apos;inscrire
                                    </a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Contenu */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            {course.videoUrl && (
                                <Card>
                                    <CardBody>
                                        <YoutubeEmbed videoId={course.videoUrl} title={course.title} />
                                    </CardBody>
                                </Card>
                            )}

                            {course.objectives && course.objectives.length > 0 && (
                                <Card>
                                    <CardBody>
                                        <h2 className="text-xl font-bold text-gray-800 mb-3">🎯 Objectifs</h2>
                                        <ul className="space-y-2">
                                            {course.objectives.map((obj: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-600">
                                                    <span className="text-emerald-500">✅</span>
                                                    {obj}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardBody>
                                </Card>
                            )}

                            {course.lessons && course.lessons.length > 0 && (
                                <Card>
                                    <CardBody>
                                        <h2 className="text-xl font-bold text-gray-800 mb-3">📚 Contenu du cours</h2>
                                        <p className="text-sm text-gray-500 mb-4">
                                            {course.lessons.length} leçons • {course.duration}h
                                        </p>
                                        <div className="space-y-3">
                                            {course.lessons.map((lesson: Lesson, idx: number) => (
                                                <div
                                                    key={idx}
                                                    className="border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <h4 className="font-medium text-gray-800">
                                                                {idx + 1}. {lesson.title}
                                                            </h4>
                                                            {lesson.duration && (
                                                                <p className="text-xs text-gray-400">
                                                                    {lesson.duration} min
                                                                </p>
                                                            )}
                                                        </div>
                                                        <div className="flex gap-2">
                                                            {lesson.videoUrl && (
                                                                <Badge variant="info">🎬 Vidéo</Badge>
                                                            )}
                                                            {lesson.quiz && lesson.quiz.length > 0 && (
                                                                <Badge variant="warning">📝 Quiz</Badge>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardBody>
                                </Card>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {course.prerequisites && course.prerequisites.length > 0 && (
                                <Card>
                                    <CardBody>
                                        <h3 className="font-bold text-gray-800 mb-2">📋 Prérequis</h3>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            {course.prerequisites.map((pre: string, idx: number) => (
                                                <li key={idx}>• {pre}</li>
                                            ))}
                                        </ul>
                                    </CardBody>
                                </Card>
                            )}

                            <Card>
                                <CardBody>
                                    <h3 className="font-bold text-gray-800 mb-2">👨‍🏫 À propos du formateur</h3>
                                    <p className="text-sm text-gray-600">
                                        Professeur licencié en Sciences Physiques, autodidacte en informatique et
                                        développement. Plus de 70 ans d&apos;expérience et de passion pour
                                        l&apos;éducation.
                                    </p>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody className="text-center">
                                    <p className="text-sm text-gray-500 mb-2">Prêt à commencer ?</p>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition w-full"
                                    >
                                        💬 S&apos;inscrire maintenant
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}