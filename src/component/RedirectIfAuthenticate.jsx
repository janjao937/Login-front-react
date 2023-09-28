import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

//use in router
//children = Login in router
//ดักว่า ถ้าlogin แล้ว ห้ามเข้าหน้า Login ใน router
const RedirectIfAuthenticated =({children})=>{
    const ctx = useContext(AuthContext);
 
    if(ctx.user)
    {
        return <Navigate to ="/"/> //navigate component
    }
    return children;
}
export default RedirectIfAuthenticated;