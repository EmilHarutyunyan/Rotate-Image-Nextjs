
import { Btn } from "./Button.styles";
import React from 'react'

const Button = (props) => {
  const { cssName, logo, text, handleClick } = props
  return (
    <Btn className={cssName} onClick={handleClick} {...props} >
      {logo}
      {text}
    </Btn>
  );
}

export default Button