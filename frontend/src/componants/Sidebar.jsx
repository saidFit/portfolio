import { AccountBox, Group, Home, ModeNight, Pages ,Person,Settings,Storefront } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, Switch, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

export const Sidebar = ({mode,setMode}) => {
  return (
        <Box p={2} flex={1} color='#fff' sx={{display:{xs:'none',sm:'block'}}}>
            <Box position={'Fixed'}>
               <List>
            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                    <Home/>
                <Typography variant='h6'>
                    Homepage
                </Typography>
            </Stack>
            

            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                    <Pages/>
                <Typography variant='h6'>
                    Pages
                </Typography>
            </Stack>
            

            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                    <Group/>
                <Typography variant='h6'>
                    Group
                </Typography>
            </Stack>
            

            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                    <Storefront/>
                <Typography variant='h6'>
                Marketplace
                </Typography>
            </Stack>
            

            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                    <Person/>
                <Typography variant='h6'>
                Friends
                </Typography>
            </Stack>
            

            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                    <Settings/>
                <Typography variant='h6'>
                    Settings
                </Typography>
            </Stack>
            

            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                    <AccountBox/>
                <Typography variant='h6'>
                    Profile
                </Typography>
            </Stack>
            

          
            <Stack direction={'row'} spacing={2} alignItems={'center'} py='10px' sx={{color:'#616161'}} >
                <ModeNight/>
                <Switch onClick={() => setMode(mode == 'light' ? 'dark':'light')} />
            </Stack>
        
            
          </List>  
            </Box>
         
        </Box>
  )
}
