import React from "react";

const CartCloseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#E6F1FA" d="M0 0h24v24H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.6"
        d="m8.843 8.842 7.145 7.145m-.002-7.145-7.145 7.145"
      />
    </svg>
  );
};

export default CartCloseIcon;
