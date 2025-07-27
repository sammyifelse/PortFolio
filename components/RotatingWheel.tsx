// components/RotatingWheel.tsx
"use client";
import React, { useState, useEffect } from 'react';

// The component now uses a state to prevent hydration errors.
const wheelStyles = `
  .rotating-wheel-container {
    width: 200px;
    height: 200px;
  }

  .rotating-wheel-svg {
    width: 100%;
    height: 100%;
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .wheel-text {
    font-family: 'Times New Roman', Times, serif; 
    /* THE FIX: A smaller font size that allows the text to be stretched without distortion */
    font-size: 18px; 
    font-weight: bold;
    fill: hsl(var(--foreground));
    /* Letter spacing is now automatically handled by the textLength attribute */
    text-transform: uppercase;
  }

  .wheel-track {
    stroke: hsl(var(--foreground));
    stroke-width: 1.5px;
    fill: none;
  }

  .wheel-center-dot {
    fill: hsl(var(--foreground));
  }
`;

// Using the correct text from the reference image, with a final dot for spacing
const wheelText = "THINK • DEVELOP • FIX • REPEAT •";

const RotatingWheel = () => {
  // This state ensures the component only renders on the client, fixing hydration errors.
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render anything on the server
  }

  return (
    <>
      <style>{wheelStyles}</style>
      <div className="rotating-wheel-container">
        <svg className="rotating-wheel-svg" viewBox="0 0 200 200">
          <circle className="wheel-track" cx="100" cy="100" r="90" />
          <circle className="wheel-track" cx="100" cy="100" r="60" />
          
          {/* This invisible path has a circumference of ~471px */}
          <path
            id="wheelTextPath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          
          {/* We rotate the text's starting point to the top of the circle */}
          <text className="wheel-text" transform="rotate(90, 100, 100)">
            {/* THE FIX: We force the text to stretch across the entire 471px path length */}
            <textPath href="#wheelTextPath" textLength="471">
              {wheelText}
            </textPath>
          </text>

          <circle className="wheel-center-dot" cx="100" cy="100" r="20" />
        </svg>
      </div>
    </>
  );
};

export default RotatingWheel;
