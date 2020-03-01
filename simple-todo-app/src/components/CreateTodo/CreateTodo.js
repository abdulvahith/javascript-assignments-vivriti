import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import gerateKey from '../../utils/randomeKeyGenerator';
import Styles from './CreateTodo.css.js'
import { addTodoItem } from '../../actions/todoActions'

export default class CreateTodo extends Component {
  constructor(props){
		super(props);
		this.state= {
        userInput: ''
    }
    this.onChange= this.onChange.bind(this);
    this.saveTodo= this.saveTodo.bind(this);
  }

  onChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  saveTodo(){
    let { userInput }= this.state;
    let { addTodoItem }= this.props;
    let key= gerateKey(5);
    if (userInput) {
      addTodoItem({
        id: key,
        data: userInput,
        isCompleted: false
      })
      this.setState({
        userInput: ""
      })
    }
  }

  render() {
    let { userInput }= this.state;
    return (
      <Container maxWidth="sm" style={Styles.create_container} >
        <Typography variant="h4" component="h2">
          Add Item
        </Typography>
        <Divider style={Styles.add_divider}/>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <input onChange={this.onChange} value={userInput} className='todo-val' placeholder='Enter your todo'/>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              id="add-btn"
              color="primary"
              style={Styles.btn_style}
              onClick={this.saveTodo}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

CreateTodo.propTypes = {
  addTodoItem: PropTypes.func
}
