import { URL } from "./URL";
//function
import { SweetAlrt } from "./SweetAlrt";

//auth
const auth = JSON.parse(localStorage.getItem('auth'));


export const update_database = async(Redux_data)=>{
    try{
        let result = await fetch(`${URL}/user/update/${auth[0].email}` , {
          method : 'PUT',
          body : JSON.stringify({data : Redux_data}),
          headers : {
            "content-type" : "application/json"
          }
        })

        return true;
    }catch(error){
      SweetAlrt("add api " , "error");
      console.log('add data api error : ' + error);

      return false;
    }


}