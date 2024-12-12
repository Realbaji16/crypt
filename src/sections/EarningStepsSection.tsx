import * as React from 'react';
import { motion } from 'framer-motion';
import { StepCard } from '../components/EarningSteps/StepCard';
import { FaWallet, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';

export const EarningStepsSection: React.FC = () => {
  const steps = [
    {
      icon: FaWallet,
      title: "Connect Wallet",
      description: "Link your crypto wallet securely to start your earning journey",
      step: 1,
    },
    {
      icon: FaChartLine,
      title: "Start Earning",
      description: "Choose from our high-yield earning pools and watch your assets grow",
      step: 2,
    },
    {
      icon: FaMoneyBillWave,
      title: "Withdraw Anytime",
      description: "Access your earnings and withdraw them whenever you want",
      step: 3,
    },
  ];

  return (
    <section id="earning-steps" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Earning in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Begin your crypto earning journey with our simple and secure process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};