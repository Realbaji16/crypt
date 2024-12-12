import React from 'react';
import { FarmingPool } from '../components/Farming/FarmingPool';

export const FarmingSection: React.FC = () => {
  return (
    <section id="farming" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Farming Pools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FarmingPool
            name="BTC-ETH LP"
            apr="120% APR"
            tvl="$500M"
            token="MINE-LP"
          />
          <FarmingPool
            name="ETH-USDT LP"
            apr="85% APR"
            tvl="$300M"
            token="MINE-LP"
          />
          <FarmingPool
            name="MINE Staking"
            apr="200% APR"
            tvl="$100M"
            token="MINE"
          />
        </div>
      </div>
    </section>
  );
};