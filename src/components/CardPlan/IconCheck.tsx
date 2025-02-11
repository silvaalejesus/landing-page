import React from "react";

const IconCheck: React.FC<{ isHighlight?: boolean }> = ({ isHighlight }) => {
  const strokeColor = isHighlight ? "#FFE492" : "#212529";
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon">
        <path
          id="Vector"
          d="M19.0059 10.1288V10.9571C19.0047 12.8985 18.3761 14.7875 17.2137 16.3424C16.0512 17.8974 14.4173 19.0349 12.5556 19.5854C10.6938 20.1358 8.70404 20.0697 6.88294 19.3969C5.06183 18.7241 3.507 17.4807 2.45034 15.852C1.39367 14.2233 0.891777 12.2967 1.01952 10.3595C1.14725 8.42234 1.89778 6.57832 3.15915 5.10252C4.42053 3.62671 6.12517 2.59818 8.01885 2.17033C9.91253 1.74248 11.8938 1.93823 13.6671 2.72838"
          stroke={strokeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M19.0058 3.75462L10.0029 12.7665L7.302 10.0657"
          stroke={strokeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default IconCheck;
