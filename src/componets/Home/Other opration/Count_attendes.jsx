import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//mui
import {Button, IconButton} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//main function
export default function Count_attendes() {
  const {semester , subject ,className , date , startRoll } = useParams();

  //all useState
  const [data , setData] = useState({semester : semester , subject : subject  ,className : className , date :date , absentNum : [] , presentNum : []})
  const [roll , setRoll] = useState(parseInt(startRoll));
  const [copy_btn , setCopy_btn] = useState(true);


  useEffect(()=>{
    if(roll == startRoll){
      setData({...data , presentNum : []  , absentNum : []})
    }
  }, [roll])

   
  //handle absent number
  const handle_presentNum = ()=>{
    setRoll(roll +1);

    data.presentNum.push(roll);
    setData({...data , presentNum : data.presentNum})
    console.log(data.presentNum)
  }


  //handle absent number
  const handle_absentNum = ()=>{
    setRoll(roll +1);
    
    data.absentNum.push(roll);
    setData({...data , absentNum : data.absentNum})
    console.log(data.absentNum)
  }

  //handle One Back number
  const handle_BackNum= ()=>{
    data.presentNum = data.presentNum.filter(n => n != roll)
       setData({...data , presentNum : data.presentNum})

      if(roll > startRoll){
         setRoll(roll-1);
       }

       
  }

  //copy btn
  const CopyData = ()=>{
    navigator.clipboard.writeText(`Present  Num: ${data.presentNum}`);
    setCopy_btn(false);
    // SweetAlrt("Coppy data " , "success")
    setTimeout(() => {
      setCopy_btn(true);
    }, 1000);
  }

  

  return (
    <>
      {/* counting part */}
       <div style={{marginTop : '6rem'}}>
          <div className="container border-0 rounded text-center mt-5 shadow" >
             <div className="row fs-1 pb-5 titleFontFamily">
                 <div className="col">
                    Start Attendance Semester - '<span  className="text-success">{semester}</span>' , Subject - '<span id="Subject_Name_Header" className="text-success">{subject}</span>' and ClassName - '<span id="classNameNameHeader" className="text-success">{className}</span>'
                 </div>
            </div>
         <div id="P_N_Btn">
            <div id="disply-Num" className=" fs-1 mb-2 me-5">{roll}</div>
            <div><Button  type="button" style={{color : '#FFF'}} className=" btn mb-2 me-3 border-0  btnStyle"  onClick={handle_presentNum} >Present</Button></div>
            <div><Button type="button"  style={{color : '#FFF'}} className=" btn mb-2 me-3  border-0 dilitBtnStyle btnStyle" onClick={handle_absentNum} >Absent</Button></div>
        </div>
        <div>
           <Button type="button" style={{color : '#FFF' , backgroundColor:'#0d6efd'}} className=" btn mb-2 mt-3 me-3 border-0  backBtn" onClick={handle_BackNum} disabled= {roll <= startRoll ? true : false}>back to One number</Button>
        </div>
       </div>
     </div>
     
     
     {/* diaplye part */}
      <div style={{marginTop : '0rem'}}>
          <div className='container border-0 rounded text-center mt-5 shadow'>
               <div className='row'>
                  <div className='col-2 h4'>Present Num : </div>
                  <div className='col'>
                    {data.presentNum.length == 0 
                     ? 'Not Found'
                     : data.presentNum && data.presentNum.map((n)=>`${n} ,`)
                    }
                 </div>
                 {
                  data.presentNum.length != 0 
                  ?
                  <div className='col-1' style={{fontSize:'50px'}}>
                     <IconButton onClick={CopyData} color ="primary">
                        {copy_btn ? <ContentCopyIcon/> : <CheckCircleIcon/>}
                    </IconButton>
                  </div>
                  :''
                 }
               </div>
               
          </div>
      </div>

    </>
  )
}
