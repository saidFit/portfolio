import { Box, IconButton, Paper, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Stack } from '@mui/system'
import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import { SkillsData } from '../data/data'
import { absoluteCenter, transition } from '../useFunctions'
export const Skills = ({mode}) => {
  return (
    <Box sx={{mt:8}}>

      <Stack direction={'column'}sx={{mx:'auto',mb:8,mt:{xs:16,md:0},textAlign:'center',width:'100%'}}>
     <Typography variant='h2' sx={{color:blue[700]}}>__My Skills__</Typography>
     <Typography variant='h2'>My Knowledge</Typography>
 
        </Stack>

      <Stack direction={{xs:'column',sm:'row'}} sx={{justifyContent:'center',flexWrap:'wrap',gap:'20px',textAlign:'center'}} spacing={0}>
        {SkillsData.map((skill) =>{
          const {header,logo,title,size} = skill
          return(
          <Paper className={mode=='light'?'Skills light':'Skills mode'} elevation={3} sx={{p:5,borderRadius:'20px',...transition,position:'relative',overflow:'hidden'}}>
            <Box sx={{position:'relative',zIndex:3}}>
           <Paper sx={{textAlign:'center',mb:1,borderRadius:'30px',py:1,px:2,fontWeight:'bold'}} elevation={3}>{header}*</Paper>
          <IconButton className='skill' sx={{border:'7px solid #fff',mx:'auto',display:'block',position:'relative',background: `conic-gradient(rgb(8,145,170)${size}%,#ddd ${size}%)`}}>
            {logo}
          </IconButton>
          <Typography variant='h4' sx={{mt:1}}>{title}</Typography>
            </Box>
           
          <Paper className='show-bg' sx={{...absoluteCenter,...transition,width:'350px',height:'350px',borderRadius:'50%',background:blue[600]}} elevation={3}></Paper>
        </Paper>
          )
        })}
       
      </Stack>
    </Box>
  )
}
