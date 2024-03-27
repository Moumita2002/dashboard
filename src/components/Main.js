import React from 'react'
import Navbar from './Navbar'
import Ad from './Ad'
import Subrev from './Subrev';
import Performance from './Performance';
import Installed from './Installed';

const Main = () => {
  return (
    <div className='Main'>
      <Navbar />
      <div className='submain'>
        <Ad />
        <Subrev />
        <Performance />
        <Installed />
      </div>

    </div>
  )
}

export default Main