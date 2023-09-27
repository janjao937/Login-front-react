import { useState } from "react"

export default function RegisterPage(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

    return (
        <section className='flex flex-col gap-4 bg-white p-4 rounded-md'>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Username</label>
          <input onChange={(e)=>setUsername(e.target.value)} value={username} className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />
        </div>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />
        </div>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Confirm Password</label>
          <input className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />
        </div>
       
        <button onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} className='bg-blue-800 px-3 py-1.5 text-white rounded-md'>Sign Up</button>
      </section>
    )
}