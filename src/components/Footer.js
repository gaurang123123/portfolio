import { Container, Grid, Typography ,Box } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box sx={{backgroundColor : '#231967', color : "#fff"}}>
        <Container>
            <Grid container>
                <Grid item lg={3} xs={12} sm={6} sx={{marginTop : "2%"}}>
                    <Typography variant="h6">Services</Typography>
                    <Typography variant="h8">Web development</Typography>
                    <br></br>
                    <Typography variant="h8">Mobile app development</Typography>
                    <br></br>
                    <Typography variant="h8">Network tester</Typography>
                    <br></br>
                    <Typography variant="h8">Video Editing</Typography>
                </Grid>
             
                <Grid item lg={3} xs={12} sm={6}sx={{marginTop : "2%"}}>
                    <Typography variant="h6">Love to do</Typography>
                    <Typography variant="h8">Sketch Artist</Typography>
                    <br></br>
                    <Typography variant="h8">Playing Piano</Typography>
                    <br></br>
                    <Typography variant="h8">Playing Badminton</Typography>
                </Grid>
                <Grid item lg={3} xs={12} sm={6} sx={{marginTop : "2%"}}>
                    <Typography variant="h6">Follow Me On</Typography>
                    <Typography>
                       <a href="https://www.instagram.com/gaurang.agrawal.1612/" className='cursor'>
                       <InstagramIcon color='error' fontSize='medium' sx={{margin : '2%'}}/>
                        </a> 
                        <a href="https://github.com/gaurang123123" className='cursor'>
                       <GitHubIcon color='primary' fontSize='medium' sx={{margin : '2%'}}/>
                        </a> 
                        <a href="https://www.linkedin.com/in/gaurang-agrawal-4ab64627a/" className='cursor'>
                       <LinkedInIcon color='error' fontSize='medium' sx={{margin : '2%'}}/>
                        </a>
                        <a href="https://www.facebook.com/gaurang.agrawal.161/" className='cursor'>
                       <FacebookIcon color='primary' fontSize='medium' sx={{margin : '2%'}}/>
                        </a>
                        <a href="" className='cursor'>
                        <TelegramIcon color='primary' fontSize='medium' sx={{margin : '1%'}}/>
                        </a>
                        <a href="https://www.youtube.com/@GaurangAgrawal411" className='cursor'>
                       <YouTubeIcon color='error' fontSize='medium' sx={{margin : '1%'}}/>
                        </a>
                    </Typography>
                </Grid>
                <Grid item lg={3} xs={12} sm={6} sx={{marginTop : "2%"}}>
                    <Typography variant="h6">Contact Me</Typography>
                    <Typography variant="h8">+917818801206 | </Typography>
                    <Typography variant="h8">gaurangag06@gmail.com</Typography>

                </Grid>
            </Grid>
            <hr></hr>
            <Typography variant='h9' sx={{marginBottom : '5%' , padding : '0%'}}>© GAURANG, All right reserved</Typography>
        </Container>
    </Box>
  )
}

export default Footer