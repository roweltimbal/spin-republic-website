import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from "../assets/srlogowhite.png"


const pages = ['Sign In', 'About Us', 'Contact Us'];


function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  
  
return (
<AppBar position="static">
  <Container maxWidth="xl">
    <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
      {/* Center - Logo */}
      <Box
        component="img"
        src={Logo}
        alt="Spin Republic Logo"
        sx={{
          height: 40,
          mx: "auto",
          display: { xs: "flex", md: "none" }, // show only on mobile
        }}
      />

      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Desktop Logo */}
      <Box
        component="img"
        src={Logo}
        alt="Spin Republic Logo"
        sx={{
          height: 40,
          mr: 4,
          display: { xs: "none", md: "flex" }, // show only on desktop
        }}
      />

      {/* Desktop Menu */}
      <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>

      {/* Mobile Dropdown Menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: "center" }}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  </Container>
</AppBar>

  );
}
export default NavigationBar;