import React from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks';
import { IproductItemsProps, removeFavorite } from '../Redux/UserSlice/UserSlice';

const Favourite = () => {
  const favoutite=useAppSelector(state=>state.app.favourites);
  const dispacth=useAppDispatch();
  console.log("faa",favoutite);
  return (    <div className="grid grid-cols-4 gap-4">
  {favoutite.map((e:IproductItemsProps)=>{
      return  <div key={e._id} className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-whitesmoke-500">
          <Link to={`/${e._id}`}> 
          <img className="w-full h-2/4"  src={e.avatar} alt="img"/>
          <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{e.name}</div>
          <p className="text-gray-700 text-base truncate">
            {e.description}
          </p>
          </div>
          <p>{e.name}</p>
          </Link>
          <div className="px-6 pt-4 pb-2 flex justify-between space-x-7">
            <button className="bg-transparent m-auto hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={()=>{dispacth(removeFavorite(`${e._id}`))}}>Remove From Favourite</button>         
            </div>
      </div>
  })}
  </div>
    
  )
}

export default Favourite
