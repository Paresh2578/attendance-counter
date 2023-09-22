import { URL } from "./URL"

//redux
import { bindActionCreators } from "redux";
import { dataActions } from "../redux";

//function
import { SweetAlrt } from "./SweetAlrt";



export const get_data_and_add_redux = async(email, password , dispatch)=>{

    const action = bindActionCreators(dataActions , dispatch);
   try{
     let result = await fetch(`${URL}/user/find/${email}/${password}`)
     result = await result.json();


     for(let  i=0;i<result[0].data.length;i++){
         action.Add_data(result[0].data[i]);
     }
     

   }catch(error){
    SweetAlrt("get data " , "error");
    console.log('get data and add redux api error : ' , error);
   }
}