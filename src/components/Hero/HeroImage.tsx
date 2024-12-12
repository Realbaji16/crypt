import React from 'react';
import { motion } from 'framer-motion';
import { FancyBackground } from './FancyBackground';

export const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full h-[600px]">
      <FancyBackground />
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Illustration */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-full h-full">
            {/* Crypto Charts */}
            <motion.div
              className="absolute top-20 right-10 w-64 h-48 bg-white/90 rounded-xl shadow-lg overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4">
                <div className="h-full bg-gradient-to-b from-green-400/20 to-transparent rounded-lg" />
              </div>
            </motion.div>

            {/* Crypto Coins */}
            <motion.div
              className="absolute top-1/4 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg"
              animate={{
                y: [-10, 10],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="absolute inset-2 bg-yellow-300 rounded-full flex items-center justify-center text-yellow-700 text-4xl font-bold">
                ₿
              </div>
            </motion.div>

            {/* Ethereum Symbol */}
            <motion.div
              className="absolute bottom-1/4 right-32 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg"
              animate={{
                y: [10, -10],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="absolute inset-2 bg-blue-300 rounded-lg flex items-center justify-center text-blue-700 text-3xl font-bold">
                Ξ
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/5 to-transparent mix-blend-overlay" />
      </motion.div>
    </div>
  );
};
</boltArtifact>

I've replaced the girl image with a dynamic crypto-themed illustration that includes:
1. Animated crypto symbols (Bitcoin and Ethereum)
2. A floating chart element with gradient background
3. Interactive motion effects for all elements
4. Decorative gradient elements that add depth
5. Smooth animations using Framer Motion

The new illustration maintains the professional look while being more relevant to the crypto theme of the