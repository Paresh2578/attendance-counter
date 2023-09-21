import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

//URL
import { URL } from '../util/URL';

export default function Authentication() {
  const navigate = useNavigate();

    const on_success = (res)=>{
        let data = jwt_decode(res.credential);

        data = {
          name : data.name,
          email : data.email,
          password : data.sub,
          profile : data.picture
        }

        check_allredy_login(data);
        
        console.log(data);
    }

    const on_error = (res)=>{
        console.log(res);
    }

    const check_allredy_login = async(data)=>{
      try{
           let result = await fetch(`${URL}/user/find/${data.email}/${data.password}`);
           result = await result.json();

           console.log(result);
           
           if(result.length == 0){
             sign_up_user(data);
           }else{
             login_user(result);
           }

      }catch(error){
       console.log('check allredy user api error : ' + error);
      }
 }

    const sign_up_user = async(data) =>{
       try{
         let result = await fetch(`${URL}/user/register` , {
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
              'content-type' : 'application/json'
            }
         })
         console.log(data);
          data = [data];
          console.log(data);
          localStorage.setItem('auth' , JSON.stringify(data));
          navigate('/');
       }catch(error){
        console.log('register user api error : ' + error);
       }
      console.log('sign in');
    }

    const login_user = (result) =>{
       localStorage.setItem('auth' , JSON.stringify(result));
       navigate('/');
       console.log('log in');
    }

   

  return (
    <div className='Authentication_body'>
        <div className="login-form">
        <GoogleLogin
            onSuccess={(res)=>on_success(res)}
            onError={(res) =>on_error(res)}
          />  
        </div>
    </div>
  )
}
