import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // to get hex color
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})` }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
