import React from 'react';
import { motion } from 'framer-motion';

interface IllustrationWrapperProps {
  children: React.ReactNode;
  position: 'left' | 'right';
  delay?: number;
}

export const IllustrationWrapper: React.FC<IllustrationWrapperProps> = ({
  children,
  position,
  delay = 0
}) => {
  const xInitial = position === 'left' ? -50 : 50;
  
  return (
    <motion.div
      className={`absolute ${position === 'left' ? 'bottom-0 left-0' : 'top-0 right-0'} w-1/2`}
      initial={{ opacity: 0, x: xInitial }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        animate={{
          y: [position === 'left' ? 10 : -10, position === 'left' ? -10 : 10, position === 'left' ? 10 : -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};