import { Box, Container, Grid, Typography,Button,styled } from "@mui/material";
import React from "react";
const Containercomponent = styled(Container)(({theme}) =>({

    marginLeft : "20%",
    [theme.breakpoints.down('md')]:{
        marginLeft : '0%',
      }
}))
const Typographycomponent = styled(Typography)(({theme}) =>({

    marginLeft : "-350%",
    fontSize : "2rem",
    fontFamily : 'Verdana, Geneva, Tahoma, sans-serif',
    [theme.breakpoints.down('md')]:{
        marginLeft : '-50%',
        marginTop : '4%',
        fontSize : '2rem',
      }
}))

const Certificationsection = () => {
  const jo = "./images/jovac.jpg";
  const ud = "./images/udemy.jpg";
  return (
    <Box>
      <hr></hr>
        <Box >
            <Typography sx={{marginLeft:'40%',color:'orange',fontWeight:'bold',fontSize:'300%' }}>Certification</Typography>
            <Typography sx={{alignitem:'center',justifycontent:'center',marginLeft:'45%',marginBottom: "5%" }}>My Acheivement</Typography>
        </Box>
      {/* <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          float: "inline-end",
          marginLeft: "30vw",
          fontSize: "10rm",
        }}
      >
        <Typographycomponent variant="h2">Certification</Typographycomponent>
        <hr></hr>
      </Box> */}
      <Containercomponent>
        <Grid container>
          <Grid item lg={6} className="imghover">
            <figure class="container">
              <img src={jo} alt="sample89" />
              <figcaption>
              <h3>Mobile App Development</h3>
              {/* <h3><a href="/images/GAURANG AGRAWAL.pdf" download="jovac" style={{textDecoration :'none'}}>Download</a></h3>   */}
              </figcaption>
              <a href="#"></a>
            </figure>
          </Grid>
          <Grid item lg={6}>
            <figure class="container">
              <img src={ud} alt="sample89" />
              <figcaption>
                <h3>Web App Development</h3>
              </figcaption>
              <a href="#"></a>
            </figure>
          </Grid>
        </Grid>
      </Containercomponent>
    </Box>
  );
};

export default Certificationsection;
