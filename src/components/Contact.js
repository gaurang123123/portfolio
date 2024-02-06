
import { Card, CardContent, TextField, Typography,Grid, Container,styled, Button, CardActions,Box } from '@mui/material'
import React from 'react'
const Textcomponent = styled(TextField)(({theme})=>({
  
    [theme.breakpoints.down('md')]:{
        marginTop : '4%',
      }
}))
const Typocomponent = styled(Typography)(({theme})=>({
  
    [theme.breakpoints.down('md')]:{
        marginLeft : '30%',
      }
}))



const Contact = () => {
    const image = './images/contactus.jpeg';
  return (
    <div id="contact">
        <hr></hr>

        <Typography gutterBottom variant='h5' align='center' sx={{fontWeight : '800'}}>
           Prepared to turn your ideas into reality? <br></br>I'm here to help Contact Me
        </Typography>
        <Typocomponent gutterBottom variant='h8' align='center' sx={{marginLeft : '45.5%'}}>
            Lets keep in touch
        </Typocomponent>
        <Container>
        <Card sx={{margin:"5%"}}>
            <CardContent>
                <Grid container>
                    <Grid item lg={6} xs={12}>
                        <Box class="card">
                        <img src={image} alt="image" width="95%" height="90%" class="imgbx"/>
                        </Box>
                 
                    </Grid>
                    <Grid item lg={3} md={3} xs={12}>
                        <Textcomponent label="First Name" placeholder='First Name' variant='outlined'/>
                        <Textcomponent label="Email" placeholder='Email' variant='outlined' sx={{marginTop : '10%'}}/>
                    </Grid>
                    <Grid item lg={3} md={3} xs={12}>
                        <Textcomponent label="Last Name" placeholder='Last Name' variant='outlined'/>
                        <Textcomponent label="Message" placeholder='Message' variant='outlined' sx={{marginTop : '10%'}}/>
                        <Button variant='contained' color="success" sx={{margin : "4%"}}>Submit</Button>
                    </Grid>
                </Grid>
           
            </CardContent>
        </Card>
        </Container>
        
    </div>
  )
}

export default Contact