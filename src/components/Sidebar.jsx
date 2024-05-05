import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PortfolioIcon from '@mui/icons-material/AccountBalance';
import InvertIcon from '@mui/icons-material/InvertColors';
import SyndicatesIcon from '@mui/icons-material/GroupWork';
import LedgerIcon from '@mui/icons-material/Book';
import MessagesIcon from '@mui/icons-material/Message';
import logo from '../images/logo.png';
import TextField from '@mui/material/TextField';
import notificationbtn from '../images/notification.png';
import profilepic from '../images/profile.png';

const drawerWidth = 300;

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <div style={{ background: '#FFFAF4', height: '100vh' }}>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto', marginTop: '10px', paddingLeft: '10px' }} /> {/* Add your logo image here */}
      </Toolbar>
      <List style={{ borderRight: 'none' }}>
        {[
          { text: 'Portfolio', icon: <PortfolioIcon /> },
          { text: 'Invert', icon: <InvertIcon /> },
          { text: 'Syndicates', icon: <SyndicatesIcon /> },
          { text: 'Ledger', icon: <LedgerIcon /> },
          { text: 'Messages', icon: <MessagesIcon /> },
          { text: 'Events', icon: <MessagesIcon /> },
          { text: 'Help & Support', icon: <MessagesIcon /> },
        ].map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            button
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
            sx={{
              backgroundColor: selectedIndex === index ? '#484644 !important' : 'transparent',
              borderRadius: '10px',
              marginRight: '50px',
              marginLeft: '25px',
              padding: '8px',
              width: '250px',
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: selectedIndex === index ? '#FFFAF4' : '#000000' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: selectedIndex === index ? '#FFFAF4' : '#000000' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'fixed' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: '#FFFFFF', // Set background to white
        }}
      >
        <Toolbar style={{padding:"20px 20px"}}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '50%' }}>
            <TextField
              id="outlined-basic"
              label="Search by Company Name ..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ marginRight: '8px', color: 'grey' }} />
                ),
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '50%' }}>
            <img src={notificationbtn} alt="" /> &nsbp;
            <img src={profilepic} alt="" style={{height:"50px"}}/>
            <div>

            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
