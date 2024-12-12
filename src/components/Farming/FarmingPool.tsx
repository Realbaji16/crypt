import React from 'react';
import { Button } from '../common/Button';

interface FarmingPoolProps {
  name: string;
  apr: string;
  tvl: string;
  token: string;
}

export const FarmingPool: React.FC<FarmingPoolProps> = ({
  name,
  apr,
  tvl,
  token
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">APR:</span>
          <span className="font-medium text-green-600">{apr}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">TVL:</span>
          <span className="font-medium">{tvl}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Token:</span>
          <span className="font-medium">{token}</span>
        </div>
      </div>
      <Button variant="primary" size="large" className="w-full mt-6">
        Farm Now
      </Button>
    </div>
  );
};