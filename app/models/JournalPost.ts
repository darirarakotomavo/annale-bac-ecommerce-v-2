// app/models/JournalPost.ts
import mongoose, { Schema, models } from "mongoose";

export interface IJournalPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  image?: string;
  tags: string[];
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const JournalPostSchema = new Schema<IJournalPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: "Richard RAKOTOMAVO" },
    image: { type: String },
    tags: { type: [String], default: [] },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const JournalPost =
  models.JournalPost ||
  mongoose.model<IJournalPost>("JournalPost", JournalPostSchema);
