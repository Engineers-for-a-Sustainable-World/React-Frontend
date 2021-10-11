import React from 'react';
import "./categoryName.css";

const CategoryName = (props) => {
  return (
    <div>
      <h1 className="categoryName">{props.name}</h1>
    </div>
  )
}

export default CategoryName;
