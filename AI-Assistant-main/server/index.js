import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import 'dotenv/config';
import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "You are a helpful AI assistant. Answer any questions the user asks accurately and in detail." }]
    }
  ]
});

app.use(cors());
app.use(express.json());
app.use(express.static("web"));

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  console.log("User:", message);
  try {
    const result = await chat.sendMessage(message);
    const reply = result.response.text();
    console.log("AI:", reply);
    res.json({ reply });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ reply: "Error: " + err.message });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});