import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
import { useSelector } from "react-redux"

const Header = ()=>{
     const user = useSelector((store)=>store.user)
     console.log(user);
  const [Isbutton , setIsbutton] = useState(true)
    useGSAP(()=>{
  gsap.from("#name", {
  y: 100,            // start 100px below
  opacity: 0,        // fade in
  duration: 2,     
  ease: "power3.out" // smooth easing
});
    })
       useGSAP(()=>{
        gsap.from('#img' ,{
            x:10 ,
       
              opacity: 0,        // fade in
  duration: 2,     
  ease: "power3.out" ,
            scale:2,
            delay:1,
            
        })
    })
    return(
 <>
<div className="navbar bg-base-200 shadow-sm">
  {/* Logo */}
  <div id="name" className="flex-1">
    <a className="btn btn-ghost text-xl mx-20">DevConnect 👨‍💻</a>
  </div>

  {/* Right-side Button / Avatar */}
  <div className="flex items-center gap-4 mx-4">
    
    {/* 🚀 Get Started Button (only if not logged in) */}
    {!user && (
      <button id="btns"
        className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md
                   hover:shadow-lg hover:scale-[1.02] active:scale-100
                   transition duration-300 ease-in-out transform-gpu"
      >
        Signup
      </button>
    )}

    {/* 👤 Avatar Dropdown (if user is logged in) */}
    {user && (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost flex items-center gap-3 px-4 py-2 rounded-full hover:bg-base-200"
        >
          {/* Welcome Text */}
          <div id="nm" className="text-base font-medium ">Welcome {user.firstName}</div>

          {/* Profile Image */}
          <div id="img" className="w-11 h-11 rounded-full overflow-hidden ">
            <img
              alt="User profile"
              src={user.photo}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    )}
  </div>
</div>

</>

      
        
        
    )
}

export default Header