import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Enrollment } from "@/app/models/Enrollment";
import { Course } from "@/app/models/Course";
import { randomBytes } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, courseSlug, amount } = body;

    await connectToDatabase();

    const course = await Course.findOne({
      slug: courseSlug,
      isPublished: true,
    });
    if (!course) {
      return NextResponse.json({ error: "Cours introuvable" }, { status: 404 });
    }

    const accessToken = randomBytes(32).toString("hex");
    const accessExpires = new Date();
    accessExpires.setMonth(accessExpires.getMonth() + 6);

    const enrollment = new Enrollment({
      email,
      phone,
      courseId: course._id,
      courseSlug: course.slug,
      amount,
      paymentMethod: "orange-money",
      paymentStatus: "pending",
      accessToken,
      accessExpires,
      progress: course.lessons.map((_: any, idx: number) => ({
        lessonIndex: idx,
        completed: false,
        quizScores: [],
      })),
    });

    await enrollment.save();

    return NextResponse.json(
      {
        message:
          "Inscription créée. Effectuez le paiement pour accéder au cours.",
        enrollment: {
          id: enrollment._id,
          accessToken,
          courseSlug: enrollment.courseSlug,
          amount: enrollment.amount,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur inscription :", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
}
