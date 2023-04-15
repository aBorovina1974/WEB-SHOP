import Product1 from "../../../assets/products/Product1.png";
import Product2 from "../../../assets/products/Product2.png";
import Product3 from "../../../assets/products/Product3.png";
import Product4 from "../../../assets/products/Product4.png";
import Product5 from "../../../assets/products/Product5.png";
import Product6 from "../../../assets/products/Product6.png";
import Product7 from "../../../assets/products/Product7.png";
import Product8 from "../../../assets/products/Product8.png";

const ProductImage = ({ productName, height }) => {
  let productImage;

  switch (productName) {
    case "Product1":
      productImage = Product1;
      break;
    case "Product2":
      productImage = Product2;
      break;
    case "Product3":
      productImage = Product3;
      break;
    case "Product4":
      productImage = Product4;
      break;
    case "Product5":
      productImage = Product5;
      break;
    case "Product6":
      productImage = Product6;
      break;
    case "Product7":
      productImage = Product7;
      break;
    case "Product8":
      productImage = Product8;
      break;
    default:
      productImage = Product1;
  }

  return <img src={productImage} height={height} alt={productName} />;
};

export default ProductImage;
