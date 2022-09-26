import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/App/hooks"; 
import { addTofavoutite, fetchCategory, fetchProduct, removeProduct} from "../Redux/UserSlice/UserSlice"; 
import {Link, useParams} from "react-router-dom";
import { IproductItemsProps } from "../Redux/UserSlice/UserSlice";
import Category from "../Components/Category";
export const Home = () => {
    var Products=useAppSelector(state=>state.app.products); 
    const dispach=useAppDispatch();
    const {type}=useParams();
      if(type){
        Products=Products.filter((e)=>{
         return e["category"]===type
        })
      }

  useEffect(() => {
    dispach(fetchProduct())
    dispach(fetchCategory())
  }, [dispach]);

  const handelDelete=(data:IproductItemsProps["_id"])=>{
    dispach(removeProduct(data))
  }
  return <div>
    <Category/>
    <div className="grid grid-cols-4 gap-4">
    {Products.map((e:IproductItemsProps)=>{
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
            <p>Price:{e.price}</p>
            </Link>
            <div className="px-6 pt-4 pb-2 flex justify-between space-x-7">
            <button className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={()=>handelDelete(e._id)}>Delete</button>
            <button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
            onClick={()=>{dispach(addTofavoutite(e))}}>Add To favoutite</button>
            </div>
        </div>
    })}
    </div>
  </div>;
};