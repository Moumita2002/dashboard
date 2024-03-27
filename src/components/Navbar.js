import React from 'react'
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className='nav'>
        <div className='top dcenter'>
        <span className='logo'>⚛ Clonify</span>
        <div className='desktop-icons'>
        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        </div>

         
        <div className='search-container dcenter'>
        <SearchIcon className='search-icon' />
        <input type="search" placeholder="Search..." />
      </div>  
      </nav>
      <div className='search-container show'>
        <SearchIcon className='search-icon' />
        <input type="search" placeholder="Search..." />
      </div>
      <div className='desktop-icons show'>
        <div className='avatar'>
        <NotificationsNoneOutlinedIcon />
        <ShoppingBagOutlinedIcon />
        <AutoAwesomeMosaicOutlinedIcon />
        </div>
        
        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      
      </div>
  );
};

export default Navbar;