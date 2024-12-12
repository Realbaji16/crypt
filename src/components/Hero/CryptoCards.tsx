import React from 'react';
import { motion } from 'framer-motion';

export const CryptoCards: React.FC = () => {
  return (
    <div className="relative">
      {[
        { name: 'BTC', color: 'yellow', symbol: '₿' },
        { name: 'ETH', color: 'blue', symbol: 'Ξ' },
        { name: 'USDT', color: 'green', symbol: '$' }
      ].map((crypto, index) => (
        <motion.div
          key={crypto.name}
          className={`absolute w-24 h-32 bg-${crypto.color}-50 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden`}
          style={{
            top: `${index * -20}px`,
            left: `${index * 20}px`,
            zIndex: 3 - index
          }}
          animate={{
            y: [0, -5, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className={`h-full bg-gradient-to-br from-${crypto.color}-100 to-${crypto.color}-200 p-4`}>
            <div className="text-2xl font-bold text-gray-800">{crypto.symbol}</div>
            <div className="mt-2 text-sm font-medium text-gray-600">{crypto.name}</div>
            <motion.div
              className={`mt-4 h-1 bg-${crypto.color}-300 rounded-full`}
              animate={{
                width: ["30%", "80%", "50%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};