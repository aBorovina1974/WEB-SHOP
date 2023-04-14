import React from "react";

const PlusIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path fill="#828282" d="M0 7h16v2H0z" />
      <path fill="#828282" d="M9 0v16H7V0z" />
    </svg>
  );
};

export default PlusIcon;
