import * as React from 'react';

const TableRow = ({row}) => {
  const columns = Object.keys(row).map(column => {
    return <td key={column}>{row[column]}</td>;
  });

  return (
    <tr>
      {columns}
    </tr>
  )
};

export default TableRow;
