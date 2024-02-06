import { Grid, Typography,Box,Container,styled } from '@mui/material'
import React from 'react'
const Typographycomponent = styled(Typography)(({theme}) =>({

    marginLeft : "40%",
    fontSize : "2rem",
    fontFamily : 'Verdana, Geneva, Tahoma, sans-serif',
    [theme.breakpoints.down('md')]:{
        marginLeft : '8%',
      }
}))
const Myworks = () => { 
    const rwe = './images/rwe.mp4';
    const uchat = './images/uchat.mp4';
    const fli = './images/flipkart.mp4';
    const uwats = './images/uwats.mp4';
  return (
    <Box id="projects"> 
        <hr></hr>
        <Box >
            <Typography sx={{marginLeft:'40%',color:'orange',fontWeight:'bold',fontSize:'300%' }}>My Portfolio</Typography>
            <Typography sx={{alignitem:'center',justifycontent:'center',marginLeft:'45%',marginBottom: "10%" }}>Latest Projects</Typography>
        </Box>
        <Container>
        <Grid container >
            <Grid item lg={3}>
                <video controls autoPlay loop src={uwats} height="30%" style={{marginLeft:'8%'}}/>
            </Grid>
            <Grid item lg={3}>
                <video controls autoPlay loop src={uchat} height="80%" width="100%"/>
            </Grid>
            <Grid item lg={3}>
                <video controls autoPlay loop src={rwe} width="60%" style={{marginLeft:'8%'}}/>
            </Grid>
            <Grid item lg={3}>
                {/* <img src={fli} alt='' height="90%" width="100%"/> */}
                <video controls autoPlay loop src={fli} width="100%" style={{marginLeft:'8%'}}/>
            </Grid>
        </Grid>
        </Container>
       
    </Box>
  )
}

export default Myworks