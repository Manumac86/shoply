import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState([]);

  const sumaProductos = (id) => {
    console.log('SUMA PRODUCTOS CONTEXT!', id);
  }

  return (
    <CartContext.Provider value={[cart, setCart, item, setItem, sumaProductos]}>
      {props.children}
    </CartContext.Provider>
  )
}