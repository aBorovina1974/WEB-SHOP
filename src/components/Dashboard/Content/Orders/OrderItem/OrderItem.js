import React from "react";
import styles from "./OrderItem.module.scss";
import { formatDate, formatPrice } from "../../../../../utils/utils";

const OrderItem = ({ order }) => {
  return (
    <table className={styles.table}>
      <caption>{`Order: ${order[0]}                       Date: ${formatDate(
        new Date(order[1].created)
      )}`}</caption>
      <thead>
        <tr>
          <th>Product</th>
          <th>Size</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {order[1].order.map((item) => (
          <tr key={crypto.randomUUID()}>
            <td data-cell="product">{item.name}</td>
            <td data-cell="size">{item.size}</td>
            <td data-cell="color">{item.color}</td>
            <td data-cell="quantity">{item.quantity}</td>
            <td data-cell="price">
              {formatPrice(item.price, "EUR", "symbol")}
            </td>
            <td data-cell="total">
              {formatPrice(item.total, "EUR", "symbol")}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">{`Subtotal: ${formatPrice(
            order[1].subtotal,
            "EUR",
            "symbol"
          )}`}</td>
          <td colSpan="2">{`Tax: ${formatPrice(
            order[1].tax,
            "EUR",
            "symbol"
          )}`}</td>
          <td colSpan="2">{`Total: ${formatPrice(
            order[1].total,
            "EUR",
            "symbol"
          )}`}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderItem;
