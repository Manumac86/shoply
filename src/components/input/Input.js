import React from 'react';

function Input(props) {
  return (
    <input onChange={props.handleChange} onKeyDown={props.handleKeyDown} value={props.count}/>
  )
}

export default Input;