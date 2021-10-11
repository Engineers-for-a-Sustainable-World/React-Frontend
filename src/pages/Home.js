import React from 'react';
import Logo from "../components/Logo.js";
import MyAccount from "../components/MyAccount.js";
import Sell from "../components/sell.js";
import ListingBox from "../components/homepage/ListingBox.js";
import Filter from "../components/homepage/filter.js";
import CategoryName from "../components/homepage/categoryName.js";
import More from "../components/homepage/more.js";


const Home = () => {
  return (
    <div className = "homepage">
      <div className = "header">
        <Logo/>
        <Sell/>
        <MyAccount/>
        <Filter/>
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
