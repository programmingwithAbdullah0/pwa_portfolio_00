// components/Chatbot.tsx → FINAL PREMIUM VERSION
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Huzaifa's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMsg })
    });

    const { reply } = await res.json();
    setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button — Sirf jab chat band ho tab dikhe */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-8 right-8 bg-[#091057] hover:bg-[#0d1a7a] text-white p-5 rounded-full shadow-2xl z-50 border border-[#e3e3e3]/20 transition-all"
          >
            <Bot size={32} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-8 right-8 w-96 h-[580px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#e3e3e3]/30 z-50 overflow-hidden flex flex-col"
            style={{ boxShadow: "0 25px 60px -12px rgba(9, 16, 87, 0.4)" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#091057] to-[#0d1a7a] text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Programming with Abdullah</h3>
                  <p className="text-xs opacity-90">Always online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="hover:bg-white/20 rounded-full p-2 transition-all duration-200"
              >
                <X size={22} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-[#e3e3e3]/5 to-transparent">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-md ${
                      msg.role === 'user'
                        ? 'bg-[#091057] text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-[#e3e3e3]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-2xl border border-[#e3e3e3] shadow-md">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-5 border-t border-[#e3e3e3]/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                  placeholder="Ask me anything about Huzaifa..."
                  className="flex-1 px-5 py-3 bg-gray-100 dark:bg-gray-800 border border-[#e3e3e3]/50 rounded-full focus:outline-none focus:border-[#091057] transition text-gray-800 dark:text-white placeholder-gray-500"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="bg-[#091057] hover:bg-[#0d1a7a] disabled:opacity-50 text-white p-4 rounded-full transition shadow-lg"
                >
                  <Send size={22} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
