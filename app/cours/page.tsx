import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Link from 'next/link';
import { Card, CardBody } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { connectToDatabase } from '@/app/lib/mongodb';
import { Course } from '@/app/models/Course';

async function getCourses() {
    await connectToDatabase();
    const courses = await Course.find({ isPublished: true }).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(courses));
}

export default async function CoursesPage() {
    const courses = await getCourses();

    const categories = [
        { id: 'informatique', label: '💻 Informatique', color: 'bg-blue-100 text-blue-800' },
        { id: 'mathematiques', label: '📐 Mathématiques', color: 'bg-green-100 text-green-800' },
        { id: 'physique-chimie', label: '⚗️ Physique-Chimie', color: 'bg-purple-100 text-purple-800' },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen py-16 bg-gray-50">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">🎓 Formations en ligne</h1>
                    <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                        Des cours structurés, accessibles et adaptés à votre niveau. Apprenez à votre rythme avec des PDF, vidéos et codes sources.
                    </p>

                    {/* Filtres */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <Link href="/cours" className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition">
                            Tous
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/cours?categorie=${cat.id}`}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition hover:opacity-80 ${cat.color}`}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </div>

                    {courses.length === 0 ? (
                        <p className="text-center text-gray-500">Aucun cours disponible pour le moment.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((course: any) => {
                                const priceDisplay = course.discountPrice
                                    ? (
                                        <>
                                            <span className="line-through text-gray-400 mr-2">{course.price} €</span>
                                            <span className="font-bold text-emerald-600">{course.discountPrice} €</span>
                                        </>
                                    )
                                    : <span className="font-bold text-emerald-600">{course.price} €</span>;

                                return (
                                    <Link href={`/cours/${course.slug}`} key={course._id}>
                                        <Card hover>
                                            <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl">
                                                {course.category === 'informatique' && '💻'}
                                                {course.category === 'mathematiques' && '📐'}
                                                {course.category === 'physique-chimie' && '⚗️'}
                                            </div>
                                            <CardBody>
                                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                    <Badge variant={
                                                        course.level === 'debutant' ? 'success' :
                                                        course.level === 'intermediaire' ? 'warning' :
                                                        course.level === 'avance' ? 'danger' : 'info'
                                                    }>
                                                        {course.level}
                                                    </Badge>
                                                    <Badge variant="default">{course.duration}h</Badge>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{course.title}</h3>
                                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className="text-lg font-bold">{priceDisplay}</span>
                                                    <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                                        {course.studentsCount || 0} étudiants
                                                    </span>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
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