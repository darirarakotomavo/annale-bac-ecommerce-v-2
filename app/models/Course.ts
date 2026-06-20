import mongoose, { Schema, models } from "mongoose";

export interface ICourse {
  title: string;
  slug: string;
  category: "informatique" | "mathematiques" | "physique-chimie" | "autre";
  level: "debutant" | "intermediaire" | "avance" | "expert";
  description: string;
  objectives: string[];
  prerequisites: string[];
  price: number;
  discountPrice?: number;
  image?: string;
  videoUrl?: string;
  lessons: {
    title: string;
    duration?: number;
    content: string;
    videoUrl?: string;
    resources?: string[];
    quiz?: {
      question: string;
      options: string[];
      correctAnswer: number;
    }[];
  }[];
  duration: number;
  studentsCount: number;
  rating: number;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const LessonSchema = new Schema({
  title: { type: String, required: true },
  duration: { type: Number },
  content: { type: String },
  videoUrl: { type: String },
  resources: { type: [String] },
  quiz: [
    {
      question: { type: String },
      options: { type: [String] },
      correctAnswer: { type: Number },
    },
  ],
});

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
      type: String,
      enum: ["informatique", "mathematiques", "physique-chimie", "autre"],
      required: true,
    },
    level: {
      type: String,
      enum: ["debutant", "intermediaire", "avance", "expert"],
      default: "debutant",
    },
    description: { type: String, required: true },
    objectives: { type: [String], default: [] },
    prerequisites: { type: [String], default: [] },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    image: { type: String },
    videoUrl: { type: String },
    lessons: { type: [LessonSchema], default: [] },
    duration: { type: Number, default: 0 },
    studentsCount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Course =
  models.Course || mongoose.model<ICourse>("Course", CourseSchema);
