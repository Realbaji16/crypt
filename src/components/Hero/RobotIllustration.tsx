import React from 'react';
import { motion } from 'framer-motion';

export const RobotIllustration: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg viewBox="0 0 400 400" className="w-96 h-96">
        {/* Robot Head */}
        <motion.g
          animate={{
            y: [-5, 5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <rect x="150" y="100" width="100" height="80" rx="10" fill="url(#robotGradient)" />
          <circle cx="175" cy="130" r="10" fill="#60A5FA" className="animate-pulse" />
          <circle cx="225" cy="130" r="10" fill="#60A5FA" className="animate-pulse" />
          <rect x="170" y="150" width="60" height="10" rx="5" fill="#60A5FA" />
        </motion.g>

        {/* Robot Body */}
        <motion.g
          animate={{
            rotate: [-2, 2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <rect x="140" y="190" width="120" height="140" rx="20" fill="url(#robotBodyGradient)" />
          <circle cx="200" cy="230" r="30" fill="#34D399" className="animate-pulse" />
        </motion.g>

        {/* Floating Coins */}
        <motion.g
          animate={{
            y: [-20, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <circle cx="150" cy="160" r="15" fill="#F59E0B" />
          <text x="150" y="165" textAnchor="middle" fill="white" fontSize="12">$</text>
          
          <circle cx="250" cy="180" r="15" fill="#F59E0B" />
          <text x="250" y="185" textAnchor="middle" fill="white" fontSize="12">$</text>
          
          <circle cx="200" cy="140" r="15" fill="#F59E0B" />
          <text x="200" y="145" textAnchor="middle" fill="white" fontSize="12">$</text>
        </motion.g>

        {/* Digital Circuit Lines */}
        <motion.path
          d="M100 200 Q 150 220, 140 180 T 180 160"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
          animate={{
            strokeDashoffset: [0, 100],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <defs>
          <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="robotBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};