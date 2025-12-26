import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/shared/PageHeader';
import products from '../../content/products.json';

function FootfallAnalysisPage() {
  const product = products.footfallAnalysis;

  return (
    <>
      <Helmet>
        <title>{product.meta.title}</title>
        <meta name="description" content={product.meta.description} />
      </Helmet>

      <PageHeader
        title={product.hero.title}
        subtitle={product.hero.subtitle}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{product.problem}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Why Traditional Approaches Fail</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{product.whyTraditionalFails}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What We Do Instead</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{product.whatWeDo}</p>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
            <h3 className="text-2xl font-bold mb-2">Outcome</h3>
            <p className="text-lg text-gray-800">{product.outcome}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FootfallAnalysisPage;
