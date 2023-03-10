import React from "react";

import CartContext from "./cart-context";
// import styles from './CartProvider.module.css';

const CartProvider = (props) => {
  const addItemToCarHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCarHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
