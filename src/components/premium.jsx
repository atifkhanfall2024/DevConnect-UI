import axios from "axios"
import { BaseUrl } from "../Utils/constant";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe('pk_test_51RwH7y1qLRhQugmoXlmhBwCsveij21Ss1HQeid6Eve7IlZ4Prz9hiZ4hK2ziaj5TRBuz7na85SxCm7HvyNR00GZw00duJi1wJg');

const Premium = ()=>{


  // calling api from backend

  const HandleMemebership =  async(value)=>{
 
    try{
           const res = await axios.post(BaseUrl + '/payment/createId' , {
           MemberShip: value
           } , {withCredentials:true})

           console.log(res?.data);

              const stripe = await stripePromise;

    // If your backend sends `sessionId`
    await stripe.redirectToCheckout({ sessionId: res.data.sessionId });
    }catch(err){
      console.log(err.message);
    }
     
  }



    return(
        <div style={{margin:'10%'}} className="m-10">
          <div className="flex m-10 lg:flex-row">
 <div 
  style={{ minWidth: '300px', padding: '20px' , transform:'translate(0% , -20%)' }} 
  className="card bg-base-100 rounded-box shadow-lg flex flex-col items-start gap-4"
>

  <div className="flex items-center gap-4">
     <h1 className="text-xl font-bold">Silver Membership</h1>
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_1TJJjhtg_lO5r1959pGzeesYrMndaaA5A&s" 
      alt="Silver Membership" 
      style={{ width: "80px", height: "auto" }} 
    />
   
  </div>


  <div>
    <h3 className="text-lg font-semibold mb-2">Features</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Send 50+ Connections Per Day</li>
      <li>Blue Tick</li>
      <li>Unlimited Messages</li>
      <li>3 Months plan</li>
    </ul>
  </div>

  {/* Button */}
  <div style={{marginLeft:'60%'}} className="mt-4">
    <button onClick={() => HandleMemebership('silver')} className="btn btn-secondary">Buy Silver</button>
  </div>
</div>

  <div className="divider lg:divider-horizontal text-black"></div>
   <div 
  style={{ minWidth: '300px', padding: '20px' , transform:'translate(0% , -20%)' }} 
  className="card bg-base-100 rounded-box shadow-lg flex flex-col items-start gap-4"
>

  <div className="flex items-center gap-4">
     <h1 className="text-xl font-bold">Gold Membership</h1>
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYN0Dfc_wyaf0u113v6QHu8mVHTRYUq8FTIw&s" 
      alt="Gold Membership" 
      style={{ width: "80px", height: "auto" }} 
    />
   
  </div>


  <div>
    <h3 className="text-lg font-semibold mb-2">Features</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Send 200+ Connections Per Day</li>
      <li>Blue Tick and Priority Profile Highlight</li>
      <li>Unlimited Messages</li>
      <li>6 Months plan</li>
    </ul>
  </div>

  {/* Button */}
  <div style={{marginLeft:'60%'}} className="mt-4">
    <button onClick={() => HandleMemebership('gold')} className="btn btn-accent">Buy Gold</button>
  </div>
</div>
 <div className="divider lg:divider-horizontal text-black"></div>
  <div 
  style={{ minWidth: '300px', padding: '20px' , transform:'translate(0% , -20%)' }} 
  className="card bg-base-100 rounded-box shadow-lg flex flex-col items-start gap-4"
>

  <div className="flex items-center gap-4">
     <h1 className="text-xl font-bold">Bronze Membership</h1>
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluNOlxt9JhtpHZrcDHdPhfZvVsBGWdkNxig&s" 
      alt="Gold Membership" 
      style={{ width: "80px", height: "auto" }} 
    />
   
  </div>


  <div>
    <h3 className="text-lg font-semibold mb-2">Features</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Send up to 20 Connections Per Day</li>
      <li>Basic Profile Visibility</li>
      <li>Limited Messages</li>
      <li>1 Months plan</li>
    </ul>
  </div>

  {/* Button */}
  <div style={{marginLeft:'60%'}} className="mt-4">
    <button  onClick={() => HandleMemebership('gold')} className="btn btn-primary">Buy Bronze
    </button>
  </div>
</div>
</div>
        </div>
    )
}

export default Premium