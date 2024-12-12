import * as React from 'react';
import { motion } from 'framer-motion';
import { USDTCluster } from './icons/USDTCluster';
import { RobotIllustration } from './RobotIllustration';
import { AIVisual } from './AIVisual';
import { FloatingParticles } from './FloatingParticles';
import { TradingInterface } from './TradingInterface';
import { CryptoCards } from './CryptoCards';

export const HeroVisuals: React.FC = () => {
  return (
    <div className="relative z-10 w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] px-4 sm:px-0">
      {/* Background Effects */}
      <div className="relative z-10">
        <AIVisual />
        <FloatingParticles />
      </div>

      {/* Main Visual Elements */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="relative w-full h-full max-w-xl mx-auto">
          {/* Robot Illustration */}
          <div className="absolute inset-0 flex items-center justify-center scale-75 sm:scale-90 lg:scale-100">
            <RobotIllustration />
          </div>

          {/* USDT Cluster */}
          <div className="hidden sm:block">
            <USDTCluster />
          </div>

          {/* Trading Interface */}
          <div className="absolute top-4 right-4 sm:right-0 scale-75 sm:scale-100">
            <TradingInterface />
          </div>

          {/* Crypto Cards */}
          <div className="absolute bottom-4 left-4 sm:left-0 scale-75 sm:scale-100">
            <CryptoCards />
          </div>

          {/* Glowing Effects */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1), transparent 50%)',
                'radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1), transparent 50%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>
    </div>
  );
};