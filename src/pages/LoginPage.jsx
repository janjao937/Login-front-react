import { useState } from "react"

export default function LoginPage(){
    const [input,setInput] = useState({username:"",password:""});
 

    return (
        <section className='flex flex-col gap-4 bg-white p-4 rounded-md'>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Username</label>
         

          <input 
          name="username"//add name prop to event
          onChange={(event)=>setInput({...input,[event.target.name]:event.target.value})}  /* {username=:"",password:""} =>setInput=>{{username=:"",password:"",username:"value"} =>{username:"value",password:""} */
          value={input.username} 
          className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />

        </div>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Password</label>
          <input onChange={(event)=>setInput({...input,password:event.target.value})} value={input.password} className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />
        </div>
        <button className='bg-blue-800 px-3 py-1.5 text-white rounded-md'>Sign Up</button>
      </section>
    )
}