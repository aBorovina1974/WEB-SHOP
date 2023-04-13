import React, {useCallback, useContext, useEffect, useState} from "react";
import styles from './Product.module.scss'
import {useParams} from "react-router-dom";
import {formatPrice, getRandomColors} from "../../utils/utils";
import ColorPalette from "../ColorPalette/ColorPalette";
import Sizes from "../Sizes/Sizes";
import ProductGallery from "./ProductGalery/ProductGallery";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import LikeIcon from "../UI/icons/LikeIcon";
import {CartContext} from "../../contexts/cart/CartContextProvider";
import {WishListContext} from "../../contexts/save/WishListContextProvider";

const Product = () => {
  const {cart, updateCart} = useContext(CartContext);
  const {wishList, updateWishList} = useContext(WishListContext);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [totalPrice, setTotalPrice] = useState('0 Eur');
  const colors = getRandomColors(3, 2);

  const getData = useCallback(async (productId) => {
    const responseProd = await fetch('https://web-shop-database-default-rtdb.firebaseio.com/products.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT');
    const products = await responseProd.json();

    if (products) {
      const foundProduct = products.find(f => f.id === parseInt(productId))
      setProduct(foundProduct);
      setTotalPrice(`${foundProduct.price.toLocaleString()} Eur`)

      if (foundProduct) {
        const responseCat = await fetch('https://web-shop-database-default-rtdb.firebaseio.com/categories.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT');
        const categories = await responseCat.json();
        if (categories) {
          setCategory(categories.find(f => f.id === foundProduct.category_id));
        }

        const responseBrands = await fetch('https://web-shop-database-default-rtdb.firebaseio.com/brands.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT');
        const brands = await responseBrands.json();
        if (brands) {
          setBrand(brands.find(f => f.id === foundProduct.brand_id));
        }
      }
    }
  }, [])

  useEffect(() => {
    getData(id);
  }, [id])

  const onSizeChange = (value) => {
    setSize(value)
  }

  const onColorChange = (value) => {
    setColor(value)
  }

  const onQuantityChange = (value) => {
    setQuantity(value)
    setTotalPrice(formatPrice(value, product.price));
  }

  if (!product || !category || !brand) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    updateCart({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      color: color,
      quantity: quantity,
      total: totalPrice,
      size: size
    });
  };

  function handleSaveToWishList() {
    updateWishList({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      color: color,
      quantity: quantity,
      total: totalPrice,
      size: size
    });
  }

  return (
    <div className={styles['product__container']}>
      <div className={styles.gallery}>
        <ProductGallery productName={product.image}/>
      </div>
      <div className={styles.basic}>
        <div className={styles.brand}>{brand.name}</div>
        <h1 className={styles.title}>{product.name}</h1>
        <h6 className={styles.subtitle}>Select color</h6>
        <ColorPalette colors={colors} onColorChange={onColorChange}/>
        <h6 className={styles.subtitle}>Select size (INCHES)</h6>
        <Sizes sizeList={product.sizes} onSizeChange={onSizeChange}/>
        <div className={styles.total}>
          <div>
            <h6 className={styles.subtitle}>Quantity</h6>
            <ProductQuantity onQuantityChange={onQuantityChange}/>
          </div>
          <div>
            <h6 className={styles.subtitle}>Price total</h6>
            <p className={styles.price}>{totalPrice}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.add} type="button"
                  onClick={handleAddToCart}>{cart && cart.length > 0 ? 'Update bag' : 'Add to bag'}</button>
          <button className={styles.save} type="button" onClick={handleSaveToWishList}>
            <LikeIcon height={12} width={14}/>
            <span className={styles['save-text']}>{wishList && wishList.length > 0 ? 'Update' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
