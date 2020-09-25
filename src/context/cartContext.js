import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const sumaProductos = () => {}
  return (
    <CartContext.Provider value={[cart, setCart, sumaProductos]}>
      {props.children}
    </CartContext.Provider>
  )
}