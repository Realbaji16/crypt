import React from 'react';
import { motion } from 'framer-motion';

const USDTLogo = ({ className = "" }) => (
  <svg viewBox="0 0 2000 2000" className={className}>
    <path d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0" fill="#53ae94"/>
    <path d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18" fill="#fff"/>
  </svg>
);

export const USDTCluster: React.FC = () => {
  return (
    <>
      {/* Large central USDT */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-20"
        animate={{
          y: [-10, 10],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, repeatType: "reverse" },
          rotate: { duration: 6, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        <USDTLogo className="w-full h-full" />
      </motion.div>

      {/* Floating USDT coins */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 z-20"
          style={{
            top: `${20 + (i * 15)}%`,
            left: `${15 + (i * 12)}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            rotate: [-10, 10],
          }}
          transition={{
            duration: 3 + (i * 0.5),
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
        >
          <USDTLogo className="w-full h-full" />
        </motion.div>
      ))}

      {/* Right side USDT coins */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`right-${i}`}
          className="absolute w-16 h-16 z-20"
          style={{
            top: `${25 + (i * 15)}%`,
            right: `${15 + (i * 12)}%`,
          }}
          animate={{
            y: [20, -20],
            x: [10, -10],
            rotate: [10, -10],
          }}
          transition={{
            duration: 4 + (i * 0.5),
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.3,
          }}
        >
          <USDTLogo className="w-full h-full" />
        </motion.div>
      ))}
    </>
  );
};