import  React , {useState} from 'react';


//mui
import {Button  , TextField,  Dialog  , DialogActions ,  DialogContent ,  DialogContentText , DialogTitle, IconButton } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function Add_data({open_addData , setOpen_addData}) {
  const [data , setData] =useState({semester : '' , Subject : "" , Class : "" , date : ""})
  const [date , setDate] = useState();

  const handleClose = () => {
    setOpen_addData(false);
  };

  const handleSaveData = ()=>{
    console.log('done');
  }

  return (
    <div>
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
               <TextField type='Number' onChange={(e)=>console.log(e.target.value)} style={{width : '100%'}}  className='mb-3' id="outlined-basic" label="Semester" variant="outlined" />
               <TextField style={{width : '100%'}} onChange={(e)=>console.log(e.target.value)} className='mb-3' id="outlined-basic" label="Subject" variant="outlined" />
               <TextField style={{width : '100%'}}  onChange={(e)=>console.log(e.target.value)}  className='mb-1' id="outlined-basic" label="Class" variant="outlined" />
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
                         <MobileDatePicker value={date} onChange={(newDate)=>setDate(newDate)}/>
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
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
