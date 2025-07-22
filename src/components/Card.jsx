
import { motion } from "framer-motion";

const UserCard = ( {user} ) => {
 
 const {age} = user
console.log(user+ 'cards')
  return (
    <div id="crd" className="flex justify-center items-center  from-blue-50 to-purple-100 p-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-blue-50 rounded-2xl shadow-xl p-8 rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center hover:scale-105 hover:shadow-3xl transition-all duration-300"
      >
      <div className="flex justify-center">
  <img
    src={user.photo}
    alt="Profile"
    className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
  />
</div>

        <h2 className="text-2xl font-bold mt-5 text-gray-800">{user.firstName}</h2>
        <p className="text-sm text-gray-600 mt-2 italic">
            <strong>About:</strong>  {user.about}
        </p>
         <p className="text-sm text-gray-600 mt-2 italic">
           <strong>Skills:</strong>   { user.skills}
        </p>

       <div className="mt-5 text-sm text-gray-700 space-y-1">
      { age &&<p>
           Age:<strong>{user.age} </strong> 
          </p>}
          <p> 
            <strong>Location:</strong> Karachi, Pakistan
          </p>
        </div>

        {/* Buttons */}
        <div id="two" className="mt-10 flex justify-center gap-5 flex-wrap">
          <button id="cbtn" className="bg-gradient-to-r from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Interested
          </button>
          <button  id="cbtns"      className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Ignore
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserCard;
