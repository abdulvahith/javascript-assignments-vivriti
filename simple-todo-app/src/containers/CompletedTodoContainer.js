import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import { editTodoItem, deleteTodoItem, completeTodoItem } from '../actions/todoActions'
import CompletedTodo from '../components/CompletedTodo/CompletedTodo'

class CompletedTodoContainer extends Component {

  render() {
    let { todoList, editTodoItem, deleteTodoItem, completeTodoItem }= this.props;
    
    return (
      <CompletedTodo
        todoList= {todoList}
        editTodoItem= {editTodoItem}
        deleteTodoItem= {deleteTodoItem}
        completeTodoItem= {completeTodoItem}
      />
    );
  }
}

CompletedTodoContainer.propTypes = {
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
})(CompletedTodoContainer)
