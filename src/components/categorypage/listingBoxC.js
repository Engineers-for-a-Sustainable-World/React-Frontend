import React from 'react';
import ReactDOM from 'react-dom';
import "./listingBoxC.css";
import "./categorypage.css";

const ListingBoxC = (props) => {
  return (
    <div className="listingBoxC">
      <h1 className="description">{props.description}</h1>
    </div>
  )
}

export default ListingBoxC;
