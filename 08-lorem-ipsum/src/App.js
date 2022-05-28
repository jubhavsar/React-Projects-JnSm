import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data);
  }
  return (
  <section className='section-center'>
    <h3>Tired of boring lorem ipsome</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraph:</label>
      <input 
        type="number" 
        id='amount' 
        name='amount' 
        value={count} 
        onChange={(e) => e.target.value}/>
      <button className='btn' type='submit'>generate</button>
    </form>
    <article className='lorel-text'>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Ipsa incidunt eum mollitia, iure minima quod.</p>  
     <p>Eligendi doloribus inventore perferendis officia, 
      tempore commodi magni ad quaerat qui, minus ipsa aperiam sed?</p> 
    </article>
  </section>
    )
}

export default App;
