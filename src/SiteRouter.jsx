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
const MiraVoxisPage = lazy(() => import('./pages/miravoxis/MiraVoxisPage'));
const MiraVoxisSupportPage = lazy(() => import('./pages/miravoxis/MiraVoxisSupportPage'));
const MiraVoxisPrivacyPage = lazy(() => import('./pages/miravoxis/MiraVoxisPrivacyPage'));

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

/** Product routes are canonical App Store/support URLs and are intentionally
 * outside the localized /:lang/* tree. They must never redirect through a
 * locale route or inherit the wrong product identity. */
const productRoutes = [
  { path: '/products', element: <ProductsPage /> },
  { path: '/mirascribe', element: <MiraScribePage /> },
  { path: '/mirascribe/support', element: <MiraScribeSupportPage /> },
  { path: '/mirascribe/privacy', element: <MiraScribePrivacyPage /> },
  { path: '/mirascribe/legal', element: <MiraScribeLegalPage /> },
  { path: '/mirascribe/acknowledgements', element: <MiraScribeAcknowledgementsPage /> },
  { path: '/miravoxis', element: <MiraVoxisPage /> },
  { path: '/miravoxis/support', element: <MiraVoxisSupportPage /> },
  { path: '/miravoxis/privacy', element: <MiraVoxisPrivacyPage /> },
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
          {routes.map(route => (
            <Route key={`root-${route.path}`} path={route.path} element={route.element} />
          ))}
          {routes.map(route => (
            <Route
              key={`lang-${route.path}`}
              path={`/:lang${route.path === '/' ? '' : route.path}`}
              element={<LocalizedRoute>{route.element}</LocalizedRoute>}
            />
          ))}
          {productRoutes.map(route => (
            <Route key={`product-${route.path}`} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
