import React from 'react';
import Logo from "../components/header/Logo.js";
import MyAccount from "../components/header/MyAccount.js";
import Sell from "../components/header/sell.js";
import ListingBox from "../components/homepage/ListingBox.js";
import Filter from "../components/header/filter.js";
import CategoryName from "../components/homepage/categoryName.js";
import More from "../components/homepage/more.js";


const Home = () => {
  return (
    <div className = "homepage">
      <div className = "header">
        <div className = "logoFilter">
          <Logo/>
          <Filter/>
        </div>
        <div className = "headerButtons">
          <Sell/>
          <MyAccount/>
        </div>
      </div>
      <div className = "category-header">
        <CategoryName name="Furniture"/>
        <More/>
      </div>
      <div className = "row-container">
        <ListingBox/>
        <ListingBox/>
        <ListingBox/>
        <ListingBox/>
      </div>
      <div className = "category-header">
        <CategoryName name="Clothing"/>
        <More/>
      </div>
      <div className = "row-container">
        <ListingBox/>
        <ListingBox/>
        <ListingBox/>
        <ListingBox/>
      </div>
      <div className = "category-header">
        <CategoryName name="Electronics"/>
        <More/>
      </div>
      <div className = "row-container">
        <ListingBox/>
        <ListingBox/>
        <ListingBox/>
        <ListingBox/>
      </div>
    </div>

  )
}

export default Home;
