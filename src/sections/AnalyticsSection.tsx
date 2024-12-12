import React from 'react';
import { motion } from 'framer-motion';
import { StatCard } from '../components/Analytics/StatCard';
import { AnalyticsChart } from '../components/Analytics/AnalyticsChart';
import { statsData } from '../data/statsData';

export const AnalyticsSection: React.FC = () => {
  return (
    <section id="analytics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Platform Analytics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track our platform's performance and growth metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {statsData.map((stat, index) => (
            <StatCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Performance Overview
          </h3>
          <AnalyticsChart />
        </motion.div>
      </div>
    </section>
  );
};