import React, {useState} from "react";
import styles from './ProductQuantity.module.scss'

const ProductQuantity = ({onQuantityChange, prodQuantity = 1}) => {
  const [quantity, setQuantity] = useState(prodQuantity);

  const handleQuantity = (type) => {
    switch (type) {
      case '+':
        setQuantity(prev => {
          const result = prev + 1;
          onQuantityChange(result);
          return result;
        });
        break;
      case '-':
        setQuantity(prev => {
          if (prev > 1) {
            const result = prev - 1;
            onQuantityChange(result);
            return result;
          }
          onQuantityChange(prev);
          return prev;
        })
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => handleQuantity('-')} className={styles.char}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={() => handleQuantity('+')} className={styles.char}>+</button>
    </div>
  );
};

export default ProductQuantity;
