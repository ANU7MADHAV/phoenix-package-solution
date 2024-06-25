import uploadToCloudinary from "@/helper/cloudinary.upload";
import { NextRequest, NextResponse } from "next/server";
import primsa from "@/utils/db";
import prisma from "@/utils/db";

export async function POST(req: NextRequest) {
  console.log("hitted");
  // your auth check here if required

  const formData = await req.formData();
  console.log(formData);
  const file = formData.get("file") as File;

  const fileBuffer = await file.arrayBuffer();

  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");

  // this will be used to upload the file
  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

  const res = await uploadToCloudinary(fileUri, file.name);
  console.log(res);

  if (res.success && res.result) {
    // const product = await prisma.product.create({
    //     name :
    // })
    return NextResponse.json({
      message: "success",
      imgUrl: res.result.secure_url,
    });
  } else return NextResponse.json({ message: "failure" });
}
