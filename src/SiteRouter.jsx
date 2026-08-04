import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import App from './App';
import { isSupportedPublicLanguage } from './i18n/publicSiteCopy';

const LegalDocumentPage = lazy(() => import('./pages/LegalDocumentPage'));
const FounderStoryPage = lazy(() => import('./pages/FounderStoryPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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

function LocalizedRoute({ children }) {
  const { lang } = useParams();
  return isSupportedPublicLanguage(lang) ? children : <NotFoundPage />;
}

function RouteFallback() {
  return <main className="route-loading" aria-live="polite" aria-busy="true" />;
}

export default function SiteRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {routes.map(r => (
            <Route key={`root-${r.path}`} path={r.path} element={r.element} />
          ))}
          {routes.map(r => (
            <Route
              key={`lang-${r.path}`}
              path={`/:lang${r.path === '/' ? '' : r.path}`}
              element={<LocalizedRoute>{r.element}</LocalizedRoute>}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
