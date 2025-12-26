import React from 'react';
import { MessageSquare } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {siteCopy.cta.text}
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          {siteCopy.cta.description}
        </p>

        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition text-lg cursor-pointer"
          >
            <MessageSquare className="mr-2" size={20} />
            {siteCopy.footer.ctaText}
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          {siteCopy.footer.name} — {siteCopy.footer.title}
        </div>
      </div>
    </section>
  );
};

export default Contact;
