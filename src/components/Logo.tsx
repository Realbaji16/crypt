import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-8 h-8">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0.5 bg-white/90 backdrop-blur-sm rounded-lg" />
        <motion.div 
          className="absolute inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        CryptoVault
      </span>
    </motion.div>
  );
};