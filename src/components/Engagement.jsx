import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileCheck, TrendingUp, X } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const Engagement = () => {
  const icons = {
    0: <Briefcase className="w-6 h-6" />,
    1: <FileCheck className="w-6 h-6" />,
    2: <TrendingUp className="w-6 h-6" />
  };

  return (
    <section className="py-20 px-4 bg-slate-50" id="engagement">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {siteCopy.engagement.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {siteCopy.engagement.model.map((item, index) => (
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
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Should NOT Engage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 border-2 border-gray-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {siteCopy.engagement.shouldNotEngage.title}
            </h3>
            <ul className="space-y-3">
              {siteCopy.engagement.shouldNotEngage.reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <X className="w-5 h-5 text-gray-500" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Engagement;
