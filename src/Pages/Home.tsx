import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"; 
import { fetchCategory, fetchProduct } from "../store/products/productSlice"; 
import {Link, useParams} from "react-router-dom";
import { IproductItemsProps } from "../store/products/productSlice";
import Category from "../Components/Category";
export const Home = () => {
    var Products=useAppSelector(state=>state.app.products);
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
    <div>
    <Category/>
    {Products.map((e:IproductItemsProps)=>{
        return <Link to={`/${e._id}`}> <div key={e._id}>
            <img src={e.avatar} alt="img"></img>
            <p>{e.name}</p>
        </div>
        </Link>
    })}
    </div>
  </div>;
};