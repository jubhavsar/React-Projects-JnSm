import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
const[color,setColor] = useState('');
const[error,setError] = useState(false);
const[list,setList] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Hi");
}
  return (
    <>
    <section className='container'>
    <h3>color generator</h3>
    </section>
    <section className='colors'>
    <h3>list goes here</h3>
    </section>
    </>
  )
}

export default App
