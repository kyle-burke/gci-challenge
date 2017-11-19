import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';

const TableRow = ({row, onEdit, onRemove}) => {
  const columns = Object.keys(row).map(column => {
    return <td key={column}>{row[column]}</td>;
  });
  const options = (
    <td>
      <Glyphicon glyph="pencil" onClick={() => onEdit(row.id)} />
      <Glyphicon glyph="remove" onClick={() => onRemove(row.id)} />
    </td>
  );

  return (
    <tr>
      {columns}
      {columns.length ? options : null}
    </tr>
  )
};

export default TableRow;
