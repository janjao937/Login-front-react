import { useEffect } from "react";
import Form from "../component/Form";
import List from "../component/List";
import axios from "axios";

export default function HomePage(){
    useEffect(()=>{
        axios.get("http://localhost:5555/todo",{
            headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}
        }).then(res=>{
            console.log(res.data);
        }).catch(err=>console.log(err));
    },[]);

    return (
        <section className="flex flex-col gap-4">
            <Form/>
            <List/>
        </section>
    );
}