import  React , {useEffect, useState , Dispatch} from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { dataActions } from '../../../redux';
import { useSelector } from 'react-redux';

//constom function
import { update_database } from '../../../util/update_database';
import { formetTime } from '../../../util/FormentTime';
import { FromentDate } from '../../../util/FormentDate';
import { SweetAlrt } from '../../../util/SweetAlrt';


//mui
import {Button  ,Alert , TextField,  Dialog  , DialogActions ,  DialogContent ,  DialogContentText , DialogTitle, IconButton } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


//main function
export default function Edting_data({open , setOpen , data , index}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const action = bindActionCreators(dataActions , dispatch);
  let Redux_data = useSelector(state => state.data);

  const [currData , setCurrData] = useState(data)
  const [date , setDate] = useState(); 

  //all alert
  const [semesterAlert , setSemesterAlert] = useState(false);
  const [subjectAlert , setsubjectAlert] = useState(false);
  const [classAlert , setclassNameAlert] = useState(false);
  const [dataAlert , setDateAlert] = useState(false);
  const [properDataFil , setProperDataFil] = useState(false);

  useEffect(()=>{
    // setCurrData(data);
     

    let changeDateForment = currData.date.replace('-', '/');
         changeDateForment = changeDateForment.replace('-', '/');
    setCurrData({...currData , date : changeDateForment });
  },[]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveData = ()=>{
   
    if(currData.semester.length == 0 || currData.semester <= 0){
      setSemesterAlert(true);
    }else{
      setSemesterAlert(false);
    }

    if(currData.subject.length == 0){
      setsubjectAlert(true);
    }else{
      setsubjectAlert(false);
    }
    if(currData.className.length == 0){
      setclassNameAlert(true);
    }else{
      setclassNameAlert(false);
    }
    if(currData.date.length == 0){
      setDateAlert(true);
    }else{
      setDateAlert(false);
    }

    //complet all filed data
    if(!semesterAlert && !subjectAlert && !classAlert && !date){
      if(currData.semester != 0 && currData.semester > 0 && currData.subject.length != 0 && currData.className.length && currData.date.length != 0){

        action.Update_data(index , currData)
        
        if(update_database(Redux_data)){
          SweetAlrt("Update data " , "success")
        }else{
          SweetAlrt("Update data " , "error")
        }
         
        handleClose();
      }else{
        setProperDataFil(false);
    }
    }else{
      setProperDataFil(true);
  }
  }

  //enter key handle
  const handleEnter_key = (e)=>{
     if(e.key === 'Enter'){
      handleSaveData();
     }
  }


  return (
    <div onKeyPress={(e)=>handleEnter_key(e)}>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Attendance"}
        </DialogTitle>
        {
          properDataFil && <Alert severity="error" className='ms-4 me-4'>proper data to fill please!</Alert>
        }
        <DialogContent>
            <div className='mt-2'>
               {
                semesterAlert ? 
                <TextField error helperText='Invaild' type='Number' value={currData.semester} onChange={(e)=>setCurrData({...currData ,semester : e.target.value })} style={{width : '100%'}}  className='mb-3' id="outlined-basic" label="Semester" variant="outlined" required />
                 :
                <TextField type='Number' value={currData.semester} onChange={(e)=>setCurrData({...currData ,semester : e.target.value })} style={{width : '100%'}}  className='mb-3' id="outlined-basic" label="Semester" variant="outlined" required /> 
               }
               {
                subjectAlert ? 
                <TextField error helperText='Invaild' value={currData.subject} style={{width : '100%'}} onChange={(e)=>setCurrData({...currData ,subject : e.target.value })} className='mb-3' id="outlined-basic" label="subject" variant="outlined" required />
                :
                <TextField style={{width : '100%'}} value={currData.subject} onChange={(e)=>setCurrData({...currData ,subject : e.target.value })} className='mb-3' id="outlined-basic" label="subject" variant="outlined" required />
                }
               {
                classAlert ? 
                <TextField error helperText='Invaild' value={currData.className} style={{width : '100%'}}  onChange={(e)=>setCurrData({...currData ,className : e.target.value })}  className='mb-1' id="outlined-basic" label="className" variant="outlined"  />
                 :
                <TextField style={{width : '100%'}}  value={currData.className} onChange={(e)=>setCurrData({...currData ,className : e.target.value })}  className='mb-1' id="outlined-basic" label="className" variant="outlined"  />
                }
               
                 <div    className={ dataAlert ? 'border border-2 border-danger mt-2 mb-3' : 'mb-3'}>
                   <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                            'DatePicker',
                            'MobileDatePicker',
                            'DesktopDatePicker',
                            'StaticDatePicker',
                            ]}
                        >
                            <DemoItem label="Date">
                             <MobileDatePicker  defaultValue={dayjs(currData.date)}  onChange={(e)=>setCurrData({...currData , date : FromentDate(e.$d)})}/>
                             {/* <MobileDatePicker  defaultValue={dayjs(currData.date)}  onChange={(e)=>handle_changeDate(e)}/> */}
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                 </div>

                 <TextField className='mb-3'size="medium" style={{width : '100%'}}   value={currData.presentNum} onChange={(e)=>setCurrData({...currData ,presentNum : e.target.value })}   id="outlined-basic" label="PresentNum" variant="outlined" />
                 <TextField className='mb-3' style={{width : '100%'}}  value={currData.absentNum} onChange={(e)=>setCurrData({...currData ,absentNum : e.target.value })}   id="outlined-basic" label="AbsentNum" variant="outlined"  />
                 <TextField className='mb-3' style={{width : '100%'}}  value={currData.topic} onChange={(e)=>setCurrData({...currData ,topic : e.target.value })}   id="outlined-basic" label="Topic" variant="outlined"  />
                
            </div>
        </DialogContent>
        <DialogActions>
             <Button color='error' onClick={handleClose} variant="contained">Cancle</Button>
             <Button onClick={handleSaveData} variant="contained">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
