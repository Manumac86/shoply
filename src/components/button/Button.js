import React from 'react';
import './Button.css'

/**
 * The Button component.
 *
 * @param  {Object}    props
 *
 * @return {JSX}       The Button to render.
 */
function Button(props) {
  return (
    <button 
      className="ButtonLink"
      style={{color: `${props.styled ? 'white' : 'black'}`}} 
      onClick={props.onClick}
    >{props.sign}</button>
  );
};

export default Button;
