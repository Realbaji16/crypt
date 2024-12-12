import React from 'react';
import { motion } from 'framer-motion';

export const CryptoIcons: React.FC = () => {
  return (
    <>
      {/* ETH Icon */}
      <motion.div
        className="absolute w-24 h-24"
        style={{
          top: '20%',
          left: '25%',
        }}
        animate={{
          y: [-10, 10],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500/40 to-blue-600/40 border-2 border-blue-400/50 rounded-[24px] backdrop-blur-sm shadow-lg shadow-blue-500/20" />
      </motion.div>

      {/* BTC Icon */}
      <motion.div
        className="absolute w-20 h-20"
        style={{
          bottom: '30%',
          right: '25%',
        }}
        animate={{
          y: [5, -5],
          rotate: [0, -360],
        }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-orange-500/40 to-orange-600/40 border-2 border-orange-400/50 rounded-[20px] backdrop-blur-sm shadow-lg shadow-orange-500/20" />
      </motion.div>

      {/* USDT Icon (Centered and Larger) */}
      <motion.div
        className="absolute w-32 h-32"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          y: [-8, 8],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          },
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-500/40 to-green-600/40 border-2 border-green-400/50 rounded-[28px] backdrop-blur-sm shadow-lg shadow-green-500/20" />
      </motion.div>

      {/* Additional Decorative Element */}
      <motion.div
        className="absolute w-12 h-12 bg-gradient-to-br from-purple-500/40 to-pink-500/40 border-2 border-purple-400/50 rounded-[14px] backdrop-blur-sm shadow-lg shadow-purple-500/20"
        style={{
          top: '60%',
          left: '30%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
};