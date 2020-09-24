import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const sumaPrecios = () => {} 
  return (
    <CartContext.Provider value={[cart, setCart], sumaPrecios}>
      {props.children}
    </CartContext.Provider>
  )
}