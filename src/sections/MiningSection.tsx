import React from 'react';
import { MiningCard } from '../components/Mining/MiningCard';

export const MiningSection: React.FC = () => {
  return (
    <section id="mining" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Mining Pools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MiningCard
            title="Bitcoin Mining"
            hashRate="50 TH/s"
            reward="0.001 BTC/day"
            difficulty="Medium"
          />
          <MiningCard
            title="Ethereum Mining"
            hashRate="750 MH/s"
            reward="0.01 ETH/day"
            difficulty="High"
          />
          <MiningCard
            title="Litecoin Mining"
            hashRate="2 GH/s"
            reward="1 LTC/day"
            difficulty="Low"
          />
        </div>
      </div>
    </section>
  );
};