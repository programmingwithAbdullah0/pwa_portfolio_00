// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import portfolioData from '@/data/portfolio.json';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ reply: "Please provide a message." });
        }
        const prompt = `You are Programming with Abdullah, an AI assistant on Abdullah Ateeq's portfolio website. You were created by Abdullah Ateeq, a Frontend Developer & Agentic AI Developer from Pakistan.

IMPORTANT: Reply in EXACTLY the same language the user is using (English, Roman Urdu, Japanese, Arabic, etc.). Never mix languages unless the user does.

Use ONLY this data about the portfolio owner:
${JSON.stringify(portfolioData, null, 2)}

When asked who created you or built this portfolio, respond with: "I am an AI assistant created by Abdullah Ateeq, a talented Frontend Developer & Agentic AI Developer from Pakistan. He built this portfolio to showcase his skills in HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, n8n, and Agentic AI automation."

If information is not available, say politely in the same language: "Sorry, this detail is not in my portfolio."

User message: ${message}

Your reply:`;

        // Check if API key exists
        const apiKey = process.env.OPENROUTER_API_KEY;
        if (!apiKey) {
            console.error("OPENROUTER_API_KEY is not set");
            return NextResponse.json({ 
                reply: "API key missing. Please check your .env.local file." 
            });
        }

        // Call OpenRouter API with NVIDIA Nemotron model (best free model)
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
                "X-Title": 'Abdullah Portfolio AI Assistant',
            },
            body: JSON.stringify({
                model: "nvidia/nemotron-3-nano-30b-a3b:free",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 300,
            })
        });

        // Get error details if request fails
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("OpenRouter API Error:", {
                status: response.status,
                statusText: response.statusText,
                details: errorData
            });
            throw new Error(`OpenRouter API error: ${response.status} - ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't process that request.";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({
            reply: "We are facing some issues. please try again later"
        });
    }
}