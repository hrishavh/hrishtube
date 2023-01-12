import React from 'react';
import { Stack, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { deepOrange, deepPurple } from '@mui/material/colors';

import SearchBar from './SearchBar';
import { margin, spacing } from '@mui/system';

const Navbar = () => {
  return (
    <div>
      <Stack direction="row"
       alignItems="center" 
       p={2} 
       sx={{ position: 'sticky', 
       background: '#000', top: 0, 
       justifyContent: 'space-between'}}>
        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
        <Stack direction="row" alignItems="center" spacing={3} sx={{justifyContent: 'space-between' }}>
        <VideoCallIcon sx={{color: 'white'}} />
        <NotificationsNoneIcon sx={{color: 'white'}} />
        <Avatar>HR</Avatar>
        </Stack>
       </Stack>
    </div>
  )
}

export default Navbar;
