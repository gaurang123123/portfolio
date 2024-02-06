import { AppBar, Avatar, Box,Button,Stack,Toolbar,Typography,styled ,Tab,Tabs, IconButton,useTheme, useMediaQuery,makeStyles} from '@mui/material'
import React, { useState } from 'react'
import Drawercomp from './Drawer'
import MenuIcon from '@mui/icons-material/Menu';
import {HashLink as Link } from 'react-router-hash-link';

const Image = './images/contact.jpg'
const OuterBox = styled(Box)`
    color : white,
     width : 100%,
      height : 90vh,
      background-color: 'red',
`

const Navbar = () => {
    const image = './images/side.jpg'
    const [select,setSelect] = useState();
    const [toggle,setToggle] = useState(false);
    const theme = useTheme();
    // const classes = useStyle();
const ismatched = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
<AppBar position='fixed'>
        <Toolbar>
          {
            ismatched ? ( <IconButton onClick={()=> setToggle(true)}>
            <MenuIcon />
            </IconButton>) : null
          } 
            
            <Avatar alt="image logo" src={image}/>
            <Typography variant='h6' component='div' style={{marginLeft : '1%'}}>Portfolio</Typography>
            {
              !ismatched ? (<Tabs sx={{marginLeft : 'auto'}} >
<Link to='#about' style={{textDecoration:'none',color:'#fff',alignSelf:'center',marginLeft:'10',padding:'10'}} className='padd' >About</Link>
               <Link to='#projects' style={{textDecoration:'none',color:'#fff'}} className='padd' >Projects</Link>

                <Link to='#contact' style={{textDecoration:'none',color:'#fff'}} className='padd' >Contact Us</Link>
              </Tabs>
  
                // !ismatched ?  (<Tabs sx={{marginLeft : 'auto'}} textColor="inherit" value={select} indicatorColor="secondary" onChange={(e,value)=> setSelect(value)}>
               
               
                   
                   ) : null
}
           
            <Button  color="error" variant='contained' sx={{margin : ismatched ? "10px" : "0px" }}><a href="/images/GAURANG AGRAWAL.pdf" style={{textDecoration:'none'}} download="cv">Download cv</a></Button>
            <Drawercomp toggle={toggle} setToggle={setToggle}/>  

        </Toolbar>

    </AppBar>
    </Box>
    

  )
}

export default Navbar