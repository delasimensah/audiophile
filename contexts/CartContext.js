import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const shipping = 0;
  const vat = 0;

  const addToCart = (itemToAdd) => {
    const { id } = itemToAdd;

    //check if item exists
    const exists = cart.find((item) => item.id === id);

    //if it exists increase quantity
    if (Boolean(exists)) {
      const newCart = cart.map((item) => {
        if (item.id === exists.id) {
          return {
            ...item,
            quantity: item.quantity + itemToAdd.quantity,
          };
        }
        return item;
      });

      setCart(newCart);
      return;
    }

    setCart((currentCart) => [...currentCart, itemToAdd]);
  };

  const increaseQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    //remove product if quantity is 0
    const product = cart.find((product) => product.id === id);

    if (product.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));

      return;
    }

    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(newCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  const value = {
    shipping,
    vat,
    cart,
    addToCart,
    resetCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
