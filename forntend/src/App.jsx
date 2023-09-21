import React, { useEffect } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

//Redux
import { useDispatch } from "react-redux";

//componets
import Home from './componets/Home/Home'
import Count_attendes from './componets/Home/Other opration/Count_attendes'
import Authentication from './Authentication/Authentication';

//function
import { get_data_and_add_redux } from './util/get_data_and_add_redux';


export default function App() {
   let auth = JSON.parse(localStorage.getItem('auth'));

  const dispatch = useDispatch();

  
  useEffect(()=>{
    if(auth){
      get_data_and_add_redux(auth[0].email , auth[0].password  , dispatch);
    }
  },[]);
  
  
  let clientId = '679951334231-uh7kq2tl5lr5v04ls8i3fq8f2qoirv81.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
         <BrowserRouter>
          <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/startAttdes/:semester/:subject/:className/:date/:startRoll' element={<Count_attendes/>}></Route>
                  <Route path='/Authentication' element={<Authentication/>} />
                  {/* </Route> */}

          </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
    
  )
}
