import { useEffect } from "react";
import React from 'react'
import { useParams } from 'react-router-dom';
import {  fetchDetails } from "../Redux/UserSlice/UserSlice";
import { useAppDispatch, useAppSelector } from "../Redux/App/hooks";
const Details = () => {
  const  Details=useAppSelector(state=>state.app.details);
    const dispach=useAppDispatch();
    const { id }  = useParams();  
    useEffect(() => {
        dispach(fetchDetails(`${id}`))
      }, [dispach,id]);
  return (
    <div  className="max-w-sm m-auto rounded overflow-hidden shadow-lg hover:bg-whitesmoke-500">
    <img className="w-full h-2/4"  src={Details.avatar} alt="img"/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{Details.name}</div>
    <p className=" text-base text-violet-500">
      {Details.description}
    </p>
    <p className="text-gray-700 text-base">
     Price:{Details.price}
    </p>
    </div>
    <p>{Details.name}</p>
</div>
  )
}

export default Details