import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("./components/pages/Home/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

const ErrorBoundaryComponent = lazy(() => import("./components/ErrorBoundary/ErrorBoundary"));

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
        <Suspense fallback={<div>...Loading</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;