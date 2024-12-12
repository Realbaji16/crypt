import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-30 space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-0">
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Earn & Grow{' '}
        <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Your Crypto
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Start your crypto journey today. Earn passive income through our 
        advanced staking pools and maximize your returns with smart investment strategies.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button 
          variant="connect" 
          size="large" 
          className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-shadow"
        >
          Start Earning Now
        </Button>
        <Button 
          variant="secondary" 
          size="large"
          className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8"
        >
          Learn More
        </Button>
      </motion.div>
    </div>
  );
};