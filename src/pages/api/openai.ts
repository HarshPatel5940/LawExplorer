// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        if (req.method !== "POST") {
            res.status(400).json({
                success: false,
                message: "Invalid Request Type",
            });
            return;
        }

        const { prompt } = req.body;

        const openai = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        });

        const chat = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        const data = chat.choices[0].message.content;

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
}
