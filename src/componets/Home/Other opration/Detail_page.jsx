import * as React from 'react';

//mui
import { styled  , Dialog ,  DialogActions ,  IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//sweet Alert
import {SweetAlrt} from '../../../context/SweetAlrt'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Detail_page({open , setOpen , data}) {
  const [copy_btn , setCopy_btn] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const CopyData = ()=>{
    navigator.clipboard.writeText(`Subject : ${data.Subject}  \n  Semester : ${data.semester} \n ClassName : ${data.class} \n Absent : ${data.Absent} \n Present : ${data.Present} \n Time : ${data.time}`);
    setCopy_btn(false);
    // SweetAlrt("Coppy data " , "success")
    setTimeout(() => {
      setCopy_btn(true);
    }, 1000);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='text-monospace'>
          {data.Subject}
        </DialogTitle> */}
        <IconButton
        color='primary'
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className='m-3'>
          <div className='mb-2 me-4 h5'><span className='h4'>Subject : </span> {data.Subject}</div>
          <div className='mb-2'><span className='h4'>Semester : </span> {data.semester}</div>
          <div className='mb-2'><span className='h4'>ClassName : </span> {data.class}</div>
          <div className='mb-2'><span className='h4'>Absent : </span> {data.Absent.map(i=>`${i} , `)}</div>
          <div className='mb-2'><span className='h4'>Present : </span> {data.Present.map(i=>`${i} , `)} </div>
          <div className='mb-2' ><span className='h4'>Time : </span> {data.time}</div> 
        </div>

        <DialogActions>
           <IconButton onClick={CopyData} color ="primary">
             {copy_btn ? <ContentCopyIcon/> : <CheckCircleIcon/>}
           </IconButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
