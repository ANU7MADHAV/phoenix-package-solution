import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log("email", email);
    console.log("password", password);
    if (email === process.env.EMAIL && password === process.env.PASS) {
      console.log("success");
      return NextResponse.json({ message: "Logged", success: true });
    }
    return NextResponse.json({ message: "Failed to logg" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
