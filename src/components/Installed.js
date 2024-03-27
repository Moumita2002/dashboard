import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Installed() {
  const rows = [
    { source: 'Zopplin', amount: '686.00', status: 'Active', user: '114423', joined: 'October', group: 'Design' },
    { source: 'Figma', amount: '864.00', status: 'Pending', user: '114423', joined: 'June', group: 'Finance' },
    { source: 'Meta', amount: '99.00', status: 'Cancelled', user: '814423', joined: 'March', group: 'Coding' },
    { source: 'Angular', amount: '100.00', status: 'Active', user: '214423', joined: 'February', group: 'Marketing' },
    { source: 'Vue', amount: '444.00', status: 'Active', user: '114423', joined: 'October', group: 'Finance' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return { background: '#b3ffb3', color: 'green' };
      case 'Pending':
        return { background: '#ffb3b3', color: 'red' };
      case 'Cancelled':
        return { background: '#cccccc', color: 'gray' };
      default:
        return { background: 'inherit', color: 'inherit' };
    }
  };

  return (
    <div className='installed'>
      <div className='pupper'>
        <span>Installed apps</span>
        {/* Additional options icon */}
        <span><MoreVertOutlinedIcon /></span>

      </div>
      <div className='ilower'>
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Amount</th>
              <th>Status</th>
              <th>User ID</th>
              <th>Joined</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.source}</td>
                <td>{row.amount}</td>
                <td>
                  <button className='status' style={getStatusColor(row.status)}>{row.status}</button>
                </td>
                <td>{row.user}</td>
                <td>{row.joined}</td>
                <td>{row.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination" style={{ display:'flex', justifyContent:'center', fontWeight:'bold', alignItems:'center' }}>
          <span><ArrowBackIcon/></span>
          <span>1/15</span>
          <span><ArrowForwardIcon/></span>
        </div>
      </div>
    </div>
  );
}

export default Installed;
