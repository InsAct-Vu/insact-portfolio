import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/shared/PageHeader';
import team from '../content/team.json';

function AboutPage() {
  const about = team.about;

  return (
    <>
      <Helmet>
        <title>{about.meta.title}</title>
        <meta name="description" content={about.meta.description} />
      </Helmet>

      <PageHeader
        title={about.hero.title}
        subtitle={about.hero.subtitle}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {about.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              {section.isQuote ? (
                <div className="bg-slate-50 p-8 rounded-lg">
                  <blockquote className="text-lg text-gray-800 italic border-l-4 border-teal-600 pl-6">
                    "{section.quote}"
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-4">— {section.attribution}</p>
                </div>
              ) : (
                <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
