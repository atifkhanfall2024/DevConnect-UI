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

    return(
  
         feed &&(
     <UserCard user = {feed[1]}/>
         )
    )
}

export default Feed