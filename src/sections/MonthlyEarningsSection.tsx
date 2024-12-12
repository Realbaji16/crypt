import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaPercent, FaWallet, FaCalculator } from 'react-icons/fa';

export const MonthlyEarningsSection: React.FC = () => {
  const [investment, setInvestment] = useState<number>(1000);
  const monthlyReturn = investment * 0.30; // 30% monthly return
  const yearlyReturn = monthlyReturn * 12;

  return (
    <section id="monthly-earnings" className="py-20 bg-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Earn 30% Monthly Returns
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your potential earnings with our high-yield investment platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Amount ($)
              </label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="100"
                step="100"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between p-4 bg-blue-50 rounded-lg">
                <span className="text-gray-600">Monthly Return (30%)</span>
                <span className="font-bold text-blue-600">${monthlyReturn.toFixed(2)}</span>
              </div>
              <div className="flex justify-between p-4 bg-purple-50 rounded-lg">
                <span className="text-gray-600">Yearly Return</span>
                <span className="font-bold text-purple-600">${yearlyReturn.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaPercent className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">High Returns</h3>
                <p className="text-gray-600">Earn 30% monthly returns on your investment</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FaWallet className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Secure Storage</h3>
                <p className="text-gray-600">Your funds are secured with military-grade encryption</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FaChartLine className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Real-time Tracking</h3>
                <p className="text-gray-600">Monitor your earnings in real-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};