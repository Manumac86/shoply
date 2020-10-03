import React from 'react';
import { NavLink } from 'react-router-dom';

import './Card.css';

const Card = (props) => {
  return (
    <div className='Card'>
      <NavLink to={`/product/${props.product.id}`}>
        <img
          alt='product'
          className="Card-Image"
          src={props.product.img}
        />
        <div className="Card-Footer">
          <h4 className="Card-Price">${props.product.price}</h4>
          <p className="Card-Title">{props.product.title}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;