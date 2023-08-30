import React from 'react';
import './LoadingPage.css'; // Make sure to adjust the path to your CSS file

function LoadingPage() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default LoadingPage;
