import React from 'react';
import { Button } from '../common/Button';

interface MiningCardProps {
  title: string;
  hashRate: string;
  reward: string;
  difficulty: string;
}

export const MiningCard: React.FC<MiningCardProps> = ({
  title,
  hashRate,
  reward,
  difficulty
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Hash Rate:</span>
          <span className="font-medium">{hashRate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Reward:</span>
          <span className="font-medium">{reward}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Difficulty:</span>
          <span className="font-medium">{difficulty}</span>
        </div>
      </div>
    </div>
  );
};