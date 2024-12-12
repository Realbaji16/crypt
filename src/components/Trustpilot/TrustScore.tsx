import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export const TrustScore: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Score</h3>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <FaStar className="w-8 h-8 text-green-500" />
            </motion.div>
          ))}
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
        <p className="text-gray-600 mb-4">Based on 1,234 reviews</p>
        
        {/* Trust Score Bars */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 w-6">{rating}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${100 - (5 - rating) * 20}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: rating * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};