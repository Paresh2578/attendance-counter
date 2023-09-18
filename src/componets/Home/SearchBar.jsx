import React from 'react'

//componets
import {InputBase ,  styled, alpha  , Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {

    const Search = styled(Paper)(({ theme }) => ({
        position: 'relative',
        height : '8vh',
        borderRadius: theme.shape.borderRadius,
        backgroundColor : '#FFFF',
        // backgroundColor: alpha(theme.palette.common.white, 0.15),
        // '&:hover': {
        //   backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        marginRight: theme.spacing(2),
        marginTop : '20px',
        marginLeft: 0,
        // margin :  '20px theme.spacing(2) 50px 0',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));


      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1.5, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '160vh',
          margin : 'auto'
          // [theme.breakpoints.up('md')]: {
          //   width: '20ch',
          // },
        },

        "@media (max-width:1380px)" : {
          width : '140vh'
         }, 
        "@media (max-width:1170px)" : {
          width : '120vh'
         },
        "@media (max-width:1000px)" : {
          width : '100vh'
         },
        "@media (max-width:845px)" : {
          width : '90vh'
         },
        "@media (max-width:850px)" : {
          width : '65vh'
         },
        // "@media (max-width:770px)" : {
        //   width : '70vh'
        //  },
        // "@media (max-width:610px)" : {
        //   width : '65vh'
        //  },
        "@media (max-width:530px)" : {
          width : '55vh'
         },
        "@media (max-width:445px)" : {
          width : '50vh'
         },
        "@media (max-width:420px)" : {
          width : '45vh'
         },
        "@media (max-width:365Px)" : {
          width : '40vh'
         },
        // "@media (max-width:290Px)" : {
        //   width : '20vh'
        //  }
      }));


  return (
    <>
       <Search  elevation={3} className='mb-3 shadow border border-2 border-primary' >
            <SearchIconWrapper >
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    </>
  )
}

