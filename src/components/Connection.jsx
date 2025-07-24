import axios from "axios"
import { BaseUrl } from "../Utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../redux/connectionSlice"
import No from "./NoFriend"

const Connections = ()=>{

    const dispatch = useDispatch()
    const connections = useSelector((store)=>store.connection)
    //console.log(connections , 'connect');

     const fetchConnections = async()=>{
       
       try{
         const res = await axios.get(BaseUrl + '/user/connections' , {withCredentials:true}

         )
         console.log(res.data);
         dispatch(addConnections(res?.data))

       }catch(err){
        console.log(err.response.data);
       }
     }

       useEffect(()=>{
         fetchConnections()
       },[])
    
        if(!connections) return null 

        if(connections.length==0) return <No/>

         

        
    return(
        <>
        <div>
               <h2 style={{transform:"translate(0% , 40%)"}} className="text-2xl font-bold text-center text-green-400 mb-2 ">
      Friends 🟢
    </h2>
        </div>
<div   className="w-full flex justify-center items-center  bg-gray-100 px-4 translate-y-10">
  <div  style={{ backgroundColor: '#191e24' }} className=" shadow-xl p-6 rounded-lg max-w-md w-full">
 

    {connections .filter(c => c !== null).map((connect, index) => (
      <div
        key={index}    style={{ backgroundColor: '#191e24' , border: '3px solid green' ,padding:'2px', margin:'2px' }}
        className="flex  justify-between items-center gap-4 bg-gray-50 hover:bg-gray-100 p-4 mb-4 rounded-md shadow-sm cursor-pointer transition-all duration-300"
        onClick={() => console.log("Open profile of", connect.firstName)} // Replace with navigation if needed
      >
        {/* Left: Friend Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white text-center">{connect.firstName}</h3>
          <p className="text-sm text-white text-center">{connect.about}</p>
        </div>

        {/* Right: Friend Image */}
        <img
          src={connect.photo}
          alt={connect.firstName}
          className="w-20 h-20 object-cover rounded-md shadow"
        />
      </div>
    ))}
  </div>
</div>
</>


     )
     
}

export default Connections