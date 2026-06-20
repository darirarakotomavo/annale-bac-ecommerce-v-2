import mongoose, { Schema, models } from "mongoose";

export interface IEnrollment {
  userId?: string;
  email: string;
  phone: string;
  courseId: string;
  courseSlug: string;
  amount: number;
  paymentMethod: "orange-money";
  paymentStatus: "pending" | "paid" | "failed";
  accessToken: string;
  accessExpires: Date;
  progress: {
    lessonIndex: number;
    completed: boolean;
    quizScores: number[];
  }[];
  completedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProgressSchema = new Schema({
  lessonIndex: { type: Number },
  completed: { type: Boolean, default: false },
  quizScores: { type: [Number], default: [] },
});

const EnrollmentSchema = new Schema<IEnrollment>(
  {
    userId: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    courseId: { type: String, required: true },
    courseSlug: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["orange-money"], required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    accessToken: { type: String, required: true, unique: true },
    accessExpires: { type: Date, required: true },
    progress: { type: [ProgressSchema], default: [] },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

export const Enrollment =
  models.Enrollment ||
  mongoose.model<IEnrollment>("Enrollment", EnrollmentSchema);
