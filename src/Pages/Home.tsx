import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"; 
import { addTofavoutite, fetchCategory, fetchProduct, removeProduct} from "../store/products/productSlice"; 
import {Link, useParams} from "react-router-dom";
import { IproductItemsProps } from "../store/products/productSlice";
import Category from "../Components/Category";
export const Home = () => {
    var Products=useAppSelector(state=>state.app.products);
    var favoutite=useAppSelector(state=>state.app.favourites);
    console.log("faa",favoutite);
    
    const dispach=useAppDispatch();
    const {type}=useParams();
      if(type){
        Products=Products.filter((e)=>{
         return e["category"]===type
        })
        console.log("fp",Products)
      }
  useEffect(() => {
    dispach(fetchProduct())
    dispach(fetchCategory())
  }, [dispach]);

  return <div>
    <Category/>
    {Products.map((e:IproductItemsProps)=>{
        return  <div key={e._id}>
            <Link to={`/${e._id}`}> 
            <img src={e.avatar} alt="img"></img>
            <p>{e.name}</p>
            </Link>
            <button onClick={()=>{dispach(addTofavoutite(e))}}>Add To favoutite</button>
            <button onClick={()=>{dispach(removeProduct(`${e._id}`))}}>Delete</button>
        </div>
    })}
  </div>;
};