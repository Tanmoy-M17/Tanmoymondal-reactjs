import React, { useState } from "react"; 
import { useForm } from "react-hook-form"; 
import { useAppDispatch } from "../Redux/App/hooks";
import { CreateProduct, IFormInput } from "../Redux/UserSlice/UserSlice";
 
const Create = () => { 
  const {register,handleSubmit}=useForm<IFormInput>(); 
  const dispach=useAppDispatch()
  const [Form, setForm] = useState<IFormInput>({ 
  "name":"", 
  "price":0, 
  "description":"", 
  "category":"", 
  "developerEmail":"tanmoymondal17e@gmail.com", 
  "avatar":""
}); 
 
  const onSubmit = (data: IFormInput) => { 
    setForm(data); 
    dispach(CreateProduct(data))
  }; 
 
  return ( 
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center"> 
      <div className="max-w-md w-full mx-auto"> 
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center"> 
        Create Product 
        </div> 
      </div> 
       
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border-gray-300"> 
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}> 
            <div> 
                <label htmlFor="" className=" skew-y-6">Name</label> 
            <input  
            {...register("name")} 
              type="text" className="w-full p-2 border border-gray-300" required /> 
            </div> 
            <div> 
                <label htmlFor="" className=" skew-y-6">Price</label> 
            <input 
            {...register("price")} 
             type="number"  
             name="price" required 
             className="w-full p-2 border border-gray-300"/> 
            </div> 
            <div> 
                <label htmlFor="" className=" skew-y-6">Category</label> 
            <select  
            {...register("category")} 
             name="category" id="" className=" w-full p-2 bg-gray-300 rounded mt-1"> 
                {/* <option value="">Select product Category</option> */}
                <option value="Electronics">Electronics</option> 
                <option value="Clothing">Clothing</option> 
                <option value="Accessories">Accessories</option> 
                <option value="Furniture">Furniture</option> 
                <option value="Hobby">Hobby</option> 
            </select> 
            </div> 
            <div> 
                <label htmlFor="" className=" skew-y-6">Description</label> 
            <input type="text"  
             {...register("description")} 
             name="description" required
             className="w-full p-2 border border-gray-300" /> 
            </div> 
            <div> 
                <label htmlFor="" className=" skew-y-6">Avatar</label> 
            <input type="text"  
            {...register("avatar")} 
             name="avatar" required 
             className="w-full p-2 border border-gray-300" /> 
            </div> 
            <div> 
                <label htmlFor="" className=" skew-y-6">Devoloper</label> 
            <input type="text" 
            value={Form.developerEmail}
           {...register("developerEmail")} 
             name="developerEmail" required className="w-full p-2 border border-gray-300"
             /> 
            </div> 
            <div> 
                <button className=" w-full py-2  px-4 bg-blue-600 hover:bg-blue-700 text-white">Submit</button> 
            </div> 
        </form> 
      </div> 
    </div> 
  ); 
}; 
 
export default Create;