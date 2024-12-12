import { useState, useEffect } from 'react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi! How can I help you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        text: "Thanks for your message! Our support team will get back to you shortly.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return {
    messages,
    sendMessage,
    inputValue,
    setInputValue,
  };
};