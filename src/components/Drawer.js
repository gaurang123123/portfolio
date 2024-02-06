import { List, ListItem, ListItemButton, ListItemIcon, ListItemText,Drawer,Tabs,Tab,Box,styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import {HashLink as Link } from 'react-router-hash-link';

const Component = styled(Tabs)`
color: red;
display : flex;
flex-direction : column;
`
const Drawercomp = ({toggle,setToggle}) => {
    const [close,setclose] = useState(false);
    const [select,setSelect] = useState();

  return (
   <>
   
   <Drawer open={toggle} onClose={()=>setToggle(false)} >
    <Box>
        <Typography style={{margin : '15%', color : 'red' , backgroundColor : 'yellow'}}>Menu</Typography>
    </Box>
    <List>
        
        <ListItemButton>
            <ListItemIcon>
               <ListItemText>Projects</ListItemText>
              
        
               
               
            </ListItemIcon>
          
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>About</ListItemText>
              
                {/* <Component sx={{marginLeft : 'auto'}} textColor="inherit" value={select} indicatorColor="secondary" onChange={(e,value)=> setSelect(value)}>
                <Tab label="Projects" />
                <Tab label="About"/>
                <Tab label="Contact us"/>
                   </Component> */}
               
               
            </ListItemIcon>
          
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>
                <Link to='#contact' style={{textDecoration:'none',color:'#fff'}}>Contact Us</Link>

                </ListItemText>
              
                {/* <Component sx={{marginLeft : 'auto'}} textColor="inherit" value={select} indicatorColor="secondary" onChange={(e,value)=> setSelect(value)}>
                <Tab label="Projects" />
                <Tab label="About"/>
                <Tab label="Contact us"/>
                   </Component> */}
               
               
            </ListItemIcon>
          
        </ListItemButton>
      
    </List>
   
   </Drawer>
   </>
  )
}

export default Drawercomp