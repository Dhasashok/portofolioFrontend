import React from 'react';

const ASHOK_LETTERS = [
  {
    id: 'a',
    path: 'M 25,82 L 50,18 L 75,82 M 35,56 L 65,56',
    delay: '0s',
  },
  {
    id: 's',
    path: 'M 72,26 C 62,18 36,18 30,30 C 22,46 78,46 72,66 C 66,82 36,82 26,74',
    delay: '0.15s',
  },
  {
    id: 'h',
    path: 'M 26,18 L 26,82 M 26,50 L 74,50 M 74,18 L 74,82',
    delay: '0.3s',
  },
  {
    id: 'o',
    path: 'M 50,18 C 64,18 76,32 76,50 C 76,68 64,82 50,82 C 36,82 24,68 24,50 C 24,32 36,18 50,18 Z',
    delay: '0.45s',
  },
  {
    id: 'k',
    path: 'M 28,18 L 28,82 M 72,20 L 30,50 L 74,82',
    delay: '0.6s',
  },
];

export default function PageLoader({ fadeOut }) {
  return (
    <div
      className={`page-loader-overlay ${fadeOut ? 'fade-out' : ''}`}
      aria-hidden={fadeOut}
      role="status"
      aria-label="Loading Ashok Dhas portfolio"
    >
      <div className="loader-inner">
        <div className="ashok-loader">
          {/* Shared SVG Gradient Definition matching site purple theme */}
          <svg height="0" width="0" viewBox="0 0 100 100" className="hidden-defs" aria-hidden="true">
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="100"
                x2="100"
                y2="0"
                id="ashok-grad"
              >
                <stop stopColor="#6d28d9" offset="0%" />
                <stop stopColor="#8b5cf6" offset="50%" />
                <stop stopColor="#c4b5fd" offset="100%" />
              </linearGradient>
            </defs>
          </svg>

          {/* Letter by letter SVG drawing */}
          {ASHOK_LETTERS.map((item) => (
            <svg
              key={item.id}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 100 100"
              className="loader-letter"
              aria-hidden="true"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="9"
                stroke="url(#ashok-grad)"
                d={item.path}
                className="letter-dash"
                style={{ animationDelay: item.delay }}
                pathLength="360"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
