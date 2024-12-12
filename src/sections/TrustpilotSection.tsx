import React from 'react';
import { motion } from 'framer-motion';
import { TrustScore } from '../components/Trustpilot/TrustScore';
import { ReviewCard } from '../components/Trustpilot/ReviewCard';
import { reviews } from '../data/reviewsData';

export const TrustpilotSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our users say about their experience with our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <TrustScore />
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} index={index} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <span>View all reviews on</span>
            <svg className="h-5" viewBox="0 0 100 24" fill="currentColor">
              <path d="M97.8,11.4L86.5,0l-11.4,11.4l11.4,11.4L97.8,11.4z M74.3,11.4L62.9,0L51.5,11.4l11.4,11.4L74.3,11.4z M50.7,11.4L39.3,0L27.9,11.4l11.4,11.4L50.7,11.4z M27.1,11.4L15.7,0L4.3,11.4l11.4,11.4L27.1,11.4z M3.6,11.4L-7.9,0l-11.4,11.4l11.4,11.4L3.6,11.4z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};