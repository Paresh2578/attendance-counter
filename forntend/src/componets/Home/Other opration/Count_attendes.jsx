import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

//redux
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dataActions } from '../../../redux';


//componets 
import Header from '../../Header/Header'

//function
import {update_database} from '../../../util/update_database'
import {formetTime} from '../../../util/FormentTime'


//mui
import {Button, IconButton} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//main function
export default function Count_attendes() {
  const {semester , subject ,className , date , startRoll } = useParams();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const action = bindActionCreators(dataActions , dispatch)

  //all useState
  const [data , setData] = useState({_id : Date.now() , semester : semester , subject : subject  ,className : className , date :date , absentNum : [] , presentNum : [] , time : formetTime(new Date())})
  const [roll , setRoll] = useState(parseInt(startRoll));
  const [copy_btn , setCopy_btn] = useState({absentNum_Copy : true , presentNum_Copy : true});

  //auth
  let auth =JSON.parse(localStorage.getItem('auth'));

  //get redux store data
  let Redux_data = useSelector(state => state.data);


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

    let changeDateForment = data.date.replace('-', '/');
    changeDateForment = changeDateForment.replace('-', '/');
    setData({...data , date : changeDateForment})
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

    data.absentNum = data.absentNum.filter(n => n != roll)
    setData({...data , absentNum : data.absentNum})

      if(roll > startRoll){
         setRoll(roll-1);
       }

       
  }

  //copy btn
  const CopyData = (typeName , typeDate , type_function )=>{
    navigator.clipboard.writeText(`${typeName} : ${typeDate}`);

    type_function == 'present' ? setCopy_btn({...copy_btn , presentNum_Copy : false}) : setCopy_btn({...copy_btn , absentNum_Copy : false})
    // SweetAlrt("Coppy data " , "success")
    setTimeout(() => {
      type_function == 'present' ? setCopy_btn({...copy_btn , presentNum_Copy : true}) : setCopy_btn({...copy_btn , absentNum_Copy : true})
    }, 1000);
  }

  const handle_save = async()=>{

    action.Add_data(data);

     Redux_data = [...Redux_data , data];
      
     if(update_database(Redux_data)){
        navigate('/')
     }else{
       console.log('updae data error') ;
     }
     
     
   
     
   
  }

  const handle_cancle = ()=>{
    console.log('cancle')
    navigate('/');
  }

  return (
    <> 
      <Header/>
      {/* counting part */}
       <div className='count_attendes_main' style={{marginTop : '6rem' }}>
          <div className="container border-0 rounded text-center mt-5 pt-2 pb-2 shadow" style={{backgroundColor :'#fff'}} >
             <div className="row  titleFontFamily title-attendans">
                 <div className="col">
                    Start Attendance Semester - '<span  className="text-success">{semester}</span>' , Subject - '<span id="Subject_Name_Header" className="text-success">{subject}</span>' and ClassName - '<span id="classNameNameHeader" className="text-success">{className}</span>'
                 </div>
            </div>
         <div id="P_N_Btn">
            <div id="disply-Num" className="fs-1 mb-2  RollNum">{roll}</div>
            <div><Button  type="button" style={{color : '#FFF'}} className=" btn mb-2 me-3 border-0  btnStyle"  onClick={handle_presentNum} >Present</Button></div>
            <div><Button type="button"  style={{color : '#FFF'}} className=" btn mb-2 me-3  border-0 dilitBtnStyle btnStyle" onClick={handle_absentNum} >Absent</Button></div>
        </div>
        <div>
           <Button type="button" style={{color : '#FFF' , backgroundColor:'#0d6efd'}} className=" btn mb-2 mt-3 me-3 border-0  backBtn" onClick={handle_BackNum} disabled= {roll <= startRoll ? true : false}>back to One number</Button>
        </div>
       </div>
     </div>


     {/* saveData or cancle data part */}

     <div id='P_N_Btn' className='mt-5'>
           <div><Button  type="button" variant='contained' color='success' className=" btn mb-2 me-3 border-0  "  onClick={handle_save} >Save</Button></div>
           <div><Button type="button" variant='contained' color='error' className=" btn mb-2 me-3  border-0 " onClick={handle_cancle} >Cancle</Button></div>
     </div>
     
     
     {/* diaplye part */}

     {/* absent number */}
      {
        data.absentNum.length != 0
        ?
        <div style={{marginTop : '0rem' , overflow:'hidden'}}>
          <div className='container border-0 rounded text-center mt-5 shadow ' style={{backgroundColor :'#fff'}}>
               <div className='row pt-3'>
                  <div className='col-2 h4'>Absent Num : </div>
                  <div className='col' style={{fontSize :'20px'}}>
                    {data.absentNum && data.absentNum.map((n)=>`${n} ,`)}
                 </div>
                 {
                  data.absentNum.length != 0 
                  ?
                  <div className='col-1'>
                     <IconButton onClick={()=>CopyData('Absent Num' , data.absentNum, 'absent' )} color ="primary">
                        {copy_btn.absentNum_Copy ? <ContentCopyIcon/> : <CheckCircleIcon/>}
                    </IconButton>
                  </div>
                  :''
                 }
               </div>
               
          </div>
      </div>
      : ''
      }


     {/* presentNum number */}
      {
        data.presentNum.length != 0 
        ?
        <div style={{marginTop : '0rem' , marginBottom:'2rem'}}>
          <div className='container border-0 rounded text-center mt-5 shadow' style={{backgroundColor :'#fff'}}>
               <div className='row pt-3 pb-2'>
                  <div className='col-2 h4'>P Num : </div>
                  <div className='col' style={{fontSize :'20px'}}>
                    {
                      data.presentNum && data.presentNum.map((n)=>`${n} ,`)
                    }
                 </div>
                 {
                  data.presentNum.length != 0 
                  ?
                  <div className='col-1'>
                     <IconButton onClick={()=>CopyData('Present Num' , data.presentNum, 'present' )} color ="primary">
                        {copy_btn.presentNum_Copy ? <ContentCopyIcon/> : <CheckCircleIcon/>}
                    </IconButton>
                  </div>
                  :''
                 }
               </div>
               
          </div>
      </div>
      : ''
      }
      

    </>
  )
}
