// netlify/functions/init.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function (event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    try {
        if (!process.env.GEMINI_API_KEY) {
            return { statusCode: 500, body: JSON.stringify({ error: 'Missing GEMINI_API_KEY' }) };
        }

        const { prompt } = JSON.parse(event.body || '{}');
        if (!prompt || typeof prompt !== 'string') {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt in request body' }) };
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: responseText }),
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: "Surgery Interrupted: " + error.message }) };
    }
};
