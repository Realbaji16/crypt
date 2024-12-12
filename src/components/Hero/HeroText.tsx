import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const HeroText: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Earn & Grow <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Your Crypto
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Start your crypto journey today. Earn passive income through our 
        advanced staking pools and maximize your returns with smart investment strategies.
      </motion.p>
      
      <motion.div 
        className="flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button 
          variant="connect" 
          size="large" 
          className="text-lg px-12 py-5 shadow-lg hover:shadow-xl transition-shadow"
        >
          Start Earning Now
        </Button>
        <Button 
          variant="secondary" 
          size="large"
          className="text-lg px-8"
        >
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
};