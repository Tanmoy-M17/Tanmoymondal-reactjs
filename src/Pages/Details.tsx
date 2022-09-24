import { useEffect } from "react";
import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchDetails } from "../store/products/productSlice";
import { useAppDispatch } from "../store/hooks";
const Details = () => {
    const dispach=useAppDispatch();
    const { id }  = useParams(); 
    
    
    useEffect(() => {
        dispach(fetchDetails(`${id}`))
      }, [dispach,id]);
  return (
    <div>{id}</div>
  )
}

export default Details