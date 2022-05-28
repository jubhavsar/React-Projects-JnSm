import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, index, weight, hex}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  console.log(bcg);
  return (
    <article className={`color`} style={{backgroundColor:`rgb(${bcg})` }}>
      <p>{weight}</p>
      <p>{hex}</p>
    </article>
  )
}

export default SingleColor
