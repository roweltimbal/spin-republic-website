import { Container, Paper, Link, Avatar, Typography, Box, TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import {Link as ReactRouter} from 'react-router-dom'

const Login = () => {   
  const handleSubmit = () => {
    console.log('Sign in submit')
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
        <TextField placeholder="Enter username" fullWidth required autoFocus sx={{mb:2}}></TextField>
         <TextField placeholder="Enter password" fullWidth required type="password"  sx={{mb:2}}></TextField>
         <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label='Remember me'/>
         <Button type="submit" variant="contained" fullWidth sx={{mt:1}}>SIGN IN</Button>
         <Grid container justifyContent='space-between' sx={{mt:1}}>
          <Link component={ReactRouter} to='/forgot'>Forgot password</Link>
          <Link component={ReactRouter} to='/register'>Create account</Link>
         </Grid>
      </Box>
    </Paper>
  </Container>
  </>  
  )
}

export default Login;