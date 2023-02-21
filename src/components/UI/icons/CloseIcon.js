import React from "react";
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L16 16M16 1L1 16" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
};

export default CloseIcon;
