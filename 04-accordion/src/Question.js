import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ( { title, info } ) => {
  return (
    <article className='question'>
      <header>
        <h3>
        {title}
        </h3>
        <button className='btn'>
          btn
        </button>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Question;
