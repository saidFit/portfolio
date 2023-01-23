import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import vector1 from '../images/Vector1.png'
import vector2 from '../images/Vector2.png'
import logo from '../images/R.png'
import {FaConnectdevelop} from 'react-icons/fa'
import {SiAltiumdesigner} from 'react-icons/si'
import { FlexItems } from '../useFunctions'
import goal from '../images/goal.png'
import { motion } from "framer-motion";


const transition = { duration: 2, type: "spring" };

export const Main = ({mode}) => {

const arr = ['FullStack developer','Frontend','Backend']
const [text,setText] = useState('')
const [index,setIndex] = useState(0)
const [split,setSplit] = useState(1)


useEffect(()=>{
    let interval = setInterval(() => {
          let split_var = arr[index].substring(0,split)

          setText(split_var)
          setSplit(split + 1)
           
          if(split >= arr[index].length){
              
              if(index >= arr.length -1){
                setIndex(0)
                setSplit(1)
                return;
              }
              
             setIndex(index +1)
             setSplit(1)
          }
           
    }, 200);

    return () => clearInterval(interval)
},[text])

  return (
    <Grid container spacing={5} sx={{mt:8,height:'80vh',width:'96%',mx:'auto',position:'relative'}}>
        <Grid  xs={12} md={6} sx={{position:'relative'}}>
           <Stack spacing={2} direction='column' sx={{py:{sx:2,md:8}}}>
            <motion.div
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            >
            <Paper
            sx={{border:'0.2px solid',borderRadius:'30px',p:1,px:2,width:'fit-content'}} elevation={2} >Welcome to my Portfolio</Paper>
            </motion.div>
            
            <Typography variant='h2'>Hyy ! I am</Typography>
            <Typography variant='h2' color={(theme) => theme.palette.primary}>Said Bifalan</Typography>
            <Typography variant='h2'>{text}</Typography>
            <Typography>Full stack developer width hight level of right experience in web designing and intermidiate in backend,then producting the Quality work</Typography>
           </Stack>
           <Stack sx={{position:"absolute",top:'5%',left:'5%',width:'50%',height:'200px',zIndex:-2}}>
            <Box sx={{width:'100px',height:'100px',borderRadius:'50%',background:mode == 'light'?'#E0E0E0':'rgb(3 34 40)',position:'absolute',top:'-20px',boxShadow:'1px 1px 12px rgba(5, 5, 6, 0.206)'}}></Box>
            <Box sx={{width:'100px',height:'100px',borderRadius:'50%',background:mode == 'light'?'#E0E0E0':'rgb(3 34 40)',position:'absolute',left:'35%',top:'10%',boxShadow:'1px 1px 12px rgba(5, 5, 6, 0.206)'}}></Box>
            <Box sx={{width:'100px',height:'100px',borderRadius:'50%',background:mode == 'light'?'#E0E0E0':'rgb(3 34 40)',position:'absolute',bottom:'0%',boxShadow:'1px 1px 12px rgba(5, 5, 6, 0.206)'}}></Box>
           </Stack>
        </Grid>
        <Grid  sx={{position:'relative',height:'100%',p:0,m:0}} xs={12} md={6}>

            <Box sx={{maxWidth:{xs:'200px',md:'300px'},width:'100%',position:'relative',minHeight:{xs:'200px',md:'260px'},top:'10%',left:{xs:'17%',md:'30%'}}}>
            <img src={vector1} alt="img" style={{width:'100%',position:'absolute',right:20}}  />
            <img src={vector2} alt="img" style={{width:'100%',position:'absolute',left:20}}  />
            <img src={logo} alt="img" style={{width:'100%',position:'absolute',left:20}}  />
            <Paper sx={{position:'absolute',right:'-30%',top:'-13%',p:1,borderRadius:'10px',...FlexItems}}
             elevation={3}
            >
                <IconButton  sx={{color:(theme) => theme.palette.primary}}><FaConnectdevelop/></IconButton>
                <Typography sx={{p:0}}>Web Developer</Typography>
            </Paper>
            <motion.img
            
            src={goal} alt="img" style={{position:'absolute',left:'-30%',top:'-18%',width:'20%'}} />


            <Paper sx={{position:'absolute',left:'-30%',bottom:'-10%',p:1,borderRadius:'10px',...FlexItems}}
             elevation={3}
            >
                <IconButton  sx={{color:(theme) => theme.palette.primary}}><SiAltiumdesigner/></IconButton>
                <Typography sx={{p:0}}>Best Design</Typography>
            </Paper>
            </Box>
           
        </Grid>
    </Grid>
  )


}
