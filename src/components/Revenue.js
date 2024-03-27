import React from 'react';

const Revenue = ({ title, money, colour, text, style }) => {
  return (
    <div className='revenue' >
      <div className='content'>
        <h6 className='title'>{title}</h6>
        <h2 className='money'>{money}</h2>
        <div className='lower'>
          <span className='colour' style={style}>{colour}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
