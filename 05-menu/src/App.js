import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App() {  
  const [menuItems, setMenuItems] = useState(items);
  const [caregories, setCategories] = useState(allCategories);

  
 

  const filterItems = (category) => {
   if(category === 'all') {
    return setMenuItems(items);
   }

   const newItems = items.filter((item) => item.category === category)
    return setMenuItems(newItems);

  }

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h3>Our menu</h3>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={caregories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
