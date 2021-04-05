import React from "react";
import CartProvider from "./CartContext";

const Provider = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Provider;
