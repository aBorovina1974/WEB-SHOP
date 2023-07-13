import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Product.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  calcTotalPrice,
  formatPrice,
  createColorArray,
  createSizeArray,
  isProductInWishListExists,
  markAvailableSizes,
  sizes,
} from "../../utils/utils";
import ColorPalette from "../ColorPalette/ColorPalette";
import ProductGallery from "./ProductGalery/ProductGallery";
import LikeIcon from "../UI/icons/LikeIcon";
import { CartContext } from "../../contexts/cart/CartContextProvider";
import { WishListContext } from "../../contexts/save/WishListContextProvider";
import Spinner from "../Spinner/Spinner";
import Sizes from "../Sizes/Sizes";
import MinusIcon from "../UI/icons/MinusIcon";
import PlusIcon from "../UI/icons/PlusIcon";
import ProductQuantity from "./ProductQuantity/ProductQuantity";

const Product = () => {
  const { id } = useParams();
  const { cart, updateCart } = useContext(CartContext);
  const { wishList, updateWishList } = useContext(WishListContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [allSizes, setAllSizes] = useState([]);
  const [allColors, setAllColors] = useState([]);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getData(id);
    setAllSizes(createSizeArray(sizes));
  }, [id]);

  useEffect(() => {
    if (product) {
      setAllColors(createColorArray(product.colors, 1));
      setAllSizes(markAvailableSizes(allSizes, product.sizes));
    }
  }, [product]);

  const getData = useCallback(async (productId) => {
    const responseProd = await fetch(
      "https://web-shop-database-default-rtdb.firebaseio.com/products.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );
    const products = await responseProd.json();

    if (products) {
      const foundProduct = products.find((f) => f.id === parseInt(productId));
      setProduct(foundProduct);

      setTotalPrice(foundProduct.price);

      if (foundProduct) {
        const responseCat = await fetch(
          "https://web-shop-database-default-rtdb.firebaseio.com/categories.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
        );
        const categories = await responseCat.json();
        if (categories) {
          setCategory(
            categories.find((f) => f.id === foundProduct.category_id)
          );
        }

        const responseBrands = await fetch(
          "https://web-shop-database-default-rtdb.firebaseio.com/brands.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
        );
        const brands = await responseBrands.json();
        if (brands) {
          setBrand(brands.find((f) => f.id === foundProduct.brand_id));
        }
      }
    }
  }, []);

  const isProductInCartExists = (cartArr, currentProduct) => {
    const temp = {
      id: currentProduct.id,
      color: allColors.find((f) => f.selected === true)?.color,
      size: allSizes.find((f) => f.selected === true)?.size,
    };
    for (let i = 0; i < cartArr.length; i++) {
      if (
        cartArr[i].id === temp.id &&
        cartArr[i].color === temp.color &&
        cartArr[i].size === temp.size
      ) {
        return true;
      }
    }
    return false;
  };

  const onSizeChange = (id) => {
    setAllSizes((prev) =>
      prev
        .map((s) => {
          return {
            ...s,
            selected: false,
          };
        })
        .map((size) => {
          if (size.id === id) {
            return {
              ...size,
              selected: true,
            };
          }
          return size;
        })
    );
  };

  const onColorChange = (id) => {
    setAllColors((prev) =>
      prev
        .map((p) => {
          return {
            ...p,
            selected: false,
          };
        })
        .map((color) => {
          if (color.id === id) {
            return {
              ...color,
              selected: true,
            };
          }
          return color;
        })
    );
  };

  const onQuantityChange = (type) => {
    switch (type) {
      case "+":
        setQuantity((prev) => {
          const result = prev + 1;
          setTotalPrice(calcTotalPrice(result, product.price));
          return result;
        });
        break;
      case "-":
        setQuantity((prev) => {
          if (prev > 1) {
            const result = prev - 1;
            setTotalPrice(calcTotalPrice(result, product.price));
            return result;
          }
          setTotalPrice(calcTotalPrice(prev, product.price));
          return prev;
        });
        break;
      default:
        break;
    }
  };

  const handleUpdateCart = () => {
    updateCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: quantity,
      total: totalPrice,
      color: allColors.find((f) => f.selected === true)?.color,
      size: allSizes.find((f) => f.selected === true)?.size,
    });
  };

  function handleUpdateWishList() {
    updateWishList({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: quantity,
      total: totalPrice,
      color: allColors.find((f) => f.selected === true)?.color,
      size: allSizes.find((f) => f.selected === true)?.size,
    });
  }

  const goToCart = () => {
    navigate("/cart");
  };

  if (!product || !category || !brand) {
    return <Spinner />;
  }

  return (
    <>
      <div className={styles["product__container"]}>
        <div className={styles.gallery}>
          <ProductGallery productName={product.image} />
        </div>
        <div className={styles.basic}>
          <div className={styles.title}>
            <div className={styles.brand}>{brand.name}</div>
            <h1 className={styles.name}>{product.name}</h1>
          </div>
          <h6 className={styles.subtitle}>Select color</h6>
          <ColorPalette colors={allColors} onColorChange={onColorChange} />
          <h6 className={styles.subtitle}>Select size (INCHES)</h6>
          <Sizes sizes={allSizes} onSizeChange={onSizeChange} />
          <div className={styles.total}>
            <div>
              <h6 className={styles.subtitle}>Quantity</h6>
              <ProductQuantity
                onQuantityChange={onQuantityChange}
                quantity={quantity}
              />
            </div>
            <div>
              <h6 className={styles.subtitle}>Price total</h6>
              <p className={styles.price}>{formatPrice(totalPrice, "EUR")}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            {cart && isProductInCartExists(cart, product) ? (
              <button className={styles.add} type="button" onClick={goToCart}>
                Go to cart
              </button>
            ) : (
              <button
                className={styles.add}
                type="button"
                onClick={handleUpdateCart}
              >
                Add to bag
              </button>
            )}
            <button
              className={styles.save}
              type="button"
              onClick={handleUpdateWishList}
            >
              <LikeIcon height={12} width={14} />
              <span className={styles["save-text"]}>
                {wishList && isProductInWishListExists(wishList, product.id)
                  ? "Update"
                  : "Save"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles["details__container"]}>
        <div className={styles.details}>
          <div className={styles.title}>
            <h2>Details</h2>
            <button
              className={styles.button}
              onClick={() => setShowDetails((prev) => !prev)}
            >
              {!showDetails ? <PlusIcon /> : <MinusIcon />}
            </button>
          </div>
          <div className={showDetails ? styles.content : styles["no-content"]}>
            <hr className={styles.divider} />
            <h6 className={styles.subtitle}>About product</h6>
            <p className={styles.description}>{product.description}</p>
            <h6 className={styles.subtitle}>Shipping</h6>
            <p className={styles.description}>
              {product.shipping.description} {product.shipping.method}{" "}
              {formatPrice(product.shipping.price, "EUR")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
