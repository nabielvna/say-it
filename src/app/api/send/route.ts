import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export async function POST(req: NextRequest) {
  try {
    if (!API_KEY) {
      console.error("❌ ERROR: API Key tidak ditemukan!");
      return NextResponse.json({ error: "Server configuration error: Missing API Key" }, { status: 500 });
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid input: Messages array is required" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1]?.content?.trim();
    if (!lastMessage) {
      return NextResponse.json({ error: "Invalid input: Message content cannot be empty" }, { status: 400 });
    }

    console.log("📩 Sending message to Gemini:", lastMessage);

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: lastMessage }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ ERROR: Gemini API failed:", errorText);
      return NextResponse.json({ error: "Failed to fetch response from AI" }, { status: 500 });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Maaf, saya tidak mengerti.";

    console.log("📨 AI Reply:", reply);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("❌ ERROR: Server exception:", error);
    return NextResponse.json({ error: "Terjadi kesalahan pada server." }, { status: 500 });
  }
}
