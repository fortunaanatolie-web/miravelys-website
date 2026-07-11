import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CookieConsent from './components/CookieConsent';
import LegalDocumentPage from './pages/LegalDocumentPage';
import FounderStoryPage from './pages/FounderStoryPage';
import SupportPage from './pages/SupportPage';
import FAQPage from './pages/FAQPage';

const routes = [
  { path: '/', element: <App /> },
  { path: '/story', element: <FounderStoryPage /> },
  { path: '/origin', element: <FounderStoryPage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/faq', element: <FAQPage /> },
  { path: '/legal-notice', element: <LegalDocumentPage /> },
  { path: '/user-agreement', element: <LegalDocumentPage /> },
  { path: '/terms', element: <LegalDocumentPage /> },
  { path: '/privacy-policy', element: <LegalDocumentPage /> },
  { path: '/privacy', element: <LegalDocumentPage /> },
  { path: '/cookies', element: <LegalDocumentPage /> },
];

export default function SiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(r => (
          <Route key={`root-${r.path}`} path={r.path} element={r.element} />
        ))}
        {routes.map(r => (
          <Route 
            key={`lang-${r.path}`} 
            path={`/:lang${r.path === '/' ? '' : r.path}`} 
            element={r.element} 
          />
        ))}
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
