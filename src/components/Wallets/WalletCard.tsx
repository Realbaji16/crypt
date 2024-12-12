import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface WalletCardProps {
  name: string;
  icon: IconType;
  description: string;
  index: number;
}

export const WalletCard: React.FC<WalletCardProps> = ({
  name,
  icon: Icon,
  description,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Icon */}
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl" />
        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-2.5 text-white">
          <Icon className="w-full h-full" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>

      {/* Connect Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 rounded-lg text-sm font-medium hover:from-blue-500/20 hover:to-purple-500/20 transition-colors"
      >
        Connect
      </motion.button>
    </motion.div>
  );
};