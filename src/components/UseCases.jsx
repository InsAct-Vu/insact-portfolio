import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Layers } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const UseCases = () => {
  const icons = {
    0: <MapPin className="w-6 h-6" />,
    1: <Navigation className="w-6 h-6" />,
    2: <Layers className="w-6 h-6" />
  };

  return (
    <section className="py-20 px-4 bg-white" id="use-cases">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {siteCopy.useCases.title}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {siteCopy.useCases.cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="text-teal-600 bg-teal-100 p-3 rounded-lg">
                    {icons[index]}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Problem: </span>
                      <span className="text-gray-700">{useCase.problem}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-teal-700">Result: </span>
                      <span className="text-gray-800 font-medium">{useCase.result}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">Why it matters: </span>
                      <span className="text-gray-700">{useCase.why}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
