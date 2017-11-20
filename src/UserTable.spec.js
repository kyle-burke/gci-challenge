import * as React from 'react';
import { shallow } from 'enzyme';
import { UserTable } from './UserTable';
import TableHead from './TableHead';

describe('UserTable component (unconnected)', () => {
  it('should render a TableRow for each user', () => {
    const users = [{id: 0}, {id: 1}, {id: 2}];

    const wrapper = shallow(<UserTable users={users} />);

    expect(wrapper.find('TableRow').length).toEqual(3);
  });

  it('should render a TableHead', () => {
    const wrapper = shallow(<UserTable users={[]}/>);

    expect(wrapper.contains(<TableHead />)).toBeTruthy();
  });
});
