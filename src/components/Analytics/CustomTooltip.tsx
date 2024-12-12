import React from 'react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-sm font-semibold text-blue-600">
          Payout: ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-sm font-semibold text-purple-600">
          Balance: ${payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};