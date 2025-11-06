import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer';
import logo from '../assets/srlogowhite.png'
import { height, useMediaQuery, useTheme } from "@mui/system";
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { UserContext } from "../context/User.context";
import { useNavigate } from 'react-router-dom';
import { signOutUser } from "../utils/firebase/firebase.utils";

const Navbar = () => {
   //using context to check if current user is signed in
   const {currentUser} = useContext(UserContext);
   const navigate = useNavigate();
   const [drawer, setDrawer] = useState(false);
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   const toggleDrawer = (open) => {
      setDrawer(open);
   };
   
   const handleLogout = () => {
  signOutUser(); 
  toggleDrawer(false);
  navigate('/login');
  };

   const drawerLinks = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Login',
      to: '/login',
    },
    {
      text: 'About',
      to: '#about',
    },
    {
      text: 'Dashboard',
      to: '/dashboard',
    },
   ]

   const drawerLinksLogout = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Log out',
      to: '/login',
    },
    {
      text: 'About',
      to: '#about',
    },
    {
      text: 'Dashboard',
      to: '/dashboard',
    },
   ]

   const linksTorender = currentUser ? drawerLinksLogout : drawerLinks;

  return (
    <>
    <AppBar position='static' >
      <Toolbar>
        <Box flexGrow={1}>
        <Box component={Link} to='/'>
        <Box component='img' src={logo} sx={{height:40, mr: 2}}/>
        </Box>
        </Box>
        {isMobile && (
          <IconButton sx={{mr:2}} color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
        )}
        {!isMobile && (
          <>
          <Button component={Link} color="inherit" to='/'>Home</Button>
          {currentUser ? <Button component={Link} color="inherit" to='/login' onClick={signOutUser}>Log out</Button> : <Button component={Link} color="inherit" to='/login'>Login</Button>}
        
        <Button component={Link} color="inherit" href="#about">About</Button>
        </>
        )}
        
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={drawer} onClose={() => toggleDrawer(false)}>
      <Box sx={{width:200}} role='presentation' onClick={() => toggleDrawer(false)}>
        <List>
          {linksTorender.map((linkItem, index) => {
            if (linkItem.text === 'Log out') {
            return (
                    <ListItem key={index} disablePadding>
                      <ListItemButton onClick={handleLogout} aria-label="Log out">
                        <ListItemText primary={linkItem.text} />
                      </ListItemButton>
                    </ListItem>
                  );
                }
            return (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={linkItem.to} onClick={() => toggleDrawer(false)} aria-label={`Navigate to ${linkItem.text}`}>
                <ListItemText primary={linkItem.text}/>
              </ListItemButton>
            </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
    </>
  )
}

export default Navbar;