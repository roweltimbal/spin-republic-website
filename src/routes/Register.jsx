import { Avatar, Container, Paper, Typography, Box, TextField, Button } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Register = () => {       
    const handleCreateAccountSubmit = () => {
        alert('Create account submit')
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
                        <TextField placeholder="Enter username" fullWidth required autoFocus sx={{mb:2}}></TextField>
                        <TextField placeholder="Enter password" type="password" fullWidth sx={{mb:2}}></TextField>
                         <Button type="submit" variant="contained" fullWidth>Submit</Button>
                    </Box>
                   
                </Paper>
            </Container>
        </>
    )
}

export default Register;    