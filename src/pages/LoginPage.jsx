import axios from "axios";
import { useContext,useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function LoginPage(){
    const [input,setInput] = useState({username:"",password:""});
    const ctx = useContext(AuthContext);//{user,setUser}
 
    const OnChangeInputHandler=(event)=>{
      //{username=:"",password:""} =>setInput=>{{username=:"",password:"",username:"value"} =>{username:"value",password:""}
      return setInput({...input,[event.target.name]:event.target.value});
    }

    const OnSubmitFormHandle =(event)=>{
      event.preventDefault();
      axios.post("http://localhost:5555/auth/login",input)
      .then((res)=>{
        console.log(res.data);
        console.log(res.data.accessToken);//get response jwt access token from backend
        localStorage.setItem("accessToken",res.data.accessToken);//get token to localStorage
        ctx.setUser(true);
      })
      .catch((err)=>window.alert("Login fail"));
    }

    return (
        <form onSubmit={OnSubmitFormHandle} className='flex flex-col gap-4 bg-white p-4 rounded-md'>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Username</label>
         
          <input 
          name="username"//add name prop to event
          onChange={OnChangeInputHandler}  
          value={input.username} 
          className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />

        </div>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Password</label>
          <input 
          name="password"
          onChange={OnChangeInputHandler} 
          value={input.password} 
          className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />
        </div>
        <button className='bg-blue-800 px-3 py-1.5 text-white rounded-md'>Sign Up</button>
      </form>
    )
}