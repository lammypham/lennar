import React from "react";

const VectorCircle = ({ top, right }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="39"
    viewBox="0 0 26 39"
    fill="none"
    style={{ position: "absolute", top, right }}
  >
    <path
      d="M25.5925 26.5958C25.5925 36.3094 19.8736 40.9021 12.8765 36.9116C5.87832 32.8452 0.1604 21.7015 0.1604 11.912C0.1604 2.19842 5.87832 -2.3942 12.8765 1.59628C19.8736 5.66268 25.5925 16.8822 25.5925 26.5958Z"
      fill="url(#paint0_linear_2_1867)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2_1867"
        x1="25.5925"
        y1="19.4843"
        x2="0.1604"
        y2="19.4843"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#818CF8" />
        <stop offset="1" stop-color="#818CF8" />
      </linearGradient>
    </defs>
  </svg>
);

export default VectorCircle;
