import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks'
import { ICategoryProps } from "../store/products/productSlice";
const Category = () => {
    const categories=useAppSelector(state=>state.app.category);
    const navigate=useNavigate();
  return (
    <div>
    {categories.length>0&&categories.map((e:ICategoryProps)=>(<div onClick={()=>{
        navigate(`/category/${e.name}`)}}>
        {e.name}
    </div>))}
        
    </div>
  )
}

export default Category