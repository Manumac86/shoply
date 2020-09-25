import React from 'react';
import Card from '../card/Card';

const ProductList = ({ data }) => {
  return (
    <div className="Home-Products">
      {
        data.map(product => {
          const result = product.hottest ? <Card key={product.id} product={product}/>: '';
          return result;
        })
      }
    </div>
  )
}

export default ProductList;