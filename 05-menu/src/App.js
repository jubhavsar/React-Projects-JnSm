import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [caregories, setCategories] = useState([]);

  const filterItems = (category) => {

   if(category === all) {
     setMenuItems(items);
   }
   
   const newItems = items.filter((item) => item.category === category)
     setMenuItems(newItems);

  }

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h3>Our menu</h3>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
