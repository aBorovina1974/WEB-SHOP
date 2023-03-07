import React from "react";

const LikeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="22"
      fill="none"
      viewBox="0 0 23 22"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="2.4"
        d="m10.71 18.903.79.692.79-.692 1.231-1.078.002-.001.038-.033c2.148-1.873 4.029-3.514 5.361-5.081 1.352-1.591 2.278-3.263 2.278-5.214 0-3.234-2.64-5.696-5.875-5.696-1.4 0-2.751.477-3.825 1.281A6.424 6.424 0 0 0 7.675 1.8C4.44 1.8 1.8 4.262 1.8 7.496c0 1.95.926 3.623 2.278 5.214 1.332 1.567 3.213 3.208 5.361 5.08l.038.034.002.001 1.23 1.078Z"
      />
    </svg>
  );
};

export default LikeIcon;
