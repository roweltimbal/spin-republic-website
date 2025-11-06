import { Container, Paper, Link, Avatar, Typography, Box, TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import {Link as ReactRouter, useNavigate} from 'react-router-dom'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from "../utils/firebase/firebase.utils";
import { useState } from "react";


const defaultFormFields = {
  email: '',
  password: '',
}


const Login = () => {
   const navigate = useNavigate();
   const [errorMessage, setErrorMessage] = useState(null);
   const [formFields, setFormFields] = useState(defaultFormFields);
   const {email, password} = formFields;
   
  
   // change handler for the inputs
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }
  
  // reset formfields
  const resetFormFields = () => setFormFields(defaultFormFields);
  
  //googleAuth Handler, its async because you are calling to a db 
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    navigate('/dashboard')
  }
  
  // setting user using email and password
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user}= await signInAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user);
      resetFormFields();
      navigate('/dashboard');
    } catch (error) {
      if(error.code === 'auth/invalid-credential') {
        setErrorMessage('Wrong Email or Password')
      }
    }
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
        <TextField placeholder="Enter email" fullWidth required autoFocus sx={{mb:2}} name="email" value={email} onChange={handleChange}></TextField>
         <TextField placeholder="Enter password" fullWidth required type="password"  sx={{mb:2}} name="password" value={password} onChange={handleChange}></TextField>
         {errorMessage && (<Typography component='p' color="error" textAlign='center'>{errorMessage}</Typography>)}
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