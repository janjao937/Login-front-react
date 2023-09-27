import { useState } from "react";
import axios from "axios";

import Joi from "joi";

//Create Joi Schema for Validate Register input 
const schema = Joi.object({
  username:Joi.string().min(3).max(30).required(),
  password:Joi.string().min(6).alphanum().required(),
  confirmPassword:Joi.string().valid(Joi.ref("password")).required()
});

export default function RegisterPage(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [errorState,setErrorState] = useState({username:"",password:"",confirmPassword:""});
  

  const OnSubmitHandler = (event)=>{
    event.preventDefault();
    //Validate input //by joi
    const {value,error} =schema.validate({username,password,confirmPassword}, {abortEarly:false});//abortEarly true ผิดแล้วไม่เช็คต่อ false ผิดแล้วเช็คต่อ

    if(error){
      // console.dir(validate.error);
      const tempError= {username:"",password:"",confirmPassword:""};
      for(let i of error.details){
        tempError[i.path[0]] = i.message;
      }
    
      return setErrorState(tempError);
    }

    setErrorState({username:"",password:"",confirmPassword:""});
    //ชื่อcolum ใน server prisma:username
    axios.post("http://localhost:5555/auth/register",{
      username,
      password
    }).then((res)=>{
      window.alert("Success registration");
    }).catch(err=>console.log(err))
  }
    return (
        <form onSubmit={OnSubmitHandler} className='flex flex-col gap-4 bg-white p-4 rounded-md'>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Username</label>
          <input onChange={(e)=>setUsername(e.target.value)} value={username} className={`w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 border
          ${errorState.username?"border-red-600 focus:ring-red-600":"focus:ring-blue-600"}' type='text`} />
          {errorState.username?<span className="text-red-500 text-x">{errorState.username}</span>:<></>}
        </div>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} className={`w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 border
          ${errorState.password?"border-red-600 focus:ring-red-600":"focus:ring-blue-600"}' type='text`} />

          {errorState.password?<span className="text-red-500 text-x">{errorState.password}</span>:<></>}
        </div>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Confirm Password</label>
          <input onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} className={`w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 border
          ${errorState.confirmPassword?"border-red-600 focus:ring-red-600":"focus:ring-blue-600"}' type='text`}  />

          {errorState.confirmPassword?<span className="text-red-500 text-x">{errorState.confirmPassword}</span>:<></>}
        </div>

        <button onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} className='bg-blue-800 px-3 py-1.5 text-white rounded-md'>Sign Up</button>
      </form>
    )
}