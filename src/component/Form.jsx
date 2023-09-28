import { useState } from "react";
import axios from "axios";

const Form =()=>{
    const [input,setInput] = useState("");
    const OnSumitHandler =(e)=>{
        e.preventDefault();
        //Validate Input 

        //RequestConfig Doc axios: https://axios-http.com/docs/req_config
        //param ตัวที่3 คือ Requestconfig
        //accessToken ตั้งที่ Login page ใน localStorage
        axios.post("http://localhost:5555/todo",{title:input},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}})
        .then(res=>{
            // console.log(res);
            console.log("Success");
            setInput("");
        })
        .catch(err=>console.log(err));

    }
    return(
    <form onSubmit={OnSumitHandler} className="flex gap-2">
        <input onChange={(event)=>setInput(event.target.value)} value={input} type="text" className="outline-none px-3 py-1.5 border rounded-md ring-black flex-grow"/>
        <button className="bg-blue-800 px-3 py-1.5 text-white rounded-md ">Create</button>
    </form>
);
}

export default Form;