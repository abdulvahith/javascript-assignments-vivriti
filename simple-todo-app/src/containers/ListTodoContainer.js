import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import { editTodoItem, deleteTodoItem, completeTodoItem } from '../actions/todoActions'
import ListTodo from '../components/ListTodo/ListTodo'

class ListTodoContainer extends Component {

  render() {
    let { todoList, editTodoItem, deleteTodoItem, completeTodoItem }= this.props;
    return (
      <ListTodo
        todoList= {todoList}
        editTodoItem= {editTodoItem}
        deleteTodoItem= {deleteTodoItem}
        completeTodoItem= {completeTodoItem}
      />
    );
  }
}

ListTodoContainer.propTypes = {
  todoList: PropTypes.array,
  editTodoItem: PropTypes.func,
  deleteTodoItem: PropTypes.func,
  completeTodoItem: PropTypes.func
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps, {
  editTodoItem,
  deleteTodoItem,
  completeTodoItem,
})(ListTodoContainer)
