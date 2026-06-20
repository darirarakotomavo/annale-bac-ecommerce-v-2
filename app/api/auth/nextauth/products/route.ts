import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Product } from "@/app/models/Product";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.error("Erreur API produits :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des produits" },
      { status: 500 }
    );
  }
}
