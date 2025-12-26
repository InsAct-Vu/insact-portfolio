import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/shared/PageHeader';
import team from '../content/team.json';

function CareersPage() {
  const careers = team.careers;

  return (
    <>
      <Helmet>
        <title>{careers.meta.title}</title>
        <meta name="description" content={careers.meta.description} />
      </Helmet>

      <PageHeader
        title={careers.hero.title}
        subtitle={careers.hero.subtitle}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {careers.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              {section.list ? (
                <ul className="space-y-3">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-lg text-gray-700">• {item}</li>
                  ))}
                </ul>
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

export default CareersPage;
