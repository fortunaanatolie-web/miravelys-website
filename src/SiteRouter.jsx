import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import App from './App';
import { isSupportedPublicLanguage } from './i18n/publicSiteCopy';

const LegalDocumentPage = lazy(() => import('./pages/LegalDocumentPage'));
const FounderStoryPage = lazy(() => import('./pages/FounderStoryPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const MiraScribePage = lazy(() => import('./pages/mirascribe/MiraScribePage'));
const MiraScribeSupportPage = lazy(() => import('./pages/mirascribe/MiraScribeSupportPage'));
const MiraScribePrivacyPage = lazy(() => import('./pages/mirascribe/MiraScribePrivacyPage'));
const MiraScribeLegalPage = lazy(() => import('./pages/mirascribe/MiraScribeLegalPage'));
const MiraScribeAcknowledgementsPage = lazy(() => import('./pages/mirascribe/MiraScribeAcknowledgementsPage'));

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

/**
 * MiraScribe routes are intentionally NOT in the localized /:lang/* tree.
 * These are canonical App Store URLs that must never redirect unexpectedly.
 */
const mirascribeRoutes = [
  { path: '/products', element: <ProductsPage /> },
  { path: '/mirascribe', element: <MiraScribePage /> },
  { path: '/mirascribe/support', element: <MiraScribeSupportPage /> },
  { path: '/mirascribe/privacy', element: <MiraScribePrivacyPage /> },
  { path: '/mirascribe/legal', element: <MiraScribeLegalPage /> },
  { path: '/mirascribe/acknowledgements', element: <MiraScribeAcknowledgementsPage /> },
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
          {/* MiraScribe canonical routes — no language prefix, never redirected */}
          {mirascribeRoutes.map(r => (
            <Route key={`ms-${r.path}`} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

