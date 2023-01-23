import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Stack } from '@mui/system'
import React from 'react'
import { FaConnectdevelop } from 'react-icons/fa'
import {TfiServer} from 'react-icons/tfi'
import { absoluteCenter, FlexBetweenItems, transition } from '../useFunctions'
export const Service = () => {
  return (
    <Box> 
        <Stack direction={'column'}sx={{mx:'auto',mb:8,mt:{xs:8,md:0},textAlign:'center',width:'100%'}}>
     <Typography variant='h2' sx={{color:blue[700]}}>__My Awesome__</Typography>
     <Typography variant='h2'>Service</Typography>
     <Typography>__Create the full Stack web site__ </Typography>     
        </Stack>

      <Grid container sx={{width:'100%',maxWidth:'800px',gap:'20px',justifyContent:{xs:'space-center',md:'space-evenly'},mx:'auto'}}>

        <Grid className='Service' item xs={12} md={5} sx={{borderRadius:'13px',p:3,border:'1px solid',position:'relative',overflow:'hidden'}}>
            <Stack sx={{mx:'auto',textAlign:'center',position:'relative',zIndex:3,...transition}} spacing={2} direction='column'>
               <IconButton sx={{}} disableRipple={true}>
            <FaConnectdevelop size={50}/>
            </IconButton> 
            <Typography variant='h2'>Front end</Typography>
            <Typography>Html,css JavaScript and React js...</Typography> 
            </Stack>
            <Paper className='show-bg' sx={{...absoluteCenter,...transition,width:'350px',height:'350px',borderRadius:'50%',left:'0%',background:blue[600]}} elevation={3}></Paper>
           
        </Grid>
       
        <Grid className='Service' item xs={12} md={5} sx={{borderRadius:'13px',p:3,border:'1px solid',position:'relative',overflow:'hidden'}}>
            <Stack sx={{mx:'auto',textAlign:'center',position:'relative',zIndex:3,...transition}} spacing={2} direction='column'>
               <IconButton sx={{}} disableRipple={true}>
            <TfiServer size={50}/>
            </IconButton> 
            <Typography variant='h2'>Back end</Typography>
            <Typography>Node js express js mongodb and rest api...</Typography> 
            </Stack>
            <Paper className='show-bg' sx={{...absoluteCenter,...transition,width:'350px',height:'350px',borderRadius:'50%',left:'0%',background:blue[600]}} elevation={3}></Paper>
           
        </Grid>

      </Grid>  

      <Grid container sx={{mx:'auto',width:'100%',justifyContent:'center',mt:5}} >

        <Stack direction={{xs:'column',sm:'row'}}>
        <Stack direction={'column'} sx={{textAlign:'center'}}>
           <Box sx={{border:`3px solid ${blue[700]}`,width:'60px',mx:'auto',height:'60px',...FlexBetweenItems,borderRadius:'50%'}}>
            <Typography variant={'h5'}>+1</Typography>
         </Box> 

         <Box>
           <Typography sx={{textAlign:'center'}} variant={'h4'}>Year</Typography>
           <Typography>Experience just Myself</Typography>
         </Box>
        </Stack>
         
        <Stack direction={'column'} sx={{textAlign:'center'}}>
           <Box sx={{border:`3px solid ${blue[700]}`,width:'60px',mx:'auto',height:'60px',...FlexBetweenItems,borderRadius:'50%'}}>
            <Typography variant={'h5'}>+17</Typography>
         </Box> 

         <Box>
           <Typography sx={{textAlign:'center'}} variant={'h4'}>Year</Typography>
           <Typography>Simple and Advanced</Typography>
           <Typography sx={{textAlign:'center'}}>Projects</Typography>
         </Box>
        </Stack>
         
        <Stack direction={'column'} sx={{textAlign:'center'}}>
           <Box sx={{border:`3px solid ${blue[700]}`,width:'60px',mx:'auto',height:'60px',...FlexBetweenItems,borderRadius:'50%'}}>
            <Typography variant={'h5'}>+1</Typography>
         </Box> 

         <Box>
           <Typography sx={{textAlign:'center'}} variant={'h4'}>+0</Typography>
           <Typography>Companies</Typography>
           <Typography sx={{textAlign:'center'}}>Work</Typography>
         </Box>
        </Stack>
        </Stack>
         
      </Grid>
     

    </Box>
  )
}
