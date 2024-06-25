import uploadToCloudinary from "@/helper/cloudinary.upload";
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // your auth check here if required

  const formData = await req.formData();

  console.log("formData", formData);

  const file = formData.get("file") as File;
  const productName = formData.get("productname") as string;

  console.log("product", productName);

  const fileBuffer = await file.arrayBuffer();

  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");

  // this will be used to upload the file
  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

  const res = await uploadToCloudinary(fileUri, file.name);
  console.log("res", res);

  if (res.success && res.result) {
    const product = await prisma.product.create({
      data: {
        name: productName,
        imageUrl: res.result.url,
      },
    });
    return NextResponse.json({
      message: "success",
      product,
    });
  } else return NextResponse.json({ message: "failure" });
}
