import React from 'react';

const SliderImageSkeleton = (props: any) => (
  <svg
    role="img"
    width={728}
    height={410}
    aria-labelledby="loading-aria"
    viewBox="0 0 728 410"
    preserveAspectRatio="none"
    {...props}
  >
    <title id="loading-aria">{"Loading..."}</title>
    <rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      style={{
        fill: 'url("#fill")',
      }}
    />
    <defs>
      <clipPath id="clip-path">
        <rect x={0} y={0} rx={20} ry={20} width={728} height={410} />
      </clipPath>
      <linearGradient id="fill">
        <stop offset={0.599964} stopColor="#d6d6d6" stopOpacity={1}>
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset={1.59996} stopColor="#f0f0f0" stopOpacity={1}>
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset={2.59996} stopColor="#d6d6d6" stopOpacity={1}>
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

export default SliderImageSkeleton;

