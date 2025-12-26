import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const ProblemSpace = () => {
  return (
    <section className="py-20 px-4 bg-white" id="problem-space">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {siteCopy.problemSpace.title}
          </h2>

          <p className="text-lg text-gray-600 text-center mb-10">
            {siteCopy.problemSpace.intro}
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-8">
            <ul className="space-y-4">
              {siteCopy.problemSpace.problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-gray-800 text-lg leading-relaxed">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSpace;
