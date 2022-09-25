import { useEffect } from "react";
import React from 'react'
import { useParams } from 'react-router-dom';
import {  fetchDetails } from "../Redux/UserSlice/UserSlice";
import { useAppDispatch, useAppSelector } from "../Redux/App/hooks";
const Details = () => {
  const  singledata=useAppSelector(state=>state.app.details);
    const dispach=useAppDispatch();
    const { id }  = useParams();  
    useEffect(() => {
        dispach(fetchDetails(`${id}`))
      }, [dispach,id]);
  return (
    <div>
      {singledata["_id"]}
    </div>
  )
}

export default Details