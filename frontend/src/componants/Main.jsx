
import { Box } from '@mui/system'
import React from 'react'
import { Posts } from './Posts'
export const Main = () => {
  return (
  
        <Box p={2} flex={4} width='100%' sx={{color:'#000'}}>
            <Posts/>
            <Posts/>
        </Box>
 
  )
}
