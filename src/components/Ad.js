import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const Ad = () => {
  return (
    <div className='ad'>
        <div className='adtext'>
            <span className='large'>Unlock premium stats</span>
            <span>Get upto 10TB of storage for a limited time</span>
        </div>
        <div className='but'>
            <button><ElectricBoltIcon/> Upgrage</button>
        </div>
    </div>
  )
}

export default Ad