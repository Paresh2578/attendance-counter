import React, { useState  , useEffect} from 'react'
import './ViewAll_List_Data.css'

//redux
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { dataActions } from '../../redux'
import { useSelector } from 'react-redux'


//componets 
import Detail_page from './Other opration/Detail_page'
import Edting_data from './Other opration/Edting_data'

//function
import { update_database } from '../../util/update_database'
import { SweetAlrt } from '../../util/SweetAlrt'

//mui
import { Paper  , Fab , styled, IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



export default function ViewAll_List_Data({data , index}) {
  const dispatch = useDispatch();
  const action = bindActionCreators(dataActions , dispatch);
  let redux_data = useSelector(state => state.data);

   const [mousHover , setMouseHover] = useState(false);
   const [open , setOpen] = useState(false);
   const [Edting_open , setEdting_Open] = useState(false);

  const handle_Remove = (_id)=>{
    action.Remove_data(_id);
     
    redux_data = redux_data.filter((d)=> d._id != _id);

    if(update_database(redux_data)){
      SweetAlrt("Remove data " , "success");
    }else{
      SweetAlrt("Remove data " , "error");
    }
  }

  ////find screen width
   const [windowSize, setWindowSize] = useState([
    window.innerWidth,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);


    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
    
  return (
   <> 
      <Detail_page open={open} setOpen = {setOpen} data ={data}/>
      <Edting_data open={Edting_open} setOpen = {setEdting_Open} data ={data} index={index}/>
      {/* <Edting_data/> */}

      <Paper className='List_Data_main rounded-4  shadow' style={{boxShadow: mousHover ?  'rgba(0, 0, 0, 0.30) 0px 5px 15px' : '' , background :mousHover ? 'rgba(0,0,0,0.0001)' : 'white'}} onMouseOver = {()=>(setMouseHover(true))} onMouseOut = {()=>(setMouseHover(false))}> 
       {/* <div className='samester'  onClick={()=>setOpen(true)}>
          <div className='samester_number subjectName'>{data.semester}</div>
        </div> */}
      <div className='OtherData'  onClick={()=>setOpen(true)}>
        <div className=' h3 font-weight-bold overflow-text subjectName' >{data.subject}</div>
        <div className='font-weight-light classNam'><span className='font-weight-bold' style={{color : '#808080'}}>Semester : </span>{data.semester} <span className='font-weight-bold ms-3' style={{color : '#808080'}}>class : </span>{data.className}</div>
        <div  className='classNam'> {data.date}  <span className='ps-1'>{data.time}</span></div>
      </div>
      <div style={{marginRight :'auto'}} className='ms-3'>
        <IconButton   className='bg-primary text-light mb-2 shadow' size= {windowSize[0] < 500 ? "small" : ''} onClick={()=>{setEdting_Open(true)}}>
            <EditIcon fontSize={windowSize[0] < 500 ? "small" : ''} />
        </IconButton>
        <IconButton size= {windowSize[0] < 500 ? "small" : ''} className='bg-danger text-light shadow' onClick={()=>handle_Remove(data._id)}>
            <DeleteIcon fontSize={windowSize[0] < 500 ? "small" : ''}/>
        </IconButton>
      </div> 
     </Paper>
   </>
  )
}
