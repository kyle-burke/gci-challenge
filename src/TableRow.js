import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './TableRow.css';

const TableRow = ({row, onEdit, onRemove}) => {
  const columns = Object.keys(row).map(column => {
    return <td key={column}>{row[column]}</td>;
  });
  const options = (
    <td className="optionsCell">
      <Glyphicon
        glyph="pencil"
        className="editIcon"
        onClick={() => onEdit(row.id)}
      />
      <Glyphicon
        glyph="remove"
        className="removeIcon"
        onClick={() => onRemove(row.id)}
      />
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
