import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Shop from "./components/Shop";
import Signup from "./components/Signup"; 
import Login from "./components/Login";


function App() {
  return (

    <div className="dark:bg-slate-900 dark:text-white">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;