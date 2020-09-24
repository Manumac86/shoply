import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="Home">
      <h2 className="Home-Title">Cart</h2>
      <span>Items in cart: {cart.length}</span>
      <br></br>
      <span>Total Price: 0</span>
    </div>
  )
}

export default Cart;
