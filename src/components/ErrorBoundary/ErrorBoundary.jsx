import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const resetError = () => {
    setHasError(false);
  };

  if (hasError) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Oops! Something went wrong.</h1>
        <p>We're sorry for the inconvenience. Please try refreshing the page or come back later.</p>
        <button onClick={resetError}>Try Again</button>
      </div>
    );
  }

  return (
    <React.ErrorBoundary fallback={<div>Loading...</div>} onError={handleError}>
      {children}
    </React.ErrorBoundary>
  );
};

export default ErrorBoundary;