import React from 'react';
import CreateTodo from '../CreateTodo';
import { mount, shallow } from 'enzyme';

describe('CreateTodo component test add and input value', () => {
  it('renders without crashing', () => {
    shallow(<CreateTodo />);
  });

  it('call add function', () => {
    const addTodoItem = jest.fn();
    const wrapper = shallow(
      <CreateTodo addTodoItem={addTodoItem} />
    );

    wrapper.setState({ userInput: "test" });
    const p = wrapper.find('#add-btn');
    p.simulate('click');
    expect(addTodoItem).toHaveBeenCalled();
  });

  it('should not call add function', () => {
    const addTodoItem = jest.fn();
    const wrapper = shallow(
      <CreateTodo addTodoItem={addTodoItem} />
    );
    const p = wrapper.find('#add-btn');
    p.simulate('click');
    expect(addTodoItem).not.toHaveBeenCalled();
  });

});
