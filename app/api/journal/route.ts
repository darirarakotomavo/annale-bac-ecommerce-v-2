// app/api/journal/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import { JournalPost } from '@/app/models/JournalPost';

export async function GET() {
    try {
        await connectToDatabase();
        const posts = await JournalPost.find({ isPublished: true }).sort({ createdAt: -1 });
        return NextResponse.json(posts);
    } catch (errora) {
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des articles' },
            { status: 500 }
        );
    }
}