import React from "react";

const IconQuote: React.FC<{ isBlue?: boolean }> = ({ isBlue }) => {
  const fillColor = isBlue ? "#FFFFFF" : "#043873";
  console.log("isBlue", isBlue);
  console.log("fillColor", fillColor);
  return (
    <svg
      width="86"
      height="62"
      viewBox="0 0 86 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85.9999 12.7016L83.2409 0.015625C63.3755 0.92565 49.605 9.19097 49.605 33.4977V61.4759H84.3104V26.3115H71.1666C71.1668 18.5122 76.0603 13.925 85.9999 12.7016Z"
        fill={fillColor}
      />
      <path
        d="M36.3949 12.702L33.6359 0.0159912C13.7705 0.926016 0 9.19157 0 33.4983V61.4765H34.7068V26.3118H21.5548C21.5548 18.5126 26.4483 13.9253 36.3949 12.702Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default IconQuote;
