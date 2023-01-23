import { Button, Grid, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { absoluteCenter1 } from '../useFunctions'
import MediaSocial from '../images/imagesProjects/MediaSocial.png'
import commerce from '../images/imagesProjects/commerce.png'
import Netflix from '../images/imagesProjects/Netflix.png'
import Netflix1 from '../images/imagesProjects/Netflix1.png'
import { blue } from '@mui/material/colors'
export const Work = () => {
  return (
    <Grid container mt={12} justifyContent='space-between' alignItems='center'>
       <Grid xs={12} sm={6}>
        <Stack direction={'column'} spacing={3}>
            <Typography variant='h3'>Work a lot</Typography>
            <Typography>Full stack developer width hight level of right experience in web designing and intermidiate in backend,then producting the Quality work</Typography>
            <Button variant='contained' sx={{width:'100%',maxWidth:'180px',py:1}}>see more</Button>
        </Stack>
       </Grid>
       <Grid xs={12} sm={6} mt={{xs:4,md:0}}>
          <Paper sx={{maxWidth:{xs:'300px',md:'360px'},minHeight:{xs:'300px',md:'360px'},borderRadius:'50%',display:'block',ml:{xs:'0',md:'auto'},position:'relative'}} elevation={3} >
            <Paper sx={{...absoluteCenter1,maxWidth:'100px',width:'100%',maxHeight:'100px',borderRadius:'50%',display:'block',ml:'auto',overflow:'hidden'}} elevation={6}>
            <img src={Netflix1} alt="" style={{width:'180%'}} />
            </Paper>
            
            <Paper sx={{position:'absolute',maxWidth:'100px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',justifyContent:'center',alignItems:'center',minHeight:'100px',borderRadius:'50%',top:0,left:0,overflow:'hidden'}} elevation={6}>
                <img src={MediaSocial} alt="" style={{width:'180%'}} />
            </Paper>
            <Paper sx={{position:'absolute',maxWidth:'100px',width:'100%',maxHeight:'100px',borderRadius:'50%',top:0,right:0,overflow:'hidden'}} elevation={6}>
                 <img src={commerce} alt="" style={{width:'180%'}} />
            </Paper>
            <Paper sx={{position:'absolute',maxWidth:'100px',width:'100%',maxHeight:'100px',borderRadius:'50%',bottom:0,left:0,overflow:'hidden'}} elevation={6}>
                 <img src={Netflix} alt="" style={{width:'180%'}} />
            </Paper>
            <Paper sx={{position:'absolute',maxWidth:'100px',width:'100%',maxHeight:'100px',borderRadius:'50%',bottom:0,right:0,overflow:'hidden'}} elevation={6}>
                 <img src={Netflix1} alt="" style={{width:'180%'}} />
            </Paper>


          </Paper>
       </Grid>
    </Grid>
  )
}
