import React from 'react';
import Revenue from './Revenue';

const Subrev = () => {
  const getStatusColor = (colour) => {
    switch (colour) {
      case '-1.7%':
        return { background: '#ffb3b3', color: 'red' };
      case '0.00':
        return { background: '#cccccc', color: 'gray' };
      default:
        return { background: '#b3ffb3', color: 'green' };

    }
  };

  return (
    <div className='revmain'>
      <Revenue
        title='Revenue'
        money='$56,945'
        colour='+45%'
        text='From 4.6%'
        style={getStatusColor('+45%')}
      />

      <Revenue
        title='Users'
        money='75.8%'
        colour='-1.7%'
        text='From 4.6%'
        textClassName='red'
        style={getStatusColor('-1.7%')}
      />

      <Revenue
        title='New Signups'
        money='116'
        colour='0.00'
        textClassName='gray'
        style={getStatusColor('0.00')}
      />

      <Revenue
        title='Retention'
        money='12.67%'
        colour='+0.6%'
        text='From 4.6%'
        style={getStatusColor('+0.6%')}
      />
    </div>
  );
};

export default Subrev;
