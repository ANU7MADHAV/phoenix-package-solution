import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const getMachineProducts = await prisma.machines.findMany();
  console.log("products", getMachineProducts);

  return NextResponse.json({ getMachineProducts });
}
