import React from "react";

const ErrorIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
      {...props}
    >
      <path fill="#EB5757" d="M0 0h10v10H0z" />
      <path stroke="#fff" d="m2.5 2.5 5 5m-5 0 5-5" />
    </svg>
  );
};

export default ErrorIcon;
