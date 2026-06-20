import mongoose, { Schema, models } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  phone: string;
  password?: string;
  role: "student" | "teacher" | "admin";
  facebookId?: string;
  googleId?: string;
  coursesEnrolled: string[];
  isVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    facebookId: { type: String },
    googleId: { type: String },
    coursesEnrolled: { type: [String], default: [] },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = models.User || mongoose.model<IUser>("User", UserSchema);
