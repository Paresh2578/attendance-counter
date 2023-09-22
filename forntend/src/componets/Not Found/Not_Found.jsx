import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import './Not_Found.css'


export default function Not_Found() {
    const navigate = useNavigate();
  return (
    <div>
          <div className='Not_Found_main_div'>
            <h1 className='T_404'>404</h1>
            <p className='not_found_msg'>Oops! Something is wrong.</p>
        <button onClick={()=>navigate('/')} className='Not_Found_back_btn btn btn-danger border-0'><i class="icon-home"></i> Go back in initial page, is better.</button>
            </div>
    </div>
  )
}
