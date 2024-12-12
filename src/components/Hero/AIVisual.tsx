import React from 'react';
import { motion } from 'framer-motion';

export const AIVisual: React.FC = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Neural Network Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-32 bg-gradient-to-b from-blue-500/10 to-purple-500/10"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 15}%`,
            transform: `rotate(${-20 + i * 5}deg)`,
          }}
          animate={{
            height: ['8rem', '10rem', '8rem'],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* AI Nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Circuit Paths */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <motion.path
          d="M0 50 Q 100 100, 200 50 T 400 50"
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
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};