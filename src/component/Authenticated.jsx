import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

//use in router
//children = HomePage in router
//ดักว่า ถ้าไม่ login ห้ามเข้าหน้า Home ใน router
const Authenticated =({children})=>{
    const ctx = useContext(AuthContext);
 
    if(!ctx.user)
    {
        return <Navigate to ="/login"/> //navigate component
    }
    return children;
}
export default Authenticated;