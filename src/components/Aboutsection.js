import React from 'react'
import {Box, Container, Grid,Image, Typography} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import WebIcon from '@mui/icons-material/Web';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import BugReportIcon from '@mui/icons-material/BugReport';
import StorefrontIcon from '@mui/icons-material/Storefront';
const Aboutsection = () => {
    const image = './images/About.jpg';
  return (

    <Box sx={{marginTop : '5%', backgroundColor : '#eeecfb',color : "grey"}}>
   <Container>
    <Grid container >
        <Grid item lg={6} sm={12} xs={12}>
            <img src={image} alt="image" height="70%" width="50%" style={{ marginTop : '10%', marginLeft : '20%'}}  class="imgbx"/>
        </Grid>
        <Grid container lg={6} sm={12} xs={12}>
           
            <Grid item lg={12} sm={12} xs={12}>
            <Typography variant='h4' sx={{fontSize : '1rem' , fontWeight : 'bold' , color : '#fertt', marginTop:"2%"}}><InfoIcon fontSize='medium'/>About Me</Typography>
          <Typography sx={{fontFamily : 'cursive',fontWeight : '500',fontSize : '20px',color:"#ferdd"}}>Hello I'm GAURANG AGRAWAL</Typography>
          <Typography>A self taught developer who loves to code something that will impact and change something in the life of individual</Typography>
            </Grid>
            <Grid item lg={6} >
            <Typography sx={{fontWeight : "400"  , fontFamily :"fantasy", marginTop : '4%'}}><InstallMobileIcon  fontSize='large'/>
            Mobile App Development<br></br>
               Technology Learned Flutter,React-Native for Hybrid app development
               </Typography> 
          
            </Grid>
            <Grid item lg={6} >
               <Typography sx={{fontWeight : "400" , fontFamily :"fantasy", marginTop : '4%'}}><WebIcon fontsize="large"/>Web Development<br></br>
               Technology Learned Html,css,javascript,reactjs,Bootstrap,
               <br></br>
               php,mongodb,mysql,material ui
               </Typography> 
           
            </Grid>
            <Grid item lg={6} >
               <Typography sx={{fontWeight : "400" , fontFamily :"fantasy", marginTop : '4%'}}><BugReportIcon fontsize="large"/>Website Security<br></br>
              Learned Various tools for website penetration testing.
               </Typography> 
         
            </Grid>
            <Grid item lg={6} >
               <Typography sx={{fontWeight : "400"  , fontFamily :"fantasy", marginTop : '4%'}}><StorefrontIcon fontsize="large"/>Video Editing<br></br>
              Done video editing certification to edit videos like a pro and having knowledge of various video editing tools.
               </Typography> 
          
            </Grid>
         
        </Grid>
    </Grid>
   </Container>
    </Box>
  )
}

export default Aboutsection