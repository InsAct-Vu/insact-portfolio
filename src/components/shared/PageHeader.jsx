import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, tagline, background = 'gradient' }) => {
  const bgClasses = background === 'gradient'
    ? 'bg-gradient-to-br from-slate-900 to-slate-800'
    : 'bg-slate-900';

  return (
    <section className={`${bgClasses} text-white py-20 px-4`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {tagline && (
            <div className="text-brand-teal font-semibold mb-4 uppercase tracking-wide text-sm">
              {tagline}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
