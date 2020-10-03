import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase';

import Card from '../components/card/Card';
import Loader from '../components/loader/Loader';

const Products = (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items")
    
    itemCollection.get()
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No data!');
      }
      setItems(querySnapshot.docs.map(doc => {
        return ({ id: doc.id, ...doc.data() });
      }));
    })
    .catch((error) => {
      console.log("There was an error trying to get items: ", error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);


  if (!loading) {
    console.log(items)
    return (
      <div className="Home">
        <h2 className="Home-Title">Products</h2> 
        <div className="Home-Products">
          {
            items.map(product => (
              <Card key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="Home">
        <h2 className="Home-Title">Products</h2> 
        <Loader />
      </div>
    );
  }
}

export default Products;