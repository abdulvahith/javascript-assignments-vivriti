import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ListTodoItem from "./ListTodoItem";
import Styles from "./ListTodo.css.js";

export default class ListTodo extends Component {
  render() {
    let { todoList, editTodoItem, deleteTodoItem, completeTodoItem } = this.props;
    let listItem = todoList
      ? todoList.map((item, indes) => {
          if (!item.isCompleted) {
            return (
              <ListTodoItem
                todoData={item.data}
                key={item.id}
                todoId={item.id}
                editTodoItem= {editTodoItem}
                deleteTodoItem= {deleteTodoItem}
                completeTodoItem= {completeTodoItem}
                isFromComplete= {false}
              />
            );
          }
        })
      : null;

    return (
      <Container maxWidth="sm" style={Styles.list_container}>
        <Typography variant="h5" component="h2">
          Todo List
        </Typography>
        <Divider light style={Styles.list_divider} />
        <List>{listItem}</List>
      </Container>
    );
  }
}

ListTodo.propTypes = {
  todoList: PropTypes.array,
  editTodoItem: PropTypes.func,
  deleteTodoItem: PropTypes.func,
  completeTodoItem: PropTypes.func
}
