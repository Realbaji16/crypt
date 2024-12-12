import React from 'react';
import { motion } from 'framer-motion';

export const TradingInterface: React.FC = () => {
  return (
    <motion.div
      className="w-48 sm:w-72 h-32 sm:h-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-xs sm:text-sm font-medium text-gray-600">AI Trading Bot</span>
          <motion.div 
            className="flex items-center"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1" />
            <span className="text-xs text-green-500">Live</span>
          </motion.div>
        </div>

        {/* Trading Charts */}
        <div className="space-y-1.5 sm:space-y-2">
          {[
            { color: 'green', delay: 0 },
            { color: 'blue', delay: 0.2 },
            { color: 'purple', delay: 0.4 }
          ].map((chart, index) => (
            <div key={index} className={`h-1.5 sm:h-2 bg-${chart.color}-100 rounded-full overflow-hidden`}>
              <motion.div
                className={`h-full bg-${chart.color}-500`}
                animate={{
                  width: ["20%", "80%", "40%"],
                  x: [-2, 2, -2]
                }}
                transition={{
                  duration: 3,
                  delay: chart.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          ))}
        </div>

        {/* Live Data Points */}
        <motion.div 
          className="mt-3 grid grid-cols-2 gap-2 text-xs"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-green-600">+2.45%</div>
          <div className="text-blue-600">$1,234.56</div>
        </motion.div>
      </div>
    </motion.div>
  );
};