// /api/init.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Accesses the hidden key from Vercel's Environment Variables
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const { prompt } = req.body;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Return the raw AI response (JSON string) back to the browser
        res.status(200).send(responseText);
    } catch (error) {
        res.status(500).json({ error: "Surgery Interrupted: " + error.message });
    }
}
