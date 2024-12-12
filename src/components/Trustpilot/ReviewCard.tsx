import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  index: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  comment,
  date,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-green-500' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">{rating}.0</span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{comment}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{name}</span>
        <span>{date}</span>
      </div>
    </motion.div>
  );
};