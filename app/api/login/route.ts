import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);
    return NextResponse.json({ message: data, sucess: true });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
