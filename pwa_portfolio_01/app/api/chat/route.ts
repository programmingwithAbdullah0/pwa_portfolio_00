// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import portfolioData from '@/data/portfolio.json';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            generationConfig: { maxOutputTokens: 300 },
        });

        const prompt = `You are a friendly assistant on Huzaifa Abdulrab's portfolio website.

IMPORTANT: Reply in EXACTLY the same language the user is using (English, Roman Urdu, Japanese, Arabic, etc.). Never mix languages unless the user does.

Use ONLY this data:
${JSON.stringify(portfolioData, null, 2)}

If information is not available, say politely in the same language: "Sorry, this detail is not in my portfolio."

User message: ${message}

Your reply:`;

        const result = await model.generateContent(prompt);
        const reply = result.response.text().trim();

        return NextResponse.json({ reply });

    } catch {
        // No parameter = No TypeScript error (Official & Recommended)
        console.error("Chat API Error (caught):");
        return NextResponse.json({
            reply: "Sorry bhai, kuch issue ho gaya. Thodi der baad try karo."
        });
    }
}