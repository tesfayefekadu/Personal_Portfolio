import OpenAI from "openai";
import { NextResponse } from "next/server";

const openrouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://personal-portfolio-rho-three-90.vercel.app",
    "X-Title": "Tesfaye Fekadu Portfolio",
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
const messages = body.messages;

if (!Array.isArray(messages)) {
  return NextResponse.json(
    { error: "Messages are required." },
    { status: 400 }
  );
}

if (messages.length > 20) {
  return NextResponse.json(
    { error: "Conversation is too long. Please clear the chat and try again." },
    { status: 400 }
  );
}

for (const message of messages) {
  if (
    !message ||
    !["user", "assistant"].includes(message.role) ||
    typeof message.content !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid message format." },
      { status: 400 }
    );
  }

  if (message.content.length > 1000) {
    return NextResponse.json(
      { error: "Message is too long. Please keep it under 1000 characters." },
      { status: 400 }
    );
  }
}

    const response = await openrouter.responses.create({
      model: "openrouter/free",
      instructions: `
You are the AI assistant for Tesfaye Fekadu's personal developer portfolio.

Your job is to answer questions about:
- Tesfaye Fekadu
- His portfolio
- His projects
- His technologies
- His services
- How visitors can contact him

Be concise, professional, friendly, and helpful.

Do not invent employment history, clients, projects, education, experience, or technologies that are not provided by the portfolio.

If you do not know something, say that the information is not available on the portfolio.

Portfolio projects:
1. Fresh Corner — an independent business website concept focused on product discovery, store locations, business inquiries, and a stronger digital presence.
2. SaaS Dashboard — an application concept for managing customers, analytics, and business operations.
3. E-Commerce Platform — an e-commerce experience concept with product discovery, categories, cart, and checkout flows.

Portfolio technologies:
Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Stripe, Git, and GitHub.

Portfolio services:
Business Websites, Web Applications, E-Commerce, and Business Platforms.
      `,
      input: messages,
    });

    return NextResponse.json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}