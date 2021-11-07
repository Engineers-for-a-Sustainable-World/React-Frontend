import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/header/Logo.js";
import MyAccount from "../components/header/MyAccount.js";
import Sell from "../components/header/sell.js";
import ListingBoxC from  "../components/categorypage/listingBoxC.js";

const CategoryPageBooks = () => {
  return (
    <div className="categoryPage">
      <div className="header">
          <div className = "logoFilter">
            <Logo/>
          </div>
          <div className = "headerButtons">
            <Sell/>
            <MyAccount/>
          </div>
      </div>

      <div className="container">
        <h2 class="categoryPageName">Books</h2>
        <div className="box-container">
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
          <ListingBoxC description="hello"/>
        </div>
      </div>


    </div>
  )
}

export default CategoryPageBooks;
