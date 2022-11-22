import React from 'react'

const BaseButton = ({className, text}) => {
  return (
    <button className='btn ${className}'>{text}</button>
  )
}

export default BaseButton;
