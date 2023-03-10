import React from "react";

// import styles from './cart-context.module.css';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id = {}),
});

export default CartContext;
