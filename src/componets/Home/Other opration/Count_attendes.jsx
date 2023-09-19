import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Count_attendes() {
  const {semester , subject ,className , date , startRoll } = useParams();
  const [data , setData] = useState({})
  const [roll , setRoll] = useState(0);

  // //find the start roll number
  // const abcd = ['A' ,'B','C', 'D', 'E', 'F','G' ,'H', 'I' ,'J' ,'K' ,'L','M' ,'N' ,'O', 'P' ,'Q', 'R' ,'S' ,'T', 'U', 'V', 'W', 'X', 'Y' ,'Z']

  // for(let i=0 ; i<abcd.length;i++){
  //    if(abcd[i] === )
  // }

  return (
    <div style={{marginTop : '6rem'}}>
      <div class="container border-0 rounded text-center mt-5 shadow">
      <div class="row fs-1 pb-5 titleFontFamily">
        <div class="col">
          Start Attendance Semester - '<span id="sem" class="text-success">{semester}</span>' , Subject - '<span id="Subject_Name_Header" class="text-success">{subject}</span>' and Class - '<span id="classNameHeader" class="text-success">{className}</span>'
        </div>
      </div>
      <div id="P_N_Btn">
        <div id="disply-Num" class=" fs-1 text-center me-5">{roll}</div>
        <div><button  type="button" class=" btn mb-2 me-3 border-0  btnStyle" id="P" onclick="PNum()">Present</button></div>
        <div><button type="button" class=" btn mb-2 me-3  border-0 dilitBtnStyle btnStyle" id="A" onclick="ANum()">Absent</button></div>
      </div>
    </div>
    </div>
  )
}
