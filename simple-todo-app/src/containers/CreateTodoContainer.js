import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import { addTodoItem } from '../actions/todoActions'
import CreateTodo from '../components/CreateTodo/CreateTodo'

class CreateTodoContainer extends Component {

  render() {
    let { addTodoItem }= this.props;
    return (
      <CreateTodo
        addTodoItem= {addTodoItem}
      />
    );
  }
}

CreateTodoContainer.propTypes = {
  addTodoItem: PropTypes.func
}

export default connect(null, {
  addTodoItem
})(CreateTodoContainer)
