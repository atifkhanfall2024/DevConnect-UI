import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
const Header = ()=>{
     
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
    <div id="name" className="flex-1">
      <a className="btn btn-ghost text-xl mx-20">DevConnect 👨‍💻</a>
    </div>

    <div className="flex items-center gap-4 mx-4">
      {/* 🚀 Custom Button */}
      <button
        className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out active:scale-95"
      >
        Get Started
      </button>

      {/* 👤 Avatar Dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div id="img" className="w-10 rounded-full overflow-hidden">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
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
    </div>
  </div>
</>

      
        
        
    )
}

export default Header