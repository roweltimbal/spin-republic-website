import { Avatar, Container, Paper, Typography, Box, TextField, Button, Modal } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import CircularProgress from '@mui/material/CircularProgress';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
}

const Register = () => {       
    const [error, setError] = useState('');
    const [spinner, setSpinner] = useState(false)
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    // using navigate
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleCreateAccountSubmit = async (event) => {
        event.preventDefault();
        setError('');
         if(password !== confirmPassword) {
            setError('password does not match');
            return;
        }
        try {
            setSpinner(true);
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            // added display name in an object because it's null by default
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
            alert('Thank you for signing up! Please log in.')
            navigate('/login')
        } catch (error) {
        switch (error.code) {
            case 'auth/weak-password':
                setError('Password must be at least 6 characters');
                break;
            case 'auth/email-already-in-use':
                setError('Email already in use');
                break;
            case 'auth/invalid-email':
                setError('Invalid email address');
                break;
            default:
                setError('An unexpected error occurred. Please try again.');
                break;
        }
            
        }
    }     
    return (
        <>
            <Container maxWidth='xs'>
                <Paper elevation={10} sx={{marginTop:8, padding:2}}>
                    <Avatar sx={{
                        mx:'auto',
                        textAlign:'center',
                        bgcolor:'primary.main',
                        mb:1
                    }}>
                        <PersonAddIcon/>
                    </Avatar>
                    <Typography component='h1' variant="h5" textAlign='center' >Create Account</Typography>
                    <Box component='form' onSubmit={handleCreateAccountSubmit} sx={{mt:1}}>
                        <TextField placeholder="Enter display name" fullWidth required autoFocus sx={{mb:2}} onChange={handleChange} name="displayName" value={displayName} ></TextField>
                        <TextField placeholder="Enter email" fullWidth required autoFocus sx={{mb:2}} onChange={handleChange} name="email" value={email} ></TextField>
                        <TextField placeholder="Enter password" type="password" fullWidth sx={{mb:2}} onChange={handleChange} name="password" value={password}></TextField>
                        <TextField placeholder="Confirm password" type="password" fullWidth sx={{mb:2}} onChange={handleChange} name="confirmPassword" value={confirmPassword}></TextField>
                        {error && (
                            <Typography component='p' color="error" sx={{mb:1, textAlign: 'center'}}>{error}</Typography>
                        )}
                         <Button type="submit" variant="contained" fullWidth>Submit</Button>
                    </Box>
                </Paper>
                <Modal
                      open={spinner}
                      aria-labelledby="loading spinner"
                      aria-describedby="waiting for user to load"
                    >
                      <Box position='absolute' top='50%' left='50%'>
                      <CircularProgress/>
                      </Box>
                    </Modal>
            </Container>
        </>
    )
}

export default Register;    