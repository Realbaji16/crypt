import React from 'react';
import { motion } from 'framer-motion';

export const EthereumIcon: React.FC = () => {
  return (
    <motion.div
      className="absolute bottom-1/4 right-20 w-32 h-32"
      animate={{
        y: [10, -10],
        x: [5, -5],
        rotate: [0, -10, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="ethGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#627EEA" />
            <stop offset="100%" stopColor="#3C5BE0" />
          </linearGradient>
        </defs>
        
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="48" fill="url(#ethGradient)" />
        
        {/* Inner Circle */}
        <circle cx="50" cy="50" r="44" fill="white" />
        
        {/* Ethereum Symbol */}
        <g fill="#627EEA">
          <path d="M50 20l-20 32 20 12 20-12z"/>
          <path d="M50 64l-20-12 20 28 20-28z"/>
        </g>
      </svg>
    </motion.div>
  );
};