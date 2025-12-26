# React Portfolio Website - InsAct by Sunny Kumar

## Quick Setup Commands
```bash
# Create new Vite project
npm create vite@latest insact-portfolio -- --template react
cd insact-portfolio

# Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion lucide-react

# Initialize Tailwind
npx tailwindcss init -p

# Start development
npm run dev
```

## File Structure
```
src/
├── components/
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── CaseStudies.jsx
│   ├── Experience.jsx
│   ├── Pricing.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#14b8a6',
        'brand-dark': '#0f172a',
      }
    },
  },
  plugins: [],
}
```

## src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## src/App.jsx
```jsx
import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <CaseStudies />
      <Experience />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
```

## src/components/Hero.jsx
```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-slate-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Helping Agencies Deliver<br />
            <span className="text-brand-teal">AI + Automation Projects</span><br />
            They Couldn't Handle Alone
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From discovery to deployment in days, not months.
            Your technical partner for complex projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/sunnyinsact/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-brand-teal text-white rounded-lg font-semibold hover:bg-teal-600 transition"
            >
              <Calendar className="mr-2" size={20} />
              Book $100 Discovery Call
            </a>
            
            <a
              href="#case-studies"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              View Portfolio
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          
          <div className="mt-12 text-sm text-gray-400">
            IIT Dhanbad • Ex-Jio/Nutanix • Founded InsAct
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
```

## src/components/Services.jsx
```jsx
import React from 'react';
import { Brain, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Discovery Partner",
      description: "Join your client calls to map technical requirements and identify automation opportunities",
      deliverable: "1-page solution blueprint"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Clickable Demo Creator",
      description: "Build interactive prototypes in 2-3 days that help you close deals",
      deliverable: "Working prototype + demo video"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Full Delivery Partner",
      description: "Handle complete development while you maintain the client relationship",
      deliverable: "Production-ready solution"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How I Partner With Agencies
          </h2>
          <p className="text-xl text-gray-600">
            A proven 3-step collaboration model
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-brand-teal mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-sm font-semibold text-brand-teal">
                📦 {service.deliverable}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
```

## src/components/CaseStudies.jsx
```jsx
import React from 'react';
import { TrendingDown, Globe, Home } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Eurostan Billing Platform",
      problem: "Client quoted ₹40,000/month for Airtable (20 users)",
      solution: "Custom React UI + Supabase backend",
      result: "₹2,000/month total - 95% cost reduction",
      tech: "React, Supabase, Stripe API"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Bilingual Voice Assistant",
      problem: "Hospitality client needed 24/7 multilingual support",
      solution: "AI voice system for English/German interactions",
      result: "70% reduction in support tickets",
      tech: "OpenAI, Speech-to-Text, WebRTC"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Real Estate Buyer Agent CRM",
      problem: "Manual lead tracking across Excel & WhatsApp",
      solution: "Automated lead management & property matching",
      result: "3x faster lead response time",
      tech: "Next.js, PostgreSQL, AI matching"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="case-studies">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Project Wins
          </h2>
          <p className="text-xl text-gray-600">
            Real results for agency partners and their clients
          </p>
        </div>
        
        <div className="space-y-6">
          {cases.map((study, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-brand-teal bg-teal-50 p-3 rounded-lg">
                  {study.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Problem:</span>
                      <p className="text-gray-600">{study.problem}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Solution:</span>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-brand-teal">Result:</span>
                      <p className="text-gray-900 font-semibold">{study.result}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    Tech: {study.tech}
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
```

## src/components/Pricing.jsx
```jsx
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
```

## src/components/Contact.jsx
```jsx
import React from 'react';
import { Mail, Linkedin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-brand-dark text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Partner?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss how I can help you win and deliver more AI + automation projects
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/sunnyinsact/discovery"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-teal text-white rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            <Calendar className="mr-2" size={20} />
            Book Discovery Call
          </a>
          
          <a
            href="https://linkedin.com/in/sunny-kumar-872920156"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition"
          >
            <Linkedin className="mr-2" size={20} />
            Connect on LinkedIn
          </a>
          
          <a
            href="mailto:sunny@insact.vu"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition"
          >
            <Mail className="mr-2" size={20} />
            Email Me
          </a>
        </div>
        
        <div className="mt-12 text-sm text-gray-400">
          © 2025 InsAct by Sunny Kumar • insact.vu
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

## Deploy to Vercel (Free)
```bash
# Build the project
npm run build

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, connect to GitHub for auto-deploy
```

## Next Steps After Portfolio is Live:
1. Connect custom domain (insact.vu)
2. Create case study detail pages with screenshots
3. Add testimonials as you get them
4. Add Calendly widget for $100 discovery booking
5. Add Google Analytics to track visitors