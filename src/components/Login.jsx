import { useState } from "react"
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/userslice";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../Utils/constant";
import { toggle } from "../redux/toggle";

const Login = ()=>{

    const [Isemail , setEmail] = useState('')
    const [Ispassward , setpassward] = useState('')
    const [Error , setError] = useState('')
 

   
    const navigate = useNavigate()
const dispatch = useDispatch()

   function Handlesignup(e){
              e.preventDefault()
          dispatch(toggle(true))
          navigate('/signup')
   }
 
    const HandleLogin = async(e)=>{
      e.preventDefault();
    try{
  const result = await axios.post(BaseUrl+'/login',{
    email:Isemail,
    passward:Ispassward
  } ,{withCredentials:true});
      console.log(result.data);
      dispatch(addUsers(result.data))
      navigate('/')
    }catch(err){
      setError(err?.response?.data || 'Error : Invalid Cradentials')
  console.error(err?.response?.message);
    }
    }
    return(
        
  <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
     
          <input
            type="email"
            placeholder="Enter your email"
            className="login-input"
            value={Isemail}
            required
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={Ispassward}
            required
            onChange={(e)=>setpassward(e.target.value)}
          />
        
          <p className="text-red-500 -translate-y-3 text-center">{Error}</p>
          <button onClick={HandleLogin}  className="login-button">
            Log in
          </button>  
        </form>
        <p className="login-footer">
        Don’t have an account? <a style={{cursor:'pointer'}} onClick={Handlesignup}>signup</a>
        </p>
      </div>
    </div>
    )
}

export default Login