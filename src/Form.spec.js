import * as React from 'react';
import { shallow, render } from 'enzyme';
import { Form } from './Form';

describe('Form component (unconnected)', () => {
  it('should render three inputs', () => {
    const wrapper = render(<Form />);

    expect(wrapper.find('input').length).toEqual(3);
  });

  it('should disable the submit button if the fields are empty', () => {
    const wrapper = render(<Form />);

    expect(wrapper.find('button[disabled]').length).toEqual(1);
  });

  it('should enable the submit button when the fields are filled', () => {
    const createUser = jest.fn();
    const wrapper = shallow(<Form createUser={createUser} />);

    wrapper.setState({
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    });


    expect(wrapper.find('button[disabled]').length).toEqual(0);
  });

  it('should call the createUser prop on button click', () => {
    const createUser = jest.fn();
    const wrapper = shallow(<Form createUser={createUser} />);

    wrapper.setState({
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    });

    wrapper.find('Button').simulate('click');

    expect(createUser.mock.calls.length).toEqual(1);
  });

  it('creating a user should reset component state', () => {
    const createUser = jest.fn();
    const wrapper = shallow(<Form createUser={createUser} />);

    wrapper.setState({
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    });

    wrapper.find('Button').simulate('click');

    expect(wrapper.state('firstName')).toEqual('');
    expect(wrapper.state('lastName')).toEqual('');
    expect(wrapper.state('address')).toEqual('');
  });

  it('cancelling edit should reset component state', () => {
    const editingUser = {
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    };
    const cancelEdit = jest.fn();
    const wrapper = shallow(<Form cancelEdit={cancelEdit} />);

    wrapper.setProps({editingUser});

    expect(wrapper.state('firstName')).toEqual('firstname');
    expect(wrapper.state('lastName')).toEqual('lastname');
    expect(wrapper.state('address')).toEqual('address');

    wrapper.find('Button.cancelButton').simulate('click');

    expect(wrapper.state('firstName')).toEqual('');
    expect(wrapper.state('lastName')).toEqual('');
    expect(wrapper.state('address')).toEqual('');
  })

  it('should call the editUser prop on button click', () => {
    const editUser = jest.fn();
    const editingUser = {};
    const wrapper = shallow(
      <Form
        editUser={editUser}
        cancelEdit={jest.fn()}
        editingUser={editingUser}
      />
    );

    wrapper.setState({
      firstName: 'firstname',
      lastName: 'lastname',
      address: 'address'
    });

    wrapper.find('Button.editButton').simulate('click');

    expect(editUser.mock.calls.length).toEqual(1);
  });

  it('should call the cancelEdit prop on button click', () => {
    const cancelEdit = jest.fn();
    const editingUser = {};
    const wrapper = shallow(
      <Form
        cancelEdit={cancelEdit}
        editingUser={editingUser}
      />
    );

    wrapper.find('Button.cancelButton').simulate('click');

    expect(cancelEdit.mock.calls.length).toEqual(1);
  });
});
