import mongoose, { Schema, models } from "mongoose";

export interface IProduct {
  id: string;
  name: string;
  subject: string;
  description: string;
  price: number;
  pages: number;
  icon: string;
  features: string[];
  isPopular?: boolean;
  isEnseignant?: boolean;
  videoUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    pages: { type: Number, default: 0 },
    icon: { type: String, default: "📦" },
    features: { type: [String], default: [] },
    isPopular: { type: Boolean, default: false },
    isEnseignant: { type: Boolean, default: false },
    videoUrl: { type: String },
  },
  { timestamps: true }
);

export const Product =
  models.Product || mongoose.model<IProduct>("Product", ProductSchema);
