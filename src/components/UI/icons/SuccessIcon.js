import React from "react";

const SuccessIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
      {...props}
    >
      <path fill="#27AE60" d="M0 0h10v10H0z" />
      <path stroke="#fff" d="M2 4.5 4.5 7l4-4" />
    </svg>
  );
};

export default SuccessIcon;
