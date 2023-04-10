import React from "react";

const CartWishListIcon = (props) => {
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
        fill="#000"
        stroke="#000"
        strokeWidth=".2"
        d="M12.497 16.392c-1.304-1.173-2.38-2.141-3.131-3.012-.755-.874-1.166-1.633-1.166-2.383 0-1.034.78-1.807 1.825-1.807.809 0 1.595.522 1.87 1.223l.025.063h1.16l.025-.063c.275-.7 1.061-1.223 1.87-1.223 1.046 0 1.825.773 1.825 1.807 0 .75-.412 1.51-1.166 2.383-.753.871-1.83 1.84-3.137 3.012Zm-.064 1.682.067.06.067-.06.797-.719c1.415-1.27 2.597-2.333 3.424-3.336.828-1.005 1.312-1.961 1.312-3.022 0-1.74-1.377-3.097-3.125-3.097-.947 0-1.857.42-2.475 1.084A3.422 3.422 0 0 0 10.025 7.9C8.277 7.9 6.9 9.257 6.9 10.997c0 1.06.483 2.017 1.312 3.022.827 1.003 2.01 2.065 3.424 3.336l.797.72Z"
      />
    </svg>
  );
};

export default CartWishListIcon;
