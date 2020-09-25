import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import Input from "../components/input/Input";

import Button from '../components/button/Button';

function Product({ data }) {
  const { id } = useParams();
  const [size, setSize] = useState('');
  const [showProduct, setShowProduct] = useState(false);

  const [cart, setCart, sumaProductos] = useContext(CartContext);


  const onKeyDown = e => {
    e.preventDefault();
    let value = e.key;
    const notAllowedChars = new RegExp('[aeiou]');
    if (notAllowedChars.test(value)) {
      e.stopPropagation();
    } else {
      setSize(size + value);
    }
  }

  const handleSizeChange = (event) => {
    event.preventDefault();
    // `event` es un Synthetic Event de React. 
    // Puedo acceder al evento original con `event.nativeEvent`.
    console.log(event.nativeEvent.target.value);
    // Pero React ya tiene los valores más comunes definidos dentro de este event.
    setSize(event.target.value);
  }

  useEffect(() => {
    console.log(size)
  }, [size]);

  useEffect(() => {
    const onScroll = e => {
      // e.preventDefault();
      const newShowProduct = window.scrollY > 50;
      showProduct !== newShowProduct && setShowProduct(newShowProduct);
    }

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  });

  const renderProduct = () => (
    
    <p className='Product-Description'>
      {data[id].description}
    </p>
  )

  // Set the Cart Context with the added product
  const addToCart = () => {
    const product = data[id];
    console.log(product);
    setCart(currentCart => [...currentCart, product])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <div className="Product">
        <h2 className="Product-Title">{data[id].title}</h2>
        {showProduct && renderProduct()}
        <img 
          alt='product'
          className='Product-Image'
          src={data[id].img}
        />
      </div>
      <Button styled={true} onClick={addToCart} sign={'Add to Cart'}/>
    </>
  );
}

export default Product;