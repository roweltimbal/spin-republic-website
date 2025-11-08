import backgroundImage from '../assets/spinRepublicTeamsTwo.jpg'
import { Box, Button, Typography } from '@mui/material'
import logo from "../assets/srlogowhite.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/User.context'
import AboutUsSection from '../components/About'

const Hero = () => {
  const {currentUser} = useContext(UserContext);
  return (
    <>
    <Box
        sx={{
          height: "100vh",
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
        <Box component='img' src={logo} sx={{ height: {lg: 315, md: 250, xs: 150 }, mt: 4, width: {
          lg: 700,
          sm: 400,
      
        } }}/>
        <Typography variant='h4' textAlign={'center'} color='white' sx={{mb:2, fontSize: {
          xs: '1.5rem',    
          lg: '2rem'     
        }}}>see you at the tables</Typography>
        {!currentUser && (
          <>
          <Button component={Link} variant='contained' sx={{width: 100, mx: 'auto'}} to='/login'>Login</Button>
        <Typography sx={{mx:'auto'}} variant='p' color='white'>Don't have an account? <Typography color='primary' component={Link} to='/register'>create one here!</Typography></Typography>
        </>
        )}
      </Box>
      </Box>
      <AboutUsSection/>
     </>
  )
}

export default Hero;