import React from "react";
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
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
   const [drawer, setDrawer] = useState(false);
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   const toggleDrawer = (open) => {
      setDrawer(open);
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
   ]

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
        <Button component={Link} color="inherit" to='/login'>Login</Button>
        <Button component={Link} color="inherit" href="#about">About</Button>
        </>
        )}
        
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={drawer} onClose={() => toggleDrawer(false)}>
      <Box sx={{width:200}} role='presentation' onClick={() => toggleDrawer(false)}>
        <List>
          {drawerLinks.map((linkItem, index) => {
            return (
            <ListItem key={index} disablePadding>
              <ListItemButton component='a' to={linkItem.to} onClick={() => toggleDrawer(false)} aria-label={`Navigate to ${linkItem.text}`}>
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