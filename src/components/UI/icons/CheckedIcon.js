import React from "react";

const CheckedIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="12"
      fill="none"
      viewBox="0 0 16 12"
      {...props}
    >
      <path stroke="#000" strokeWidth="2" d="M1 4.6 6.25 10 15 1" />
    </svg>
  );
};

export default CheckedIcon;
