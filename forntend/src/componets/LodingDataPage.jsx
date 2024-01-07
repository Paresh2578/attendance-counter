import React from 'react'

//mui
import CircularProgress from '@mui/material/CircularProgress';

export default function LodingDataPage() {
  return (
    <div >
        <div className="empty-state pt-3 pb-3 rounded-4 m-3 shadow" style={{display: 'flex' ,justifyContent: 'center' ,  alignItems: 'center'}}>
            <div className="empty-state__content">
                <div className="empty-state__icon" style={{display: 'flex' ,justifyContent: 'center' ,  alignItems: 'center'}}>
                </div>
                 <div className="empty-state__message mb-2 text-center subjectName" style={{color : '#4863A0'}}><CircularProgress size={20} classNam="me-3"/> Fetching data...</div>
                     <div className="empty-state__help subjectName" style={{color : 'gray'}}>
                     please wait some time
                    </div>
            </div>
         </div>

    </div>
  )
}
                
