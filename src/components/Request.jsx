import axios from "axios";
import { BaseUrl } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../redux/Requestslice";
import { useEffect } from "react";
import No from "./NoFriend";

const Request = ()=>{

    const dispatch = useDispatch()
    const request = useSelector((store)=>store.request)

    console.log(request , 'req page');

    const RequestConnections = async()=>{
        //  console.log('request page');
        try{
            const res = await axios.get(BaseUrl + '/user/request/recieved', {withCredentials:true}

            )
            console.log(res.data , 'request');
            dispatch(addRequest(res?.data))

        }catch(err){
            console.log(err.message);
        }

      
    }
     
    useEffect(()=>{
         RequestConnections()
    }, [])

    if(!request) return ;

    if(request.length == 0) return <No/>
    
   return(
        <>
        
        <div>
               <h2 style={{transform:"translate(0% , 40%)"}} className="text-2xl font-bold text-center text-green-400 mb-2 ">
      Friend Request 
    </h2>
        </div>
<div   className="w-full flex justify-center items-center  bg-gray-100 px-4 translate-y-10">
  <div  style={{ backgroundColor: '#191e24' }} className=" shadow-xl p-6 rounded-lg max-w-md w-full">
 

    {request.map((connect, index) => (
        
      <div
        key={index}    style={{ backgroundColor: '#191e24' , border: '3px solid green' ,padding:'6px', margin:'2px' }}
        className="flex  justify-between items-center gap-6 bg-gray-50 hover:bg-gray-100 p-4 mb-4 rounded-md shadow-sm cursor-pointer transition-all duration-300"
        onClick={() => console.log("Open profile of", connect.senderid.firstName)} // Replace with navigation if needed
      >
     <div>
          <img
          src={connect.senderid.photo}
          alt={connect.firstName}
          className="w-20 h-20 object-cover rounded-md shadow"
        />
           
     </div>
        {/* Left: Friend Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white text-center">{connect.senderid.firstName}</h3>
          <p className="text-sm text-white text-center">{connect.senderid.about}</p>
        </div>

        {/* Right: Friend Image */}
      
  <div className="flex flex-col gap-2 m-1">
  <button className=" btn btn-active btn-secondary "> Accept Request </button>
  <button className="btn btn-active btn-primary"> Reject Request </button>
</div>


      </div>
      
    ))}

  </div>
</div>
</>


     )
     
}

export default Request