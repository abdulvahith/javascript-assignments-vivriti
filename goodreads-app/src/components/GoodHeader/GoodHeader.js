import React, { Component } from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CloseIcon from '@material-ui/icons/Close';
import Styles from "./GoodHeader.css.js";

export default class GoodHeader extends Component {
  constructor(props) {
    super(props);
    this.state= {
        userInput: ''
    }
    this.searchBook= this.searchBook.bind(this);
    this.onChange= this.onChange.bind(this);
    this.clearSeach= this.clearSeach.bind(this);
    this.removeSearch= this.removeSearch.bind(this);
  }

  onChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  searchBook(){
    let {searchBook}= this.props;
    searchBook(this.state.userInput);
  }

  clearSeach(){
    this.setState({
      userInput: ""
    })
  }

  removeSearch(){
    let { getBookList }= this.props;
    this.clearSeach();
    getBookList();
  }

  render() {
    let {isSearch}= this.props;
    return (
      <div style={Styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography style={Styles.title} variant="h6" noWrap>
              Good-Read App
            </Typography>
            <div style={{ "marginLeft": "30px", "marginRight": "30px" }}>
              <TextField
                type="search"
                variant="outlined"
                margin="normal"
                value= {this.state.userInput}
                onChange={this.onChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    this.state.userInput ?
                    <InputAdornment position="end" style={{"cursor": "pointer"}} onClick={this.clearSeach}>
                      <CloseIcon />
                    </InputAdornment>: null
                  ),
                  style: Styles.input
                }}
              />
            </div>
            <div >
              <Button variant="contained" onClick={this.searchBook} id="search-book"> Search Book </Button>
            </div>
            {
              isSearch?
              <div style={{"marginLeft": "10px", "marginRight": "10px"}}>
                <Button variant="contained" onClick={this.removeSearch} id="clear-search"> Clear search </Button>
              </div>: null
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

GoodHeader.propTypes = {
  bookList: PropTypes.array,
  searchBook: PropTypes.func,
  getBookList: PropTypes.func,
  isSearch: PropTypes.bool
}
