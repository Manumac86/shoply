import React from 'react';

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
      style={{color: `${props.styled ? 'red' : 'black'}`}} 
      onClick={props.onClick}
    >{props.sign}</button>
  );
};

export default Button;
