import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center">
            <img
              src="/insact-logo.svg"
              alt="InsAct Logo"
              className="h-16 md:h-20"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            {siteCopy.positioning.headline}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            {siteCopy.positioning.subheadline}
          </p>

          <div className="flex justify-center mt-8">
            <button
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
            >
              <MessageSquare className="mr-2" size={20} />
              {siteCopy.cta.text}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
