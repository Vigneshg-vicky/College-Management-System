import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { deleteStudentToken } from '../../Redux/Features/Reducers/studentAuthSlice'



const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    console.log("dcbjdb");
    dispatch(deleteStudentToken())
    navigate('/student/login')
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar className='flex justify-content-center align-items-evenly h-1rem'>
          <img src="/path/to/logo.png" alt="Logo" className='logo' />
          <div className='center'>
            <Button component={Link} to="/student/home" color="inherit">Home</Button>
            <Button component={Link} to="/student/profile" color="inherit">Dashboard</Button>
            <Button component={Link} to="/student/attendance" color="inherit">Attendance</Button>
            <Button component={Link} to="/student/marks" color="inherit">Test Marks</Button>
            <Button component={Link} to="/student/exams" color="inherit">Exams</Button>
            <Button component={Link} to="/blog" color="inherit">abcd</Button>
            <Button component={Link} to="/blog" color="inherit">abcd</Button>
            <Button component={Link} to="/blog" color="inherit">abcd</Button>
            <Button component={Link} to="/blog" color="inherit">abcd</Button>
          </div>
          <div className='right'>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AccountCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="My Profile" secondary="vignesh" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <MenuIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText onClick={handleLogOut} primary="Logout" />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
