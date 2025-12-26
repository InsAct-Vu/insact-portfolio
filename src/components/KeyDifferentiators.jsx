import React from 'react';
import { CheckCircle, FileText } from 'lucide-react';

/* NEW SECTION: Key differentiators displayed after Services section */
const KeyDifferentiators = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-brand-teal rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-10 h-10 text-brand-teal flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">See It Before You Buy It</h3>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Visual mockups first.</p>
                  <p>Payment only after your client says "Yes."</p>
                  <p><strong>Clarity before commitment.</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-brand-teal rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <FileText className="w-10 h-10 text-brand-teal flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Complete Tech Roadmap First</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Costs, timeline, and ongoing maintenance</strong>—all mapped out before we write a single line of code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;
