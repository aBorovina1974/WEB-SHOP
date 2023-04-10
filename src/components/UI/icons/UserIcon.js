import React from "react";

const UserIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      {...props}
    >
      <path
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.243 19.5v-2c0-1.06-.405-2.078-1.125-2.828a3.764 3.764 0 0 0-2.715-1.172h-7.68a3.764 3.764 0 0 0-2.715 1.172A4.086 4.086 0 0 0 1.883 17.5v2m11.52-14c0 2.21-1.72 4-3.84 4-2.121 0-3.84-1.79-3.84-4s1.719-4 3.84-4c2.12 0 3.84 1.79 3.84 4Z"
      />
    </svg>
  );
};

export default UserIcon;
