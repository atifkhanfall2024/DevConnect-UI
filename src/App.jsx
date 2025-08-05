import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { useState ,useEffect } from 'react'
import Shimmer from './components/Shimmerui'
import Body from './components/Body'
import './App.css'
import { Provider } from 'react-redux'
import Feed from './components/Feed'
import appStore from './redux/appstore'
import Profile from './components/profile'
import Signup from './components/Signup'
import Forgot from './components/Forgotpass'
import Connections from './components/Connection'
import Request from './components/Request'
import Chat from './components/Chat'
function App() {
const [loading, setLoading] = useState(() => {
    // Check if shimmer was already shown in this session
    return sessionStorage.getItem('shimmerShown') !== 'true';
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('shimmerShown', 'true'); // Mark shimmer as shown
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <Shimmer />;
  }

  
  return(
 <div>
<Provider store={appStore}>
 <BrowserRouter basename='/'>
 <Routes>
  
 <Route path='/' element={<Body/>}>
 <Route path='/' element={<Feed/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/profile' element={<Profile/>} />
<Route path='/forgotpassward' element = {<Forgot/>}/>
<Route path='/connections' element = {<Connections/>}/>
<Route path='/requests' element = {<Request/>}/>
<Route path='/chat/:touserid' element = {<Chat/>}/>

</Route>
 </Routes>
  </BrowserRouter></Provider>
 </div>
  )


 
}

export default App
