import React, { useMemo, useState } from "react";
import ProductQuantity from "../components/Product/ProductQuantity/ProductQuantity";

const useQuantity = (product) => {
  const [quantity, setQuantity] = useState(product ? product.quantity : 1);
  const [notificationKey, setNotificationKey] = useState(0);

  const onQuantityChange = (type) => {
    switch (type) {
      case "+":
        setQuantity((prev) => {
          return prev + 1;
        });
        break;
      case "-":
        setQuantity((prev) => {
          if (prev > 1) {
            return prev - 1;
          }
          return prev;
        });
        break;
      default:
        break;
    }
    setNotificationKey((prevKey) => prevKey + 1);
  };

  const quantityComponent = useMemo(
    () => (
      <ProductQuantity
        key={notificationKey}
        onQuantityChange={onQuantityChange}
        quantity={quantity}
      />
    ),
    [quantity]
  );

  return { quantityComponent, quantity };
};

export default useQuantity;
