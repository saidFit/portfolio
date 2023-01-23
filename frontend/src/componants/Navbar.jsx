
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { theme } from "../theme";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
    Stack
  } from "@mui/material";

import React, { useState } from 'react'


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

// const Search  = styled('div')({
//     background:'white',
//     color:'#000',
//     width:
// })  

const Search = styled(Box)({
    background:'white',
    color:'#000',
    padding:'10px 30px',
    borderRadius:'16px',
    width:400,
    boxShadow:'1px 1px 12px rgba(0, 0, 0, 0.232)'
})
export const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
   
       <AppBar position="sticky" mb='20px'>
        <StyledToolbar>
            <Stack direction={'row'} spacing={2}>
             <Typography sx={{display: {xs:"none" ,md:"flex"}}}>
                Said app
            </Typography>
            <Pets sx={{ display: { xs: "block", md: "none" } }} /> 
            </Stack>
           <Search>
            <InputBase placeholder="Search..." sx={{width:'100%',color:'#000'}} />
           </Search>
            
           <Stack spacing={2} direction="row" alignItems={'center'} sx={{display: { xs:"none" , md:"flex" }}}>
            <Badge badgeContent={9} color="error">
                <Mail color="primary" />
            </Badge>
            <Badge badgeContent={4} color="error">
                <Notifications color="primary" />
            </Badge>
            <Box onClick={() => setOpen(true)}>
             <Avatar
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            sx={{display : {xs: "none" , md:"flex"}}}
            />
            <Typography sx={{display : {xs: "flex" , md:"none"}}}>
                said
            </Typography>    
            </Box>
           
           </Stack>
           <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "50%",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "50%",
          horizontal: "right",
        }}
        
        sx={{top:20}}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </StyledToolbar>
        </AppBar> 
  )
}
