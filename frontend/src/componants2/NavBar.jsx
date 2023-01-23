import { Send } from '@mui/icons-material'
import { Button, Container, Link, Paper, Stack, Switch, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ColorByToken } from '../ColorByToken'
import { FlexBetweenItems, FlexItems } from '../useFunctions'

export const NavBar = ({mode,setMode}) => {

  return (
    <Paper 
    >
      <Container maxWidth='xl'>
         <Stack  sx={{...FlexBetweenItems,py:2}}>
        <Box sx={{...FlexItems}}>
        <Typography variant='h3'>said</Typography>
        <Switch variant='otlined' onClick={()=>setMode(mode == 'light'?'dark':'light')}/>
      </Box>
      <Box sx={{display:{xs:'none',sm:'block'}}}>
        <Link href='#'>Home</Link>
        <Link href='#'>Service</Link>
        <Link href='#'>Experiences</Link>
        <Link href='#'>Testimonials</Link>
        <Button variant="outlined" endIcon={<Send />}>
  Send
</Button>
      </Box>
      </Stack>
      </Container>
     
    
    </Paper>
  )
}
