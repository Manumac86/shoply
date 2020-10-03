import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase/';
import Loader from '../components/loader/Loader';
import ProductList from '../components/productsList/productsList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items")
    const hottest = itemCollection.where('hottest', '==', true);
    hottest.get()
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No data!');
      }
      const queryItems = querySnapshot.docs.map(doc => doc.data())
      setItems(queryItems);
    })
    .catch((error) => {
      console.log("There was an error trying to get items: ", error);
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items])

  return (
    <div className="Home">
      <h2 className="Home-Title">Hottest Products</h2>
      {loading ? <Loader /> : <ProductList data={items} />}
    </div>
  );
}

export default Home;
