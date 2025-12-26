import React from 'react';
import { motion } from 'framer-motion';

const ContentCard = ({
  icon,
  title,
  description,
  metadata,
  index = 0,
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'bg-white border-gray-200',
    highlighted: 'bg-teal-50 border-teal-200',
    dark: 'bg-slate-800 text-white border-slate-700'
  };

  const textColors = {
    default: 'text-gray-600',
    highlighted: 'text-gray-700',
    dark: 'text-gray-300'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-lg p-6 shadow-sm border ${variantClasses[variant]} hover:shadow-md transition-shadow`}
    >
      {icon && (
        <div className="text-brand-teal mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>
      <p className={`${textColors[variant]} leading-relaxed mb-3`}>
        {description}
      </p>
      {metadata && (
        <div className={`text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-4 pt-4 border-t ${variant === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}>
          {metadata}
        </div>
      )}
    </motion.div>
  );
};

export default ContentCard;
