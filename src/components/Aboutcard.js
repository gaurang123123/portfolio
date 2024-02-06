import React from 'react';
import { Container, Grid, Typography ,Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




const Aboutcard = () => {
    const theme = useTheme();
  return (
    <Container>
        <hr></hr>
        <Box >
            <Typography sx={{marginLeft:'40%',color:'orange',fontWeight:'bold',fontSize:'300%' }}>Services</Typography>
            <Typography sx={{alignitem:'center',justifycontent:'center',marginLeft:'45%',marginBottom: "10%" }}>What i offer</Typography>
        </Box>
<Grid container spacing={4}>
        <Grid item lg={4}>
        <Card sx={{ display: 'flex' , height:'90%'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          Web Development
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <b>Frontend:</b><br></br>Html,Css,javascript,<br></br>Reactjs,Nextjs,Bootstrap,<br></br>Material ui.
          <br></br>
          <b>Backend:</b><br></br> Nodejs,Express js,Php,<br></br>mongodb,mysql.
        </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="./images/webd.jpg"
      alt="Live from space album cover"
    />
  </Card>
        </Grid>
        <Grid item lg={4}>
        <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          App Development
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <b>Hybrid Mobile App Development:</b><br></br>
          Flutter,React Native.
          <br>
          </br>
          <b>Backend:</b><br></br>
          Firebase,Mongodb,Node js,Express js.
        </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="./images/appd.jpg"
      alt="Live from space album cover"
    />
  </Card>
        </Grid>
        <Grid item lg={4}>
        <Card sx={{ display: 'flex',height:'90%' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          Video Editor
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <b>Learn Various Video Editing Tools:</b><br></br>
          Microsoft Clipchamp,Filmora<br></br>
          Edit many video for my youtube
          channel. <br></br>And do many freelancing work.
        </Typography>
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="./images/videoe.jpg"
      alt="Live from space album cover"
    />
  </Card>
        </Grid>
 
    </Grid>
    </Container>
    
   
  )
}

export default Aboutcard