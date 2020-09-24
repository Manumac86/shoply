import React, { useState, useEffect } from 'react';

import Card from '../components/card/Card';
import Loader from '../components/loader/Loader';

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

  if (loading) {
    return (
      <div className="Home">
        <h2 className="Home-Title">Hottest Products</h2> 
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="Home">
        <h2 className="Home-Title">Hottest Products</h2> 
        <div className="Home-Products">
          {
            data.map(product => {
              const result = product.hottest ? <Card key={product.id} product={product}/>: '';
              return result;
            })
          }
        </div>
      </div>
    );
  }

}

export default Home;
