import backgroundImage from '../assets/spinRepublicTeamsTwo.jpg'
import { Box, Button, Typography } from '@mui/material'
import logo from "../assets/srlogowhite.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <Box
        sx={{
          height: "60vh",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
        
      >
        <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Box component='img' src={logo} sx={{ height: 200, mt: 4 }}/>
        <Typography variant='h4' textAlign={'center'} color='white'>see you at the tables</Typography>
        <Button component={Link} variant='contained' sx={{width: 100, mx: 'auto'}} to='/login'>Login</Button>
        <Typography sx={{mx:'auto'}} variant='p' color='white'>Don't have an account? <Typography color='primary' component={Link} to='/register'>create one here!</Typography></Typography>
      </Box>
      </Box>
      
    </>
  )
}

export default Hero;