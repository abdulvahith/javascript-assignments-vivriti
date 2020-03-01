import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Styles from "./ListTodo.css.js";

export default class ListTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      todoEditVal: props.todoData
    };
    this.showEdit = this.showEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.markAsComplete = this.markAsComplete.bind(this);
  }

  onChange(e){
    this.setState({
      todoEditVal: e.target.value
    })
  }

  showEdit() {
    this.setState({
      isEdit: true
    });
  }

  editTodo(){
    let { editTodoItem, todoId }= this.props;
    this.setState({
      isEdit: false
    });
    editTodoItem({ id: todoId, todoVal: this.state.todoEditVal })
  }

  deleteTodo(){
    let { deleteTodoItem, todoId }= this.props;
    deleteTodoItem(todoId);
  }

  markAsComplete(){
    let { completeTodoItem, todoId, isFromComplete }= this.props;
    completeTodoItem(todoId, !isFromComplete);
  }

  render() {
    let { todoData, isFromComplete } = this.props;
    let { todoEditVal }= this.state;

    return (
      <ListItem>
        <Grid container spacing={4}>
          <Grid item xs={1}>
            <Checkbox
              checked={isFromComplete}
              onClick={this.markAsComplete}
              color="primary"
              id='list-checkBox'
            />
          </Grid>
          {this.state.isEdit ? (
            <React.Fragment>
              <Grid item xs={5}>
                <input value={todoEditVal} onChange={this.onChange} id='list-checkbox'/>
              </Grid>
              <Grid item xs={3}>
                <Button
                  size="medium"
                  style={Styles.margin_common}
                  onClick={this.editTodo}
                  id='list-save-btn'
                >
                  Save
                </Button>
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item xs={5}>
                <Typography
                  style={isFromComplete ? Styles.compelted_text : Styles.margin_common }
                  variant="subtitle1"
                  display="block"
                  gutterBottom
                >
                  {todoData}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  size="medium"
                  id='list-edit-btn'
                  style={Styles.margin_common}
                  onClick={this.showEdit}
                >
                  Edit
                </Button>
              </Grid>
            </React.Fragment>
          )}
          <Grid item xs={3}>
            <Button size="medium" style={Styles.margin_common} onClick={this.deleteTodo} id='list-delete-btn'>
              Delete
            </Button>
          </Grid>
        </Grid>
      </ListItem>
    );
  }
}

ListTodoItem.propTypes = {
  todoData: PropTypes.string,
  todoId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  editTodoItem: PropTypes.func,
  deleteTodoItem: PropTypes.func,
  completeTodoItem: PropTypes.func,
  isFromComplete: PropTypes.bool
}
