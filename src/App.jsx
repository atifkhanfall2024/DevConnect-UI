import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { useState ,useEffect } from 'react'
import Shimmer from './components/Shimmerui'
import Body from './components/Body'
import './App.css'
import { Provider } from 'react-redux'
import appStore from './redux/appstore'
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
<Route path='/login' element={<Login/>}/>

</Route>
 </Routes>
  </BrowserRouter></Provider>
 </div>
  )


 
}

export default App
