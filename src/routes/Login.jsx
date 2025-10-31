import { Container, Paper, Link, Avatar, Typography, Box, TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import {Link as ReactRouter} from 'react-router-dom'
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";




const Login = () => {
   
  //googleAuth Handler, its async because you are calling to a db 
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);

  }

  const handleSubmit = () => {
    console.log('Sign in submit')
  }

  const handleGoogleSignin = () => {
    alert("Google sign in")
  }
  return (
  <>
  <Container maxWidth='xs'>
    <Paper elevation={10} sx={{marginTop: 8, padding: 2}}>
      <Avatar sx={{
        mx: 'auto',
        bgcolor: 'primary.main',
        textAlign: 'center',
        mb: 1
      }}>
        <LockOutlineIcon/>
      </Avatar>
      <Typography component='h1' variant="h5" sx={{textAlign:'center'}}>
        Sign in
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}}>
        <TextField placeholder="Enter email" fullWidth required autoFocus sx={{mb:2}}></TextField>
         <TextField placeholder="Enter password" fullWidth required type="password"  sx={{mb:2}}></TextField>
         <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label='Remember me'/>
         <Button type="submit" variant="contained" fullWidth sx={{mt:1}}>SIGN IN</Button>
         <Grid container justifyContent='space-between' sx={{mt:1}}>
          <Link component={ReactRouter} to='/forgot'>Forgot password</Link>
          <Link component={ReactRouter} to='/register'>Create account</Link>
         </Grid>
      </Box>
      <Button onClick={logGoogleUser} variant="outlined" fullWidth color="success" sx={{mt:1}}>SIGN IN WITH GOOGLE</Button>
    </Paper>
  </Container>
  </>  
  )
}

export default Login;