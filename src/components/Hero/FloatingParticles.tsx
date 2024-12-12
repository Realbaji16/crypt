import React from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-20, 20],
            scale: [1, 1.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Glowing Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(59, 130, 246, 0.1)' : 
              i === 1 ? 'rgba(139, 92, 246, 0.1)' : 
              'rgba(236, 72, 153, 0.1)'
            } 0%, transparent 70%)`,
            top: `${20 + (i * 30)}%`,
            left: `${20 + (i * 30)}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={`line-${i}`}
            d={`M${100 + i * 100} ${50 + i * 30} Q ${200 + i * 50} ${100 + i * 20}, ${300 + i * 100} ${150 + i * 40}`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            animate={{
              pathLength: [0, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};