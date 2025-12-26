import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const RiskReduction = () => {
  return (
    <section className="py-20 px-4 bg-slate-50" id="risk-reduction">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {siteCopy.riskReduction.title}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {siteCopy.riskReduction.questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskReduction;
