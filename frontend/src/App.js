import { Box,createTheme,CssBaseline,Paper,Stack} from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Main } from './componants2/Main'
import { Navbar } from './componants/Navbar'
import { Rightbar } from './componants/Rightbar'
import { Sidebar } from './componants/Sidebar'
import { ThemeProvider } from "@mui/material";
import { NavBar } from './componants2/NavBar'
import { amber, blue, grey } from '@mui/material/colors'
import deepPurple from '@material-ui/core/colors/deepPurple'
import { themeSettings } from './theme'
import { Service } from './componants2/Service'
import { Skills } from './componants2/Skills'
import { Work } from './componants2/Work'

export const App = () => {
  // const [mode, setMode] = useState("light");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });



  const [mode, setMode] = useState("light");

const darkTheme = createTheme(themeSettings(mode));

  return (
    // <ThemeProvider theme={darkTheme}>
    //    <Box bgcolor={'background.default'} color={'text.primary'} h={'100vh'}>
     
    //      <Stack>
    //       <Navbar/>

    //       <Stack direction={{sm:'column',md:'row'}}  justifyContent={'space-between'} spacing={3}>
    //         <Sidebar setMode={setMode} mode={mode}/>
    //         <Main/>
    //         <Rightbar/>
    //       </Stack>

    //     </Stack>
       
       
    //    </Box>
    // </ThemeProvider>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    
          <Container maxWidth='xl'>
            <Box>
            <NavBar mode={mode} setMode={setMode}/>
            <Main mode={mode}/>
            <Service/>
            <Skills mode={mode}/> 
            <Work/>
          </Box>
          
          </Container> 
  
   
    </ThemeProvider>
  
    
  )
}
