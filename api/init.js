// /api/init.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
        }

        const { prompt } = req.body || {};
        if (!prompt || typeof prompt !== 'string') {
            return res.status(400).json({ error: 'Missing prompt in request body' });
        }

        // Accesses the hidden key from Vercel's Environment Variables
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Return a stable JSON shape expected by dashboard clients.
        res.status(200).json({ text: responseText });
    } catch (error) {
        res.status(500).json({ error: "Surgery Interrupted: " + error.message });
    }
};
