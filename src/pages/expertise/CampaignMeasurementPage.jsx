import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/shared/PageHeader';
import expertise from '../../content/expertise.json';

function CampaignMeasurementPage() {
  const data = expertise.campaignMeasurement;

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
      </Helmet>

      <PageHeader
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {data.content.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CampaignMeasurementPage;
