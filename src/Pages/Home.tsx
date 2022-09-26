import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/App/hooks"; 
import { addTofavoutite, fetchCategory, fetchDetails, fetchProduct, removeProduct} from "../Redux/UserSlice/UserSlice"; 
import {useNavigate,useParams} from "react-router-dom";
import { IproductItemsProps } from "../Redux/UserSlice/UserSlice";
import Category from "../Components/Category";
export const Home = () => {
  const navigate=useNavigate();
    var Products=useAppSelector(state=>state.app.products); 
    const Loading=useAppSelector(state=>state.app.status);
    console.log("Status",Loading);
     
    const dispatch=useAppDispatch();
    const {type}=useParams();
      if(type){
        Products=Products.filter((e)=>{
         return e["category"]===type
        })
      }

  useEffect(() => {
    dispatch(fetchProduct())
    dispatch(fetchCategory())
  }, [dispatch]);

  const handelDelete=(data:IproductItemsProps["_id"])=>{
    dispatch(removeProduct(data))
  }
  const Handelfetch=(id:IproductItemsProps["_id"])=>{
    navigate(`/${id}`)
    dispatch(fetchDetails(id))
  }
  if(Loading==="loading"){
    return (
      <div className="m-8 ...">
      <div className="flex items-center justify-center space-x-2">
  <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
</div>
    )
  }
  else {
  return <div>
    <div 
    // className='fixed z-50 w-full px-5 py-2'
    >
        <Category />
    </div>  
    <div className="grid grid-cols-4 gap-4 mt-1">
    {Products.map((e:IproductItemsProps)=>{
        return  <div key={e._id} className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-whitesmoke-500">
            <img className="w-full h-2/4"  src={e.avatar} alt="img"  onClick={()=>Handelfetch(e._id)}/>
            <div className="px-6 py-4"  onClick={()=>Handelfetch(e._id)}>
            <div className="font-bold text-xl mb-2">{e.name}</div>
            <p className=" text-base truncate italic">
              {e.description}
            </p>
            <p className="font-mono text-gray-700">Price:<span className="italic text-green-600">{e.price}</span></p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between space-x-7">
            <button className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={()=>handelDelete(e._id)}>Delete</button>
            <button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
            onClick={()=>{dispatch(addTofavoutite(e))}}>Add To favoutite</button>
            </div>
        </div>
    })}
    </div>
  </div>
  } 
};