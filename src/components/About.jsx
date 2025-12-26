import React from 'react';
import siteCopy from '../content/siteCopy.json';

const About = () => {
  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {siteCopy.about.title}
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {siteCopy.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
