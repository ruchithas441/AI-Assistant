# 🤖 AI Assistant — Voice-Enabled AI Chat

A voice-enabled AI chat assistant powered by Google Gemini API. Chat with AI using your voice or text, with beautiful markdown rendering and a modern dark UI.

## ✨ Features

- 🎙️ *Voice Input* — Speak your questions using the microphone
- 💬 *Text Input* — Type messages with Enter to send
- 🧠 *Powered by Gemini* — Uses Google Gemini 2.5 Flash model
- 📝 *Markdown Rendering* — Responses with bold, bullets, tables, and code blocks
- 🌙 *Dark UI* — Clean, modern interface inspired by Claude and ChatGPT
- ⚡ *Real-time* — WebSocket-based communication for instant responses

## 🛠️ Tech Stack

- *Frontend:* HTML, CSS, JavaScript, Marked.js
- *Backend:* Node.js, Express.js, WebSocket (ws)
- *AI:* Google Gemini API (@google/generative-ai)
- *Other:* dotenv

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Google Gemini API key ([Get one here](https://aistudio.google.com))

### Installation

1. *Clone the repository*
   bash
   git clone https://github.com/ruchithas441/AI-Assistant.git
   cd AI-Assistant
   

2. *Install dependencies*
   bash
   npm install
   

3. *Create a .env file* in the root directory
   
   GOOGLE_API_KEY=your_gemini_api_key_here
   GEMINI_MODEL=gemini-2.5-flash
   PORT=8080
   

4. *Run the server*
   bash
   node server/index.js
   

5. *Open in browser*
   
   http://localhost:8080
   

## 📁 Project Structure


AI-Assistant/
├── server/
│   └── index.js        # Backend server (Express + WebSocket)
├── web/
│   ├── index.html      # Frontend UI
│   ├── app.js          # Frontend JavaScript
│   └── pcm-player.js   # Audio player
├── .env                # Environment variables (not committed)
├── .gitignore
└── package.json


## ⚠️ Important

- Never share or commit your .env file
- Your API key is private — keep it safe
- Free tier has rate limits — see [Gemini API docs](https://ai.google.dev/gemini-api/docs/rate-limits)

## 📄 License

This project is open source and available under the [MIT License](LICENSE)

