import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserCard from "./Card"
import axios from "axios"
import { BaseUrl } from "../Utils/constant"
import { useNavigate } from "react-router-dom"
import { addUsers } from "../redux/userslice"

const EditProfile = ()=>{
   const dispatch = useDispatch()
   const navigate = useNavigate()
    const user = useSelector((store)=>store.user)
     const [skills , setskills] = useState(user.skills || '')
    const [firstName , setname] = useState(user.firstName || '')
    const [about , setabout] = useState(user.about || '')
    const [photo , setphoto] = useState(user.photo || '')
    const [age , setage] = useState(user.age || '')
    const [error  , seterror] = useState('')
    const [success , setsuccess] = useState('')
const [successMessage, setSuccessMessage] = useState(false);


    const HandleEdit = async(e)=>{
              e.preventDefault()
                seterror('')
        try{
        
const res = await axios.patch(BaseUrl+'/profile/edit',{
    firstName,
    age ,
    about,
    photo,
    skills

} ,{withCredentials:true})
console.log('hhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiii');
console.log(res?.data);
setsuccess(res?.data)
   setSuccessMessage(true);
   
    setTimeout(() => setSuccessMessage(false), 2000); 
    setTimeout(() => {
      navigate('/')
    }, 3000);
dispatch(addUsers(res?.data?.data))
        }catch(err){
          seterror(err?.response?.data)
          navigate('/profile')
        console.log(err.message); 
        }
    }

     useEffect(()=>{
      HandleEdit()
     },[])

    return(
  
        <div className="flex from-blue-50  to-purple-100 justify-center my-10">
{successMessage && (
  <div id="anim" className="fixed top-10 right-10 z-50">
    <div className="bg-white bg-opacity-80 backdrop-blur-xl border border-green-300 text-green-800 px-6 py-5 rounded-xl shadow-lg transform transition-all duration-500 animate-slideIn">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-base">{user.firstName} Profile Updated</h3>
          <p className="text-sm text-green-700">Your profile was updated successfully.</p>
        </div>
      </div>
    </div>
  </div>
)}

         <div style={{overflow:'hidden'  }}  className="login-container">
      <div style={{ transform:'translate(0% , -5%)' , backgroundColor:'#eff6ff'}} id="logo" className="login-card">
        <h2 className="login-title">Edit Profile</h2>
        <form className="login-form" >
     
       <input
          id="input-name"
            type="text"
            placeholder="Enter your FullName"
            className="login-input"
            value={firstName}
            required
            onChange={(e)=>{setname(e.target.value)}}
          />
                   <textarea
       id="input-about"
  name="about"
  placeholder="Tell us about yourself"
  className="login-textarea"
  value={about}
  onChange={(e)=> setabout(e.target.value)}
  required
></textarea>
    <input
          id="input-name"
            type="url"
            placeholder="Enter your FullName"
            className="login-input"
            value={photo}
            required
            onChange={(e)=>{setphoto(e.target.value)}}
          />
              <input
          id="input-name"
            type="number"
            placeholder="Enter your FullName"
            className="login-input"
            value={age}
            required
            onChange={(e)=>{setage(e.target.value)}}
          />
            <input
          id="input-name"
            type="text"
            placeholder="Enter your FullName"
            className="login-input"
            value={skills}
            required
            onChange={(e)=>{setskills(e.target.value.split(','))}}
          />
       
          <p className="text-red-500 -translate-y-5">{error ? error : success}</p>
          <button type='button' style={{transform:'translate(0% ,-45%)'}} onClick={HandleEdit} className="login-button">
            Save Profile
          </button>  
        </form>
      
      </div>
    </div>
    <div style={{width:'30%'}}> <UserCard user  ={{age  , firstName , photo , about ,skills}}/></div>
     </div>
    )
}

export default EditProfile