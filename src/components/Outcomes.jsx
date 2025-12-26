import React from 'react';
import { motion } from 'framer-motion';
import siteCopy from '../content/siteCopy.json';

const Outcomes = () => {
  return (
    <section className="py-20 px-4 bg-teal-600 text-white" id="outcomes">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {siteCopy.outcomes.title}
          </h2>
          <p className="text-xl text-teal-100">
            {siteCopy.outcomes.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteCopy.outcomes.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-gray-900 rounded-lg p-6 shadow-lg metric-card"
            >
              <div className="metric-value font-bold text-teal-600 mb-3">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-gray-700 leading-snug">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
