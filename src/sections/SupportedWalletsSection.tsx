import React from 'react';
import { motion } from 'framer-motion';
import { WalletCard } from '../components/Wallets/WalletCard';
import { walletData } from '../data/walletData';

export const SupportedWalletsSection: React.FC = () => {
  return (
    <section id="wallets" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Supported Wallets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect securely with your preferred wallet to start earning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {walletData.map((wallet, index) => (
            <WalletCard key={wallet.name} {...wallet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};