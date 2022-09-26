import { useEffect } from "react";
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {  fetchDetails } from "../Redux/UserSlice/UserSlice";
import { useAppDispatch, useAppSelector } from "../Redux/App/hooks";
const Details = () => {
  const  Details=useAppSelector(state=>state.app.details);
  const Loading=useAppSelector(state=>state.app.status);
  const navigate=useNavigate();
    const dispach=useAppDispatch();
    const { id }  = useParams();  
    useEffect(() => {
        dispach(fetchDetails(`${id}`))
      }, [dispach,id]);

      if(Loading==="loading"){
        return (
          <div className="flex items-center justify-center space-x-2 ">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
        )
      }
      else {   
  return (
    <div  className="max-w-sm m-auto rounded overflow-hidden shadow-lg hover:bg-whitesmoke-500">
    <img className="w-full h-2/4"  src={Details.avatar} alt="img"/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{Details.name}</div>
    <p className=" text-base text-violet-500">
      {Details.description}
    </p>
    <p className="text-gray-700 text-base font-mono">
     Price: <span className="italic text-green-600">{Details.price}</span>
    </p>
    </div>
    <button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
            onClick={()=>navigate("/")}>&laquo; Back To Home</button>
</div>
  )
 }
}

export default Details