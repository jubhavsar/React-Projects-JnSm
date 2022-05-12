import React from 'react';

const Categories = ({filterItems}) => {
  return (
    <div className="button-container">
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>Breakfast</button>
    </div>

  );
};

export default Categories;
