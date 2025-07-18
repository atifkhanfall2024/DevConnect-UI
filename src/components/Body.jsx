import { Outlet, useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import axios from "axios"
import { BaseUrl } from "../Utils/constant"
import { useDispatch } from "react-redux"
import { addUsers } from "../redux/userslice"
import { useEffect } from "react"
import Error from "../Utils/Error"


const Body = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
       const Logininfo = async()=>{
         try{
             const result = await axios.get(BaseUrl + '/profile/view',{
               withCredentials:true
             })
         
              dispatch(addUsers(result.data))
         }
        
         catch(err){
         if(err.status === 401){
            navigate('/login')
         }else{
            <Error/>
         }
            console.log(err);
         }
       }

       useEffect(()=>{
        Logininfo()
       },[])
    return(
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}

export default Body