// ************** This is used for practicing only


import React, { useState, useEffect } from 'react';

const Msidebar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='sidebar'>
      {windowWidth > 768 && ( // Show logo only if window width is larger than 768px
        <div className='top'>
          <span className='logo'>⚛ Clonify</span>
        </div>
      )}
    </div>
  );
};

export default Msidebar;
