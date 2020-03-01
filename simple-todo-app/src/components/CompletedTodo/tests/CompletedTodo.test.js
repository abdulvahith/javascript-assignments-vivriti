import React from 'react';
import renderer from 'react-test-renderer';
import CompletedTodo from '../CompletedTodo';
import ListTodoItem from '../../ListTodo/ListTodoItem';
import { mount, shallow } from 'enzyme';

describe('CompletedTodo component test add and input value', () => {
  it('renders without crashing', () => {
    shallow(<CompletedTodo />);
  });

  it('renders correctly snapshot test', () => {
   // const todo = { id: 1, done: false, name: 'Buy Milk' };
   const rendered = renderer.create(
     <ListTodoItem
       todoData="test"
       key="1234"
       todoId="1234"
       isFromComplete= {true}
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
        isFromComplete= {true}
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
