import React, { useState } from 'react'
import './ViewAll_List_Data.css'

//componets 
import Detail_page from './Other opration/Detail_page'

//mui
import { Paper  , Fab , styled, IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


//css

export default function ViewAll_List_Data({data , index}) {
   const [mousHover , setMouseHover] = useState(false);
   const [open , setOpen] = useState(false);
    
  return (
   <> 
      <Detail_page open={open} setOpen = {setOpen} data ={data}/>
      <Paper className='List_Data_main p-3' style={{boxShadow: mousHover ?  'rgba(0, 0, 0, 0.30) 0px 5px 15px' : '' , background :mousHover ? 'rgba(0,0,0,0.0001)' : 'white'}} onMouseOver = {()=>(setMouseHover(true))} onMouseOut = {()=>(setMouseHover(false))}>
      <div className='samester'  onClick={()=>setOpen(true)}>
        <div className='samester_number'>{data.semester}</div>
      </div>
      <div className='OtherData'  onClick={()=>setOpen(true)}>
        <div className=' h4 font-weight-bold'>{data.Subject}</div>
        <div className='font-weight-light'>class : {data.class}</div>
        <div style={{color :'#454545' , fontSize:'15px'}}> {data.date}    {data.time}</div>
      </div>
      <div>
        <IconButton  aria-label="add to shopping cart" className='bg-primary text-light mb-2 shadow'>
            <EditIcon />
        </IconButton>
        <IconButton  aria-label="add to shopping cart" className='bg-danger text-light shadow'>
            <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
   </>
  )
}
