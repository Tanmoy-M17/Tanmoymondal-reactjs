import React from 'react'
import { Routes, Route } from "react-router-dom";
import Create from '../Pages/Create';
import Details from '../Pages/Details';
import Favourite from '../Pages/Favourite';
import { Home } from '../Pages/Home';
const Allrout = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<Details/>}></Route>
        <Route path="/category/:type" element={<Home/>}></Route>
        <Route path="/favorite" element={<Favourite/>}></Route>
        <Route path="/Create" element={<Create/>}></Route>
      </Routes>
    </div>
  )
}

export default Allrout