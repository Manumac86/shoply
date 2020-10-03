import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { getFirestore } from '../firebase';
import Input from "../components/input/Input";
import Loader from '../components/loader/Loader';
import { NavLink } from 'react-router-dom';

import Button from '../components/button/Button';

function Product({ data }) {
  const { id } = useParams();
  const [size, setSize] = useState('');
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  
  const [cart, setCart] = useContext(CartContext);

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
    setLoading(true)
    const db = getFirestore()
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(id);

    item.get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("Item does not exist!");
        return true;
      }
      const dataQuery = doc.data();
      console.log(dataQuery);
      setProduct({ id: doc.id, ...doc.data() });
    })
    .catch((error) => {
      console.log('Error searching item: ', error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [id]);

  useEffect(() => {
    console.log(size)
  }, [size]);


  const renderProduct = () => (
    
    <p className='Product-Description'>
      {product.description}
    </p>
  )

  // Set the Cart Context with the added product
  const addToCart = () => {
    setCart(currentCart => [...currentCart, product])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return(
    <>
      {loading && <Loader />}
      {!loading &&
        <div className="Product" style={{"display": "flex", "justifyContent": "center"}}>
          <h2 className="Product-Title">{product.title}</h2>
          <img 
            alt='product'
            className='Product-Image'
            src={product.img}
          />
          {renderProduct()}
          <Button
            styled={true}
            onClick={addToCart}
            sign={'Add to Cart'}
          />
          <NavLink
            to={'/cart'}
            className="ButtonLink"
          >{cart.length} items Added. Go to Checkout</NavLink>
        </div>
      }
    </>
  );
}

export default Product;