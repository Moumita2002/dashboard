import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [0, 160, 190, 300, 0, 100, 500];
const pData = [90, 100, 4, 350, 400, 700, 300];
const xLabels = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thur',
  'Fri',
  'Sat',
];

const Performance = () => {
  return (
    <div className='performance'>
        <div className='pupper'>
            <span>Performance</span>
            <span><MoreVertOutlinedIcon /></span>
        </div>
        <div className='plower'>
        <LineChart
      width={1200}
      height={300}
      
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
      series={[
        { data: uData, label: 'Instagram', area: true, stack: 'total', showMark: false },
        { data: pData, label: 'Facebook', area: true, stack: 'total', showMark: false },
        
      ]}
    />
        </div>
    </div>
  )
}

export default Performance