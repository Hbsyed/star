import { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

export default function AIChecker() {
  const [query, setQuery] = useState('');

  const quickQueries = [
    "Sharp throbbing tooth pain when chewing",
    "Want consultation for Zirconia caps for front teeth",
    "Extreme sensitivity to hot and cold",
    "Questions about Painless Root Canal (RCT)"
  ];

  const handleQuerySelect = (text: string) => {
    setQuery(text);
  };

  const handleTriggerAssistant = () => {
    if (!query) return;
    // Dispatch custom event to open floating chatbot and set message
    window.dispatchEvent(new CustomEvent('open-chat', { detail: query }));
  };

  return (
    <section id="ai-triage" className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 mb-6 border border-teal-500/30">
          <Bot className="w-8 h-8" />
        </div>
        <p className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-3">AI-Powered Dental Triage</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
          AI Dental Symptom & Treatment Checker
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Powered by Gemini AI. Get immediate, medical-grade symptom analysis and home care guidance before visiting Dr. Noor Sir.
        </p>

        <div className="bg-slate-800 p-2 rounded-2xl border border-slate-700 max-w-2xl mx-auto flex items-center mb-8 focus-within:ring-2 focus-within:ring-teal-500 transition-all">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your symptom or query..."
            className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button 
            onClick={handleTriggerAssistant}
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2"
          >
            Ask AI <Sparkles className="w-4 h-4" />
          </button>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Quick Select Common Concerns:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickQueries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuerySelect(q)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full text-sm font-medium border border-slate-700 transition-colors"
              >
                + {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
