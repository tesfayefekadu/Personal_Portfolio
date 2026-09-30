import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      instructions: `
You are the AI assistant for Tesfaye Fekadu's personal developer portfolio.

Your job is to answer questions about:
- Tesfaye Fekadu
- His portfolio
- His projects
- His technologies
- His services
- How visitors can contact him

Be concise, professional, and helpful.

Do not invent employment history, clients, projects, education, experience, or technologies that are not provided by the portfolio.

If you do not know something, say that the information is not available on the portfolio.

The portfolio contains these projects:
1. Fresh Corner — an independent business website concept.
2. SaaS Dashboard — an application concept.
3. E-Commerce Platform — an e-commerce experience concept.

The portfolio technologies include:
Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Stripe, Git, and GitHub.

The services presented on the portfolio include:
Business Websites, Web Applications, E-Commerce, and Business Platforms.
      `,
      input: message,
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