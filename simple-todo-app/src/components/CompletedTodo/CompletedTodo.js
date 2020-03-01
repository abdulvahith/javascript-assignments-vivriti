import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Styles from "./CompletedTodo.css.js";
import List from "@material-ui/core/List";
import ListTodoItem from '../ListTodo/ListTodoItem'

export default class CompletedTodo extends Component {
  render() {
    let { todoList, editTodoItem, deleteTodoItem, completeTodoItem } = this.props;

    let completedItem = todoList
      ? todoList.map((item, indes) => {
          if (item.isCompleted) {
            return (
              <ListTodoItem
                todoData={item.data}
                key={item.id}
                todoId={item.id}
                editTodoItem= {editTodoItem}
                deleteTodoItem= {deleteTodoItem}
                completeTodoItem= {completeTodoItem}
                isFromComplete= {true}
              />
            );
          }
        })
      : null;

    return (
      <Container maxWidth="sm" style={Styles.list_container}>
        <Typography variant="h5" component="h2">
          Completed List
        </Typography>
        <Divider style={Styles.list_divider} />
        <List>{completedItem}</List>
      </Container>
    );
  }
}
