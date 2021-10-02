import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.js";
import MyAccount from "../components/MyAccount.js";
import Sell from "../components/sell.js";
import ListingBox1 from "../components/homepage/ListingBox1.js";
import ListingBox2 from "../components/homepage/ListingBox2.js";
import ListingBox3 from "../components/homepage/ListingBox3.js";
import ListingBox4 from "../components/homepage/ListingBox4.js";
import Filter from "../components/homepage/filter.js";
import Furniture from "../components/homepage/furniture.js";
import More from "../components/homepage/more.js";


const Home = () => {
  return (
    <div>
      <Logo/>
      <div>
        <Sell/>
        <MyAccount/>
        <Filter/>
      </div>
      <div>
        <Furniture/>
        <More/>
        <ListingBox1/>
      </div>
      <div>
        <ListingBox2/>
      </div>
      <div>
        <ListingBox3/>
      </div>
      <div>
        <ListingBox4/>
      </div>
    </div>

  )
}

export default Home;
