import React from 'react';
import { FileSearch, Settings, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import siteCopy from '../content/siteCopy.json';

const Services = () => {
  const icons = [
    <FileSearch className="w-8 h-8" />,
    <Settings className="w-8 h-8" />,
    <CheckSquare className="w-8 h-8" />
  ];

  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {siteCopy.services.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteCopy.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-brand-teal mb-4">{icons[index]}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
