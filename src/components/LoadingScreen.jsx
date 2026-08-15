import React from 'react';

export default function LoadingScreen({ isFadingOut }) {
  return (
    <div className={`global-loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="glass-loading-panel">
        <img src="/academy_logo.png" alt="Loading..." className="loading-logo" fetchpriority="high" decoding="async" />
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
