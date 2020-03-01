import React from 'react';
import renderer from 'react-test-renderer';
import ListTodo from '../ListTodo';
import ListTodoItem from '../ListTodoItem';
import { mount, shallow } from 'enzyme';

describe('ListTodo component test add and input value', () => {
  it('renders without crashing', () => {
    shallow(<ListTodo />);
  });

  it('renders without crashing', () => {
    shallow(<ListTodoItem />);
  });

  it('renders correctly snapshot test', () => {
   const rendered = renderer.create(
     <ListTodoItem
       todoData="test"
       key="1234"
       todoId="1234"
       isFromComplete= {false}
     />
   );
   expect(rendered.toJSON()).toMatchSnapshot();
 });

  it('call delete, edit and complete function', () => {
    const editTodoItem = jest.fn();
    const deleteTodoItem = jest.fn();
    const completeTodoItem = jest.fn();

    const wrapper = shallow(
      <ListTodoItem
        todoData="test"
        key="1234"
        todoId="1234"
        editTodoItem= {editTodoItem}
        deleteTodoItem= {deleteTodoItem}
        completeTodoItem= {completeTodoItem}
        isFromComplete= {false}
      />
    );

    const editBtn = wrapper.find('#list-edit-btn');
    editBtn.simulate('click');
    setTimeout(() => {
      //after clicks edit button should trigger save button
        const saveBtn = wrapper.find('#list-save-btn');
        saveBtn.simulate('click');
        expect(editTodoItem).toHaveBeenCalled();
      }, 500);
    const deleteBtn = wrapper.find('#list-delete-btn');
    const listCheckBox = wrapper.find('#list-checkBox');
    deleteBtn.simulate('click');
    expect(deleteTodoItem).toHaveBeenCalled();
    listCheckBox.simulate('click');
    expect(completeTodoItem).toHaveBeenCalled();
  });

});
