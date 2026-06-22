// app/components/courses/CourseCard.tsx
import Link from 'next/link';
import { Card, CardBody } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';

interface CourseCardProps {
    course: {
        _id: string;
        title: string;
        slug: string;
        category: string;
        level: 'debutant' | 'intermediaire' | 'avance' | 'expert';
        description: string;
        price: number;
        discountPrice?: number;
        duration: number;
        studentsCount: number;
        image?: string;
    };
}

export default function CourseCard({ course }: CourseCardProps) {
    const levelVariant = {
        debutant: 'success',
        intermediaire: 'warning',
        avance: 'danger',
        expert: 'info',
    } as const;

    const categoryEmoji: Record<string, string> = {
        informatique: '💻',
        mathematiques: '📐',
        'physique-chimie': '⚗️',
        autre: '📚',
    };

    return (
        <Link href={`/cours/${course.slug}`}>
            <Card hover>
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl">
                    {categoryEmoji[course.category] || '📚'}
                </div>
                <CardBody>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant={levelVariant[course.level] || 'default'}>
                            {course.level}
                        </Badge>
                        <Badge variant="default">{course.duration}h</Badge>
                        <Badge variant="success">🎁 Gratuit</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                        <div>
                            <span className="text-sm line-through text-gray-400 mr-2">{course.price} €</span>
                            <span className="text-lg font-bold text-emerald-600">0 €</span>
                        </div>
                        <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            {course.studentsCount || 0} étudiants
                        </span>
                    </div>
                </CardBody>
            </Card>
        </Link>
    );
}