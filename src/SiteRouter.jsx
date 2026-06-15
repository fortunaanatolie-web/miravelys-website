import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CookieConsent from './components/CookieConsent';
import LegalDocumentPage from './pages/LegalDocumentPage';
import FounderStoryPage from './pages/FounderStoryPage';

export default function SiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/story" element={<FounderStoryPage />} />
        <Route path="/origin" element={<FounderStoryPage />} />
        <Route path="/legal-notice" element={<LegalDocumentPage />} />
        <Route path="/user-agreement" element={<LegalDocumentPage />} />
        <Route path="/privacy-policy" element={<LegalDocumentPage />} />
        <Route path="/cookies" element={<LegalDocumentPage />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
