import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CreateSocketConnectionClient } from "../Utils/socket";
import axios from "axios";
import { BaseUrl } from "../Utils/constant";


const Chat = () => {
    const [sendMessage , setsendMessage] = useState('')
    const [Recieve , setRecieve] = useState([])
    const user = useSelector((store)=>store.user)
    const loginuser = user?._id;
    const {touserid} =  useParams();


    // make an api call to see all messages 

      const Chat = async()=>{
         try{
           const res = await axios.get(BaseUrl + '/chat/'+touserid ,{withCredentials:true}

           )
           console.log(res?.data?.messages);

           const data = res?.data?.messages.map((msg)=>{
            return{
              name : msg?.senderId?.firstName,
              text:msg?.text,
              date:msg?.createdAt
            }
           })
               setRecieve(data)
         }catch(err){
          console.log(err.message);
         }
      }

        useEffect(()=>{
          Chat()
        } ,[])


       useEffect(()=>{
        if(!loginuser){return}
        const socket = CreateSocketConnectionClient()

        // joinchat 

        socket.emit('joinchat' , {loginuser , touserid , name:user.firstName})

        socket.on('recievemessage' , ({name , text})=>{
            //console.log( name , text);
            setRecieve((Recieve)=>[...Recieve ,{name , text}])
        })
     // also close the connection when i move to other component or page
       
     return ()=>{
        socket.disconnect()
        console.log('disconnect');
     }

       } , [loginuser , touserid])

       // handle send button
     //console.log('recieve',Recieve);
       const HandleSendButton = async(e)=>{
                e.preventDefault()
        const socket = await CreateSocketConnectionClient()

        socket.emit('sendmessage' , {
            touserid ,
            loginuser,
            name:user.firstName,
            text:sendMessage,
         
           

        })
        setsendMessage('')

       }




  return (
    <div  style={{transform:"translate(0% , -10%)"}} className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
        {/* Header */}
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Live Chat 💬
        </h2>
         
            <>
           
       
        <div  className="bg-gray-900 h-64 overflow-y-auto rounded-xl p-4 mb-4 border border-gray-700 space-y-3">
           
           
        { Recieve.map((msg , index)=>(
       <div key={index} className={"chat " + (user.firstName === msg.name? "chat-end":'chat-start')}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={user.photo}
      />
    </div>
  </div>
  <div  className="chat-header">
    {msg.name}
    <time  className="text-xs opacity-50 ">  {new Date(msg.date).toLocaleTimeString([], 
      { hour: '2-digit', minute: '2-digit' })}  
  — {new Date(msg.date).toLocaleDateString()}</time>
  </div>
  <div className="chat-bubble">{msg.text}</div>
  <div className="chat-footer opacity-50">Seen</div>
</div>))}
<div className="chat chat-end">
  <div className="chat-image avatar">
   
  </div>

  
</div>
        </div>
        </>

 
        {/* Input + Send */}
        <div className="flex items-center gap-2">
          <input style={{padding:'4%' , margin:"2%"}}
          value={sendMessage}
          onChange={(e)=>setsendMessage(e.target.value)}
            type="text"
            placeholder="Type your message..."
            className=" h-10 flex-1 bg-gray-700 text-white placeholder-gray-400  px-4 py-2 outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button onClick={HandleSendButton}  style={{margin:"3%"}}
            className="w-20 h-10  bg-gradient-to-r from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 text-white text-sm font-semibold rounded-full shadow-md transition duration-300 transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );

};

export default Chat;
