import * as React from 'react';
import { shallow } from 'enzyme';
import { Glyphicon } from 'react-bootstrap';
import TableRow from './TableRow';

describe('TableRow component', () => {
  it('should render a td for each column in the row, including options', () => {
    const row = {
      id: 0,
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    };

    const element = shallow(<TableRow row={row} />);

    expect(element.find('td').length).toEqual(5);
  });

  it('should render a Glyphicon for editing and deleting the row', () => {
    const row = {
      id: 0,
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    };

    const element = shallow(<TableRow row={row} />);

    expect(element.find(Glyphicon).length).toEqual(2);
  });

  it('should invoke the onEdit prop when the edit icon is clicked', () => {
    const row = {
      id: 0,
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    };

    const onEdit = jest.fn();

    const element = shallow(<TableRow
      row={row}
      onEdit={onEdit}
    />);

    element.find('Glyphicon.editIcon').simulate('click');

    expect(onEdit.mock.calls.length).toEqual(1);
  });

  it('should invoke the onRemove prop when the remove icon is clicked', () => {
    const row = {
      id: 0,
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    };

    const onRemove = jest.fn();

    const element = shallow(<TableRow
      row={row}
      onRemove={onRemove}
    />);

    element.find('Glyphicon.removeIcon').simulate('click');

    expect(onRemove.mock.calls.length).toEqual(1);
  });
});
