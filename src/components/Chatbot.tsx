import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! I am Star AI Care Assistant. How can I help you today? If you are in pain, please let me know right away.',
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsOpen(true);
      if (customEvent.detail) {
        setInput(customEvent.detail);
      }
    };

    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Send message along with history to our secure server-side API
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history, message: userMessage.text }),
      });

      const data = await response.json();
      
      if (response.ok && data.text) {
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: data.text }]);
      } else {
        throw new Error(data.error || 'Failed to fetch response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: 'I apologize, but I am currently experiencing technical difficulties. Please contact the clinic directly at +91 92467 77674.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-20 md:bottom-6 right-4 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-teal-700 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-teal-800 transition-colors z-50 group"
          >
            <MessageSquare className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-teal-500 border-2 border-white"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 md:bottom-6 right-4 md:right-6 w-[380px] max-w-[calc(100vw-32px)] md:max-w-[calc(100vw-48px)] h-[500px] md:h-[600px] max-h-[calc(100vh-120px)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 border border-slate-200"
          >
            {/* Header */}
            <div className="bg-slate-900 p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg leading-tight">Star AI Care</h3>
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider">Virtual Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-teal-100 text-teal-700'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-slate-900 text-white rounded-tr-sm' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-teal-600 animate-spin" />
                    <span className="text-sm text-slate-500 font-medium">Assistant is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about treatments, pain, or prices..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-teal-700 hover:bg-teal-800 disabled:bg-slate-300 disabled:text-slate-500 text-white rounded-full flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
