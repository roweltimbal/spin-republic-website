import { Box, Container, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <>
    <Container>
    <Box component="footer" sx={{ paddingTop: 8, paddingBottom: 4, color: 'white' }} display='flex' flexDirection='row' alignItems='start' textAlign='center'>
    <Box display='flex' flexDirection='column' gap={1}>
        <LocationOnIcon fontSize='small'/>
        <PhoneIcon fontSize='small'/>
        <EmailIcon fontSize='small'/>
        <FacebookIcon fontSize='small'/>
    </Box>
    <Box display='flex' flexDirection='column' gap={1} alignItems='start' ml={1}>
        <Typography variant='body2'>Ground Floor, Jackman Plaza, Munoz, Quezon City</Typography>
        <Typography variant='body2'>+63 920 519 9309</Typography>
        <Typography variant='body2'>spinrepublicsportscenter@gmail.com</Typography>
        <Typography variant="body2"
            component="a"
            href="https://www.facebook.com/profile.php?id=61573436911789"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', color: 'inherit' }}
        >facebook.com/spinrepublic</Typography>
    </Box>
    </Box>
    </Container>
    <Box width='100%' display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center' bgcolor='#000'>
        <Typography fontSize={{ xs: '85px', sm: '150px', md: '200px' }} color='#fff'>LET'S PLAY</Typography>
    </Box>
    </>
  )
}   
export default Footer