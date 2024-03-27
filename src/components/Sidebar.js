import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';


const Sidebar = () => {
  const [isSubboardOpen, setIsSubboardOpen] = useState(false);

  const toggleSubboard = () => {
    setIsSubboardOpen(!isSubboardOpen);
  };

  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>⚛ Clonify</span>
      </div>
      <div className='center'>
      <h3>DASHBOARD</h3>

        <span className='dashcontent' onClick={toggleSubboard}>
           Dashboard {isSubboardOpen ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon />}
        </span>
        {isSubboardOpen && (
          <div className='subboard'>
            <span>Analytics</span>
            <span>Finance</span>
            <span>Job Board</span>
          </div>
        )}
        <span className='dashcontent'><MailOutlineIcon/> Messages</span>
        <span className='dashcontent'><GroupIcon/> Friends</span>
        <span className='dashcontent'><AppsIcon/> Apps</span>
      </div>
      <div className='bottom'>
        <h3>PAGES</h3>
        <span><LanguageIcon/> Help Center</span>
        <span><FolderOpenIcon/> File Manager</span>
      </div>
    </div>
  );
};

export default Sidebar;
