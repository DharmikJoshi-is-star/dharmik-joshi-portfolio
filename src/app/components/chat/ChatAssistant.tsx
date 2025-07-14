"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeminiClient } from '../../utils/geminiClient';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

// Fallback responses when Gemini API is unavailable
const defaultResponses = {
  greeting: "Hi there! I'm Dharmik's AI assistant. Ask me about his skills, experience, or projects, and I'll help you learn more about him.",
  fallback: "I don't have that specific information right now. Would you like to know about Dharmik's skills, experience, projects, or contact information? Or you can check out other sections of this portfolio for more details.",
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isGeminiAvailable, setIsGeminiAvailable] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Check if Gemini API is available
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    setIsGeminiAvailable(!!apiKey);
  }, []);

  // Add initial greeting when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'initial-greeting',
          text: defaultResponses.greeting,
          sender: 'assistant',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    let response: string;
    
    try {
      if (isGeminiAvailable) {
        // Use Gemini AI for smart responses
        const geminiClient = getGeminiClient();
        if (geminiClient) {
          response = await geminiClient.generateResponse(userMessage.text);
        } else {
          throw new Error("Gemini client not available");
        }
      } else {
        // If Gemini isn't available, use fallback response
        throw new Error("Gemini API key not configured");
      }
    } catch (error) {
      console.error("Error getting response:", error);
      response = defaultResponses.fallback;
    } finally {
      // Add AI response after a short delay to simulate typing
      setTimeout(() => {
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          text: response || defaultResponses.fallback,
          sender: 'assistant',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  // Sample predefined questions that recruiters might ask
  const predefinedQuestions = [
    "What are Dharmik's key skills?",
    "Tell me about his work experience",
    "What projects has he worked on?",
    "How can I contact Dharmik?",
    "What is his educational background?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">DJ</span>
                </div>
                <div>
                  <h3 className="font-medium">Ask me anything</h3>
                  <p className="text-xs text-blue-100">
                    {isGeminiAvailable ? "Powered by Gemini AI" : "Dharmik's AI Assistant"}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="bg-gray-50 dark:bg-gray-900 p-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {predefinedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-1 px-2 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700">
              <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about skills, experience..."
                  className="flex-1 px-4 py-2 text-sm focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-3 bg-blue-600 text-white"
                  disabled={!inputText.trim()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}