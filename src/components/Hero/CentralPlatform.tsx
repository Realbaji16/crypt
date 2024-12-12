import React from 'react';
import { motion } from 'framer-motion';

export const CentralPlatform: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 rounded-[32px] shadow-lg shadow-blue-500/10"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          },
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-2 border-purple-400/40 rounded-[28px] backdrop-blur-sm shadow-lg shadow-purple-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
};