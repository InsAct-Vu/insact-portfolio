import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, CheckCircle } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const ValueProposition = () => {
  const icons = [
    <Zap className="w-6 h-6" />,
    <DollarSign className="w-6 h-6" />,
    <CheckCircle className="w-6 h-6" />
  ];

  return (
    <section className="py-20 px-4 bg-slate-50" id="value-proposition">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {siteCopy.valueProposition.title}
          </h2>

          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            {siteCopy.valueProposition.intro}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {siteCopy.valueProposition.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <div className="text-teal-600 mb-4">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
