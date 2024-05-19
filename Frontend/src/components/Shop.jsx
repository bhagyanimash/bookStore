import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import list from "../../public/list.json"


function Shop() {
  console.log(list);
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <Shop/>
      </div>
      <Footer/>
      <h1>books</h1>
    </>
  );
}

export default Shop;
