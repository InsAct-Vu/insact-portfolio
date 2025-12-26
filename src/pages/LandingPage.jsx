import React from 'react';
import Hero from '../components/Hero';
import ProblemSpace from '../components/ProblemSpace';
import ValueProposition from '../components/ValueProposition';
import Outcomes from '../components/Outcomes';
import UseCases from '../components/UseCases';
import RiskReduction from '../components/RiskReduction';
import Engagement from '../components/Engagement';
import Contact from '../components/Contact';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <ProblemSpace />
      <ValueProposition />
      <Outcomes />
      <UseCases />
      <RiskReduction />
      <Engagement />
      <Contact />
    </div>
  );
}

export default LandingPage;
