import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <div className="section">
      <div className="title">
        <h1>
          <span>/</span>reviews
        </h1>
      </div>
      <div className="section-center">
        {people.map((personData, personIndex) => {
          const { id, name, title, image, quote } = personData;
        })}
      </div>
    </div>
  );
}

export default App;
