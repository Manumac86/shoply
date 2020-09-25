import React, { useState, useEffect } from 'react';

import Loader from '../components/loader/Loader';
import ProductList from '../components/productsList/productsList';

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(props.data);
      setLoading(false);
    }, 1000);
  }, [props.data]);

  return (
    <div className="Home">
      <h2 className="Home-Title">Hottest Products</h2>
      {loading ? <Loader /> : <ProductList data={data} />}
    </div>
  );
}

export default Home;
