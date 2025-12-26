import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/insact-logo.svg"
                alt="InsAct Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">InsAct</span>
            </div>
            <p className="text-gray-400 text-sm">
              Deterministic spatial foundations for enterprise data warehouses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.PRODUCTS.DEMOGRAPHIC_ENRICHMENT}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  Demographic Enrichment
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.PRODUCTS.FOOTFALL_ANALYSIS}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  Footfall Analysis
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.PRODUCTS.CAMPAIGN_ANALYTICS}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  Campaign Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.EXPERTISE.GEOSPATIAL_DATA}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  Geospatial Data at Scale
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.EXPERTISE.POI_ENRICHMENT}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  POI Enrichment
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.EXPERTISE.FOOTFALL_SYSTEMS}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  Footfall Systems
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.EXPERTISE.CAMPAIGN_MEASUREMENT}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  Campaign Measurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  to={ROUTES.ABOUT}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CAREERS}
                  className="text-gray-400 hover:text-brand-teal transition text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
            <div className="space-y-2">
              <a
                href="mailto:hello@insact.vu"
                className="flex items-center text-gray-400 hover:text-brand-teal transition text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@insact.vu
              </a>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Bihar, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} InsAct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
