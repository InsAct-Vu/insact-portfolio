import React from 'react';
import { TrendingDown, Globe, Home } from 'lucide-react';
import siteCopy from '../content/siteCopy.json';

const CaseStudies = () => {
  const cases = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Eurostan Billing Platform",
      context: "A billing operation was paying $100/month for an Airtable setup that couldn't scale or adapt to their workflow.",
      bottleneck: "Manual invoice generation, inflexible billing cycles, and no automation for recurring tasks without expensive add-ons.",
      theirPlan: "They were considering upgrading to a $200+/month enterprise billing platform with per-user fees.",
      whatIDid: [
        "Eliminated repetitive data entry in the billing workflow",
        "Centralized invoice tracking and payment reconciliation in one system",
        "Automated recurring billing cycles and client notifications"
      ],
      outcome: "Monthly software cost reduced from $100 to $25. Billing process became scalable without per-user licensing fees.",
      tech: "React, Supabase, Stripe API, Telegram API"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Bilingual Voice Assistant",
      context: "A hospitality business was losing bookings due to limited 24/7 support capacity and language barriers.",
      bottleneck: "Staff repeatedly answered the same questions in two languages, causing delays in booking confirmations and lost opportunities after hours.",
      theirPlan: "They were exploring hiring additional multilingual support staff at ~₹40,000/month or expensive per-minute enterprise voice AI platforms.",
      whatIDid: [
        "Automated FAQ responses and booking confirmations for common inquiries",
        "Created consistent interaction workflow handling English and German requests",
        "Removed need for manual after-hours support triage"
      ],
      outcome: "Support ticket volume reduced by 70%. 24/7 booking capability added without additional staff costs.",
      tech: "OpenAI (Whisper, GPT-4), WebRTC, FastAPI, Supabase"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Real Estate Lead Management",
      context: "A real estate team was losing high-value leads due to slow follow-up cycles tracked across Excel and WhatsApp.",
      bottleneck: "Agents manually logged leads, tracked property matches in spreadsheets, and averaged 3-4 day response times—often too late to engage serious buyers.",
      theirPlan: "They were looking at Salesforce at $150/user/month (5 agents = $750/month) but couldn't justify the cost or complexity.",
      whatIDid: [
        "Centralized lead intake to eliminate manual entry and tracking delays",
        "Automated property-to-buyer matching based on stated preferences",
        "Created instant notification workflow for new leads requiring immediate follow-up"
      ],
      outcome: "Lead response time reduced from 3 days to under 10 seconds. Lead engagement rate increased 3x.",
      tech: "Next.js, PostgreSQL (Supabase), WhatsApp API, vector matching"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="case-studies">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600">
            {siteCopy.caseStudies.intro}
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((study, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="text-brand-teal bg-teal-50 p-4 rounded-lg">
                    {study.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <span className="font-semibold text-gray-700">Context:</span>
                      <p className="text-gray-600 leading-relaxed mt-1">{study.context}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">The Bottleneck:</span>
                      <p className="text-gray-600 leading-relaxed mt-1">{study.bottleneck}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">What They Were Considering:</span>
                      <p className="text-gray-600 leading-relaxed mt-1">{study.theirPlan}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900 block mb-2">What I Did:</span>
                      <ul className="space-y-2">
                        {study.whatIDid.map((item, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="text-brand-teal mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-teal-50 p-4 rounded-lg">
                      <span className="font-bold text-brand-teal block mb-1">Outcome:</span>
                      <p className="text-gray-900 font-semibold leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Built using:</span>
                    <p className="text-sm text-gray-700 mt-1">{study.tech}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
