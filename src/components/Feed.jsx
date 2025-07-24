import axios from "axios"
import { BaseUrl } from "../Utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addfeed } from "../redux/Feedslice"
import UserCard from "./Card"
const Feed  = ()=>{
    const feed = useSelector((store)=>store.feed)
   console.log(feed, 'feed data');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // fetching feed api
    const GetData = async()=>{
        if(feed) return
       try{
         const res = await axios.get(BaseUrl + '/user/feed',{withCredentials:true}

         )
             dispatch(addfeed(res?.data?.data));
       }catch(err){
        console.log(err);
       }
    }

    useEffect(()=>{
        GetData()
    },[])

    if(!feed) return 

    if(feed.length <= 0) return <h1 style={{marginTop:"40px"}} className="text-red-400 text-center mt-8 bold
    ">NO USER FOUND 😔</h1>
    return(
  
         feed &&(
     <UserCard user = {feed[0]}/>
         )
    )
}

export default Feed