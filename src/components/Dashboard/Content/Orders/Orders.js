import React, { useContext, useEffect, useMemo } from "react";
import styles from "./Orders.module.scss";
import useFetch from "../../../../hooks/useFetch";
import { UserContext } from "../../../../contexts/user/UserContextProvider";
import OrderItem from "./OrderItem/OrderItem";
import NoData from "../../../NoData/NoData";
import Spinner from "../../../Spinner/Spinner";

const Orders = () => {
  const { data: orders, get: getOrders, isLoading, error } = useFetch();
  const { user } = useContext(UserContext);

  useEffect(() => {
    getOrders(
      "https://web-shop-database-default-rtdb.firebaseio.com/orders/.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );
  }, []);

  const userOrders = useMemo(() => {
    let result = [];
    if (user && orders) {
      result = Object.entries(orders).filter(
        (order) => order[1].user === user.email
      );
    }
    return result;
  }, [user, orders]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.orders}>
      {userOrders.length > 0 ? (
        userOrders.map((order) => <OrderItem key={order[0]} order={order} />)
      ) : (
        <NoData text="You have not any orders" />
      )}
    </div>
  );
};

export default Orders;
