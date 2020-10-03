import React from 'react';
import Card from '../card/Card';

const ProductList = (props) => {
  return (
    <div className="Home-Products">
      {
        props.data.map(product => {
          const result = product.hottest ? <Card key={product.id} product={product}/>: '';
          return result;
        })
      }
    </div>
  )
}

export default ProductList;