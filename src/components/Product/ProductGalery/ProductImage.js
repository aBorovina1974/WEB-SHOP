import Product1 from "../../../assets/products/products-images/Product1.jpg";

import Product2 from "../../../assets/products/products-images/Product2.jpg";

import Product3 from "../../../assets/products/products-images/Product3.jpg";

import Product4 from "../../../assets/products/products-images/Product4.jpg";

import Product5 from "../../../assets/products/products-images/Product5.png";

import Product6 from "../../../assets/products/products-images/Product6.jpg";

import Product7 from "../../../assets/products/products-images/Product7.jpg";

import Product8 from "../../../assets/products/products-images/Product8.jpg";

import Product9 from "../../../assets/products/products-images/Product9.jpg";

import Product10 from "../../../assets/products/products-images/Product10.png";

import Product11 from "../../../assets/products/products-images/Product11.png";

import Product12 from "../../../assets/products/products-images/Product12.jpg";

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
    case "Product9":
      productImage = Product9;
      break;
    case "Product10":
      productImage = Product10;
      break;
    case "Product11":
      productImage = Product11;
      break;
    case "Product12":
      productImage = Product12;
      break;
    default:
      productImage = Product1;
  }

  return <img src={productImage} height={height} alt={productName} />;
};

export default ProductImage;
