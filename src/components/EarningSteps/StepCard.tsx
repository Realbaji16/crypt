import * as React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface StepCardProps {
  icon: IconType;
  title: string;
  description: string;
  step: number;
}

export const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, step }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.2 }}
      className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow mt-6"
    >
      {/* Step Number */}
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {step}
      </div>

      {/* Icon Container */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl" />
        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-4 text-white">
          <Icon className="w-full h-full" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  );
};