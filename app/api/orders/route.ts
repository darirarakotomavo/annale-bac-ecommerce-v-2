import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Order } from "@/app/models/Order";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();

    const order = new Order(body);
    await order.save();

    return NextResponse.json(
      {
        message: "Commande créée avec succès",
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur création commande :", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la commande" },
      { status: 500 }
    );
  }
}
