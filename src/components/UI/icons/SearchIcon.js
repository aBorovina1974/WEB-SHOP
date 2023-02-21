import React from "react";

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="7.30769"
        cy="7.30769"
        r="6.10769"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M13.6406 13.6409L18.9996 18.9998"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
};

export default SearchIcon;
