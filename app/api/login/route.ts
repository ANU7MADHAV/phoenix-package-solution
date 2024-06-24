import generateToken from "@/utils/generateToken";
import { Token } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log("email", email);
    console.log("password", password);
    if (email === process.env.EMAIL && password === process.env.PASS) {
      const token = generateToken(email);
      console.log(token);
      return NextResponse.json({ message: "Logged in", success: true, token });
    }

    return NextResponse.json({ message: "Failed to login" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
