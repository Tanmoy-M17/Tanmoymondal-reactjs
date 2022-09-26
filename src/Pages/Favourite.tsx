import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks';
import { IproductItemsProps, removeFavorite } from '../Redux/UserSlice/UserSlice';

const Favourite = () => {
  const navigate=useNavigate();
  const favoutite=useAppSelector(state=>state.app.favourites);
  const dispacth=useAppDispatch();
  return (    <div>
  <div className="grid grid-cols-4 gap-4">
  {favoutite.map((e:IproductItemsProps)=>{
      return  <div key={e._id} className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-whitesmoke-500">
          <Link to={`/${e._id}`}> 
          <img className="w-full h-2/4"  src={e.avatar} alt="img"/>
          <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{e.name}</div>
          <p className="text-gray-700 text-base italic truncate"> {e.description}</p>
          </div>
          <p className="font-mono text-gray-700">Price:<span className="italic text-green-600">{e.price}</span></p>
          </Link>
          <div className="px-6 pt-4 pb-2 flex justify-between space-x-7">
            <button className="bg-transparent m-auto hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={()=>{dispacth(removeFavorite(e._id))}}>Remove From Favourite</button>         
            </div>
      </div>
  })}
  </div>
  <button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
            onClick={()=>navigate("/")}>&laquo; Back To Home</button>
  </div> 
  )
}

export default Favourite
