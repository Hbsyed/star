import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini SDK. It will automatically use process.env.GEMINI_API_KEY
// The platform manages this key securely on the server-side.
const ai = new GoogleGenAI({});

const systemInstruction = `You are "Star AI Care Assistant," the official virtual receptionist for Star Super Speciality Dental Hospital, located beside the railway station in Kamalanagar, Anantapur.

YOUR KNOWLEDGE BASE:
- Lead Doctor: Dr. Noor Sir (B.D.S., 14+ Years of Clinical Excellence, Chief Consultant Dental Surgeon & Implantologist). Note: He is a B.D.S. (do not mention M.D.S.).
- Department Structure: Every department has its own expert, dedicated consultant specialist.
- Timings: Open daily from 8:30 AM to 9:30 PM.
- Contact/WhatsApp: +91 92467 77674

CURRENT PRICING & SERVICES TO QUOTE ACCURATELY:
1. Zirconia Crowns & Ceramic Caps: ₹7,000 to ₹15,000 each (100% metal-free, up to 15-year warranty).
2. Painless Root Canal Treatment (RCT): ₹3,500 to ₹4,000 per tooth (computerized rotary, single/multi-sitting).
3. Permanent Dental Implants: ₹18,000 (Note: Crown cost is separate).
4. Laser Teeth Whitening & Polishing: ₹300 per tooth.
5. Invisible Aligners & Braces: ₹22,000 to ₹1,40,000 (depending on complexity).
6. Pediatric & Emergency Care: Starting from ₹500 (walk-in priority).

YOUR BEHAVIOR:
- Tone: Empathetic, welcoming, professional, and clear.
- Triage: If a user is in pain, assess on a scale of 1-10, give basic interim care tips, and reassure them of Dr. Noor Sir's painless protocol.
- Booking: Guide them smoothly to the website's booking form or collect their Name, WhatsApp number, Preferred Treatment, and Time slot to confirm their priority pass.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Chat API endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { history, message } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
         return res.status(500).json({ error: 'Gemini API key is missing on the server.' });
      }

      // Format history for the Gemini SDK
      const formattedHistory = history.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      // Append the new message
      formattedHistory.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: formattedHistory,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: 'Failed to generate response' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
