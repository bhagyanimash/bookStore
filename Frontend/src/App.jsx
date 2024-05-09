import React from "react";
import Home from "./home/Home";
import Shop from "./components/Shop";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Home />
      <Shop /> */}
      <div className="dark:bg-slate-900 dark:text-white"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
