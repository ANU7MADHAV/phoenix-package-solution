import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

import prisma from "@/utils/db";

console.log(process.env.CLOUDINARY_CLOUD_NAME);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary configured with:", cloudinary.v2.config());

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  console.log("id", id);

  if (!id) {
    return NextResponse.json(
      { message: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch the product from the database
    const product = await prisma.machines.findUnique({
      where: { id: id },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    console.log("product", product);

    // Delete the file from Cloudinary
    const cloudinaryResponse = await cloudinary.v2.uploader.destroy(
      product.public_id
    );

    console.log(cloudinaryResponse);

    if (cloudinaryResponse.result !== "ok") {
      return NextResponse.json(
        { message: "Failed to delete image from Cloudinary" },
        { status: 500 }
      );
    }

    // Delete the product from Prisma
    await prisma.machines.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
