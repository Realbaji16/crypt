import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  label: string;
  value: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="text-center p-4"
  >
    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm sm:text-base text-gray-600 mt-1">{label}</div>
  </motion.div>
);

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
      <StatItem value="1.2M TH/s" label="Total Hash Rate" delay={0.2} />
      <StatItem value="50k+" label="Active Miners" delay={0.4} />
      <StatItem value="125%" label="Average APR" delay={0.6} />
      <StatItem value="$2.8B+" label="Total Value Locked" delay={0.8} />
    </div>
  );
};