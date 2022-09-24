import React from 'react'
import { Routes, Route } from "react-router-dom";
import Details from '../Pages/Details';
import { Home } from '../Pages/Home';
const Allrout = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<Details/>}></Route>
        <Route path="/category/:type" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default Allrout