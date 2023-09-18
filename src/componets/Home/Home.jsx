import React, { useState } from 'react'

//mui
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

//compontes
import SearchBar from './SearchBar'
import ViewAll_List_Data from './ViewAll_List_Data'
import Add_data from './Other opration/Add_data'



export default function Home() {
  
  let  arr = [
    {semester : 1 , Subject : 'Web tachnoloji' , class : 'B1' , date : '20/10/2023'  , time : '12:20 am' , Absent : [101 , 104] , Present : [301 , 402 , 201]},
    {semester : 2 , Subject : 'WT' , class : 'B3' , date : '20/10/2023' , time : '12:20 am' , Absent : [101 , 104] , Present : [301 , 402 , 201]},
    {semester : 2 , Subject : 'Data structures' , class : 'B3' , date : '20/10/2023' , time : '12:20 am' , Absent : [101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104 , 101 , 104] , Present : [301 , 402 , 201]},
    {semester : 3 , Subject : 'Web tachnoliju' , class : 'A , B , C' , date : '20/10/2023' , time : '12:20 am' , Absent : [101 , 104] , Present : [301 , 402 , 201]},
  ]

  const [data , setData] = useState(arr);
  const [open_addData , setOpen_addData] = useState(true);

  return (
    <>
      <div style={{marginTop : '6rem'}}>
        <SearchBar/>
        <div style={{marginTop : '3rem'}}>
          {
            data &&  data.map((d , index)=>(
              <ViewAll_List_Data key={index} data = {d} index ={index}/>
            ))
          }
        
        </div>
      </div>
      

      {/* add button */}
      <Fab
          aria-label="like"
          className="bg-primary text-light"
          style={{position : "fixed" , bottom : '1vh' , right : '1rem'}}
          onClick={() => setOpen_addData(true)}
        >
          <AddIcon />
        </Fab>

        {/* all Dialog */}
        <Add_data open_addData={open_addData} setOpen_addData={setOpen_addData}/>
    </>
  )
}
