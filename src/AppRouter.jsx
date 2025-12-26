import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import DemographicEnrichmentPage from './pages/products/DemographicEnrichmentPage';
import FootfallAnalysisPage from './pages/products/FootfallAnalysisPage';
import CampaignAnalyticsPage from './pages/products/CampaignAnalyticsPage';
import GeospatialDataPage from './pages/expertise/GeospatialDataPage';
import POIEnrichmentPage from './pages/expertise/POIEnrichmentPage';
import FootfallSystemsPage from './pages/expertise/FootfallSystemsPage';
import CampaignMeasurementPage from './pages/expertise/CampaignMeasurementPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import { ROUTES } from './utils/constants';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        {/* Products */}
        <Route path={ROUTES.PRODUCTS.DEMOGRAPHIC_ENRICHMENT} element={<DemographicEnrichmentPage />} />
        <Route path={ROUTES.PRODUCTS.FOOTFALL_ANALYSIS} element={<FootfallAnalysisPage />} />
        <Route path={ROUTES.PRODUCTS.CAMPAIGN_ANALYTICS} element={<CampaignAnalyticsPage />} />

        {/* Expertise */}
        <Route path={ROUTES.EXPERTISE.GEOSPATIAL_DATA} element={<GeospatialDataPage />} />
        <Route path={ROUTES.EXPERTISE.POI_ENRICHMENT} element={<POIEnrichmentPage />} />
        <Route path={ROUTES.EXPERTISE.FOOTFALL_SYSTEMS} element={<FootfallSystemsPage />} />
        <Route path={ROUTES.EXPERTISE.CAMPAIGN_MEASUREMENT} element={<CampaignMeasurementPage />} />

        {/* Company */}
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CAREERS} element={<CareersPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
