import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [caregories, setCategories] = useState([]);


  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h3>Our menu</h3>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
