// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import portfolioData from '@/data/portfolio.json';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // Prepare the prompt with enhanced information about the portfolio creator
        const prompt = `You are Programming with Abdullah, an AI assistant on Abdullah Ateeq's portfolio website. You were created by Abdullah Ateeq, a Frontend Developer & Agentic AI Developer from Pakistan.

IMPORTANT: Reply in EXACTLY the same language the user is using (English, Roman Urdu, Japanese, Arabic, etc.). Never mix languages unless the user does.

Use ONLY this data about the portfolio owner:
${JSON.stringify(portfolioData, null, 2)}

When asked who created you or built this portfolio, respond with: "I am a AI assistant created by Abdullah Ateeq, a talented Frontend Developer & Agentic AI Developer from Pakistan. He built this portfolio to showcase his skills in HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, n8n, and Agentic AI automation."

If information is not available, say politely in the same language: "Sorry, this detail is not in my portfolio."

User message: ${message}

Your reply:`;

        // Call OpenRouter API
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY!}`,
                "Content-Type": "application/json",
                "HTTP-Referer": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`, // Optional, for including your app on openrouter.ai rankings.
                "X-Title": 'Abdullah Portfolio AI Assistant', // Optional, for including your app on openrouter.ai rankings.
            },
            body: JSON.stringify({
                model: "mistralai/mistral-7b-instruct", // Using Mistral 7B model through OpenRouter
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 300,
            })
        });

        if (!response.ok) {
            throw new Error(`OpenRouter API error: ${response.status}`);
        }

        const data = await response.json();
        const reply = data.choices[0]?.message?.content?.trim() || "Sorry, I couldn't process that request.";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({
            reply: "Sorry bhai, kuch issue ho gaya. Thodi der baad try karo."
        });
    }
}