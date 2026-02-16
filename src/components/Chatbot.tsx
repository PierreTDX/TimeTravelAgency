import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { getChatbotResponse, getDefaultResponse } from '../data/chatbotResponses';
import { useLanguage } from '../context/LanguageContext.tsx';

// Remplacez par votre clé API (obtenue sur https://aistudio.google.com/)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// Cache pour éviter de lister les modèles à chaque appel
let cachedModelName: string | null = null;

async function getBestModel(apiKey: string): Promise<string> {
  if (cachedModelName) return cachedModelName;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();

    if (data.models) {
      // Chercher un modèle qui supporte generateContent (texte)
      const capableModels = data.models.filter((m: any) =>
        m.supportedGenerationMethods &&
        m.supportedGenerationMethods.includes('generateContent')
      );

      // Préférence pour flash, puis pro, puis n'importe lequel
      const preferred = capableModels.find((m: any) => m.name.includes('flash')) ||
        capableModels.find((m: any) => m.name.includes('pro')) ||
        capableModels[0];

      if (preferred) {
        cachedModelName = preferred.name;
        return preferred.name;
      }
    }
  } catch (error) {
    // Fallback silencieux
  }

  return 'models/gemini-1.5-flash'; // Fallback
}

async function callGeminiAPI(prompt: string, language: string): Promise<string> {
  const modelName = await getBestModel(GEMINI_API_KEY);

  const systemPrompt = language === 'fr'
    ? "Tu es un agent de voyage temporel pour TimeTravel Agency. Tu vends des voyages pour Paris 1889, le Crétacé, et Florence 1504. Sois poli, professionnel, concis et enthousiaste. Ne parle que de voyage temporel."
    : "You are a time travel agent for TimeTravel Agency. You sell trips to Paris 1889, Cretaceous Period, and Florence 1504. Be polite, professional, concise, and enthusiastic. Only talk about time travel.";

  try {
    // Utilisation du modèle déterminé dynamiquement
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemPrompt}\n\nUser: ${prompt}` }] }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Erreur ${response.status}: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return getDefaultResponse(language as 'en' | 'fr');
    }

    return text;
  } catch (error) {
    throw error;
  }
}

export const Chatbot = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: t.chatbot.welcome,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Reset welcome message when language changes
    setMessages(prev => {
      const newMessages = [...prev];
      if (newMessages.length > 0 && newMessages[0].id === '1') {
        newMessages[0].text = t.chatbot.welcome;
      }
      return newMessages;
    });
  }, [t.chatbot.welcome]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // 1. Chercher une réponse locale (rapide et fiable pour les infos basiques)
    const localResponse = getChatbotResponse(inputValue, language);

    if (localResponse) {
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: localResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 600);
    } else {
      // 2. Sinon, appeler l'IA (plus intelligent)
      try {
        const aiResponse = await callGeminiAPI(inputValue, language);
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: getDefaultResponse(language),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div id="chat" className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-96 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <MessageCircle className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{t.chatbot.title}</h3>
                    <p className="text-xs text-black/80">{t.chatbot.status}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:bg-black/10 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black'
                        : 'bg-gray-800 text-gray-200'
                        }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-black/60' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="bg-gray-800 p-3 rounded-lg flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />
                      <span className="text-sm text-gray-400">{t.chatbot.typing}</span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 bg-gray-900 border-t border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t.chatbot.placeholder}
                    className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-500"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black p-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/40 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!inputValue.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black p-4 rounded-full shadow-2xl hover:shadow-amber-500/40 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};
