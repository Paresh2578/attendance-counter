import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Redux
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { dataActions } from ';


//mui
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";



//compontes
import SearchBar from './SearchBar'
import ViewAll_List_Data from './ViewAll_List_Data'
import Add_data from './Other opration/Add_data'
import Empty from './Other opration/Empty';
import Header from '../Header/Header'
import Authentication from '../../Authentication/Authentication';



export default function Home() {
  const navigate = useNavigate();

  let auth = localStorage.getItem('auth');
  // let auth =false;
  
  let arr = useSelector(state => state.data);
  arr.reverse();

 const [data , setData] = useState(arr);
 const [open_addData , setOpen_addData] = useState(false);
 const [searchText , setSearchText]  = useState('');

  useEffect(()=>{
     setData(arr);
     if(!auth){
      navigate('/Authentication')
     }
  },[arr])

    ////find scrren width
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
      {
        auth ? 
          <>
            <div style={{ marginTop: '6rem' }}>

              <Header/>
              
              {/* serach bar */}
              <SearchBar setSearchText={setSearchText} />

              {/* display all data */}
              <div style={{ marginTop: '3rem' }}>
                {data.length != 0
                  ?
                  data.filter((item) => item.subject.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.semester.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.className.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.date.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.time.toLowerCase().includes(searchText.toLowerCase())
                  ).map((d, index) => (
                    // 'paresh'
                    // `${d.date}`
                    <ViewAll_List_Data key={index} data={d} index={index} />
                  ))
                  : <Empty />}

                </div>
              </div>

              {/* add data */}
                <Fab
                  aria-label="like"
                  className="bg-primary text-light"
                  size={windowSize[0] < 500 ? "small" : ''}
                  style={{ position: "fixed", bottom: '2vh', right: '1rem' }}
                  onClick={() => setOpen_addData(true)}
                >
                <AddIcon />
              </Fab><Add_data open_addData={open_addData} setOpen_addData={setOpen_addData} />
          </>  

         :
         <Authentication/>
      }
    </>
  )
}
