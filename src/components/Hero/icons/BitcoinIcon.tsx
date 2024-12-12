import React from 'react';
import { motion } from 'framer-motion';

export const BitcoinIcon: React.FC = () => {
  return (
    <motion.div
      className="absolute top-1/4 left-20 w-32 h-32"
      animate={{
        y: [-15, 15],
        x: [-5, 5],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="btcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7931A" />
            <stop offset="100%" stopColor="#E68A00" />
          </linearGradient>
        </defs>
        
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="48" fill="url(#btcGradient)" />
        
        {/* Inner Circle */}
        <circle cx="50" cy="50" r="44" fill="white" />
        
        {/* Bitcoin Symbol */}
        <path d="M63 50c0-8-6-10-16-11V28h-6v11h-5V28h-6v11H20v6h4c2 0 3 1 3 2v28c0 1-1 2-2 2h-5v6h10v11h6V83h5v11h6V83c12-1 19-4 19-13 0-7-4-10-9-11 4-2 7-5 7-9zM35 39h12c5 0 8 2 8 6 0 4-3 6-8 6H35V39zm13 33H35V57h13c6 0 9 2 9 7s-3 8-9 8z"
              fill="#F7931A"/>
      </svg>
    </motion.div>
  );
};