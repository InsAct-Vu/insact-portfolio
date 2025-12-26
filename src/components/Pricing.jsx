import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "Discovery",
      price: "$100",
      duration: "Fixed",
      features: [
        "60-minute workshop call",
        "Technical requirements mapping",
        "1-page solution blueprint",
        "Clear next steps"
      ],
      highlight: false
    },
    {
      name: "Clickable Demo",
      price: "$300-700",
      duration: "2-3 days",
      features: [
        "Interactive prototype",
        "Demo video walkthrough",
        "Help close the deal",
        "Technical documentation"
      ],
      highlight: true
    },
    {
      name: "Full Delivery",
      price: "$2K-10K+",
      duration: "Project-based",
      features: [
        "Complete development",
        "API integrations",
        "Testing & deployment",
        "Handover & training"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Partnership Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Clear costs at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                tier.highlight
                  ? 'bg-brand-teal text-white shadow-xl scale-105'
                  : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${
                tier.highlight ? 'text-white' : 'text-gray-900'
              }`}>
                {tier.name}
              </h3>
              <div className={`text-3xl font-bold mb-1 ${
                tier.highlight ? 'text-white' : 'text-brand-teal'
              }`}>
                {tier.price}
              </div>
              <div className={`text-sm mb-6 ${
                tier.highlight ? 'text-teal-100' : 'text-gray-600'
              }`}>
                {tier.duration}
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className={tier.highlight ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
