import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login';
import { useStateValue } from './StateProvider';
import { BrowserRouter , Router, Switch, Route, Routes } from 'react-router-dom'
import { auth } from './firebase';
const App = () => {

  const [ { user }, dispatch] = useStateValue();

  useEffect(() => {
  
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
     if (authUser) {
      //the user logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
     } else {
      //the user logged out

      dispatch({
        type: "SET_USER",
        user: null,
      });
     }

    });
    
    return () => {
      //Any cleanup operation go in here
      unsubscribe();
    };

  }, []);

  console.log("User is" ,user);
  return (

    <BrowserRouter> 
     <Header />
            
          <Routes>
          <Route path='/Login' element = {<Login />}/>
             <Route path='/Checkout' element = {<Checkout />}/>
             <Route path='/' element = {<Home />}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App 