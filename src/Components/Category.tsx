import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../Redux/App/hooks'
import { ICategoryProps } from "../Redux/UserSlice/UserSlice";
const Category = () => {
    const categories=useAppSelector(state=>state.app.category);
    const navigate=useNavigate();
  return (
    <div>
    {categories.length>0&&categories.map((e:ICategoryProps)=>(<div key={e._id} onClick={()=>{
        navigate(`/category/${e.name}`)}}>
        {e.name}
    </div>))}
        
    </div>
  )
}

export default Category