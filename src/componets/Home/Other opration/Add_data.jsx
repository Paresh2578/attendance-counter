import  React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';


//mui
import {Button  , TextField,  Dialog  , DialogActions ,  DialogContent ,  DialogContentText , DialogTitle, IconButton } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


//main function
export default function Add_data({open_addData , setOpen_addData}) {
  const navigate = useNavigate();

  const [data , setData] =useState({semester : '' , Subject : "" , Class : "" , date : "" , startRoll : 0})
  const [date , setDate] = useState(); 

  //all alert
  const [semesterAlert , setSemesterAlert] = useState(false);
  const [subjectAlert , setSubjectAlert] = useState(false);
  const [classAlert , setClassAlert] = useState(false);
  const [dataAlert , setDateAlert] = useState(false);
  const [startRollAlrt , setStartRollAtrt] = useState(false);

  const handleClose = () => {
    setOpen_addData(false);
  };

  const handleSaveData = ()=>{
    if(data.semester.length == 0 || data.semester <= 0){
      setSemesterAlert(true);
    }else{
      setSemesterAlert(false);
    }

    if(data.Subject.length == 0){
      setSubjectAlert(true);
    }else{
      setSubjectAlert(false);
    }
    if(data.Class.length == 0){
      setClassAlert(true);
    }else{
      setClassAlert(false);
    }
    if(data.date.length == 0){
      setDateAlert(true);
    }else{
      setDateAlert(false);
    }

    if(data.startRoll.length == 0 ||  data.startRoll <= 0){
      setStartRollAtrt(true);
    }else{
      setStartRollAtrt(false);
    }

    //complet all filed data
    if(!semesterAlert && !subjectAlert && !classAlert && !date){
      if(data.semester != 0 && data.semester >0 && data.Subject.length != 0 && data.Class.length && data.date.length != 0){

        //change date formnet -> mm/dd/yyyy to mm-dd-yyyy
        let changeDateForment = data.date.replace('/', '-');
         changeDateForment = changeDateForment.replace('/', '-');

        navigate(`/startAttdes/${data.semester}/${data.Subject}/${data.Class}/${changeDateForment}/${data.startRoll}`)
      }
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
        open={open_addData}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Start the New Class Attendance"}
        </DialogTitle>
        <DialogContent>
            <div className='mt-2'>
               {
                semesterAlert ? 
                <TextField error helperText='Invaild' type='Number'  onChange={(e)=>setData({...data ,semester : e.target.value })} style={{width : '100%'}}  className='mb-3' id="outlined-basic" label="Semester" variant="outlined" />
                 :
                <TextField type='Number'  onChange={(e)=>setData({...data ,semester : e.target.value })} style={{width : '100%'}}  className='mb-3' id="outlined-basic" label="Semester" variant="outlined" /> 
               }
               {
                subjectAlert ? 
                <TextField error helperText='Invaild' style={{width : '100%'}} onChange={(e)=>setData({...data ,Subject : e.target.value })} className='mb-3' id="outlined-basic" label="Subject" variant="outlined" />
                :
                <TextField style={{width : '100%'}} onChange={(e)=>setData({...data ,Subject : e.target.value })} className='mb-3' id="outlined-basic" label="Subject" variant="outlined" />
                }
               {
                classAlert ? 
                <TextField error helperText='Invaild' style={{width : '100%'}}  onChange={(e)=>setData({...data ,Class : e.target.value })}  className='mb-1' id="outlined-basic" label="Class" variant="outlined" />
                 :
                <TextField style={{width : '100%'}}  onChange={(e)=>setData({...data ,Class : e.target.value })}  className='mb-1' id="outlined-basic" label="Class" variant="outlined" />
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
                             <MobileDatePicker value={date} onChange={(e)=>setData({...data , date : e.$d.toLocaleDateString()})}/>
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                 </div>
                 {
                   startRollAlrt ? 
                  <TextField error helperText='Invaild' type='Number'  onChange={(e)=>setData({...data ,startRoll : e.target.value })} style={{width : '100%'}}  className='mb-3' id="outlined-basic" label="Start Roll" variant="outlined" />
                   :
                  <TextField type='Number'  onChange={(e)=>setData({...data ,startRoll : e.target.value })} style={{width : '100%'}}  className='mb-3' id="outlined-basic" label="Start Roll" variant="outlined" /> 
                }
            </div>
        </DialogContent>
        <DialogActions>
             <Button color='error' onClick={handleClose} variant="contained">Cancle</Button>
             <Button onClick={handleSaveData} variant="contained">Start</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
