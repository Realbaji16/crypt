import * as React from 'react';
import { motion } from 'framer-motion';
import { HeroContent } from './HeroContent';
import { HeroVisuals } from './HeroVisuals';
import { Stats } from './Stats';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Full width on mobile, half on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-30 order-2 lg:order-1 text-center lg:text-left"
          >
            <HeroContent />
          </motion.div>

          {/* Visual Content - Full width on mobile, half on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] -mx-4 sm:mx-0"
          >
            <HeroVisuals />
          </motion.div>
        </div>

        {/* Stats Section - Responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-30 mt-12 sm:mt-16 lg:mt-20"
        >
          <Stats />
        </motion.div>
      </div>
    </section>
  );
};