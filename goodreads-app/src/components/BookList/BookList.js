import React, { Component } from 'react';
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { fade, makeStyles } from '@material-ui/core/styles';
import Styles from "./BookList.css.js";
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const columns = [
  { id: 'title', label: 'Book Name', minWidth: 170 },
  { id: 'small_image_url', label: 'Cover Image', minWidth: 100 , format: "img"},
  { id: 'authors', label: 'Authors', format: "join" },
  { id: 'description', label: 'Book Description', minWidth: 200, align: 'left', format: "html"},
  { id: 'link', label: 'Book Link', minWidth: 100, align: 'right', format: "link" },
];

const searchResultcolumns = [
  { id: 'title', label: 'Book Name', minWidth: 170 },
  { id: 'small_image_url', label: 'Cover Image', minWidth: 100 , format: "img"},
  { id: 'authors', label: 'Authors' },
];

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      page: 0,
      rowsPerPage: 10
    }
    this.handleChangePage= this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage= this.handleChangeRowsPerPage.bind(this);
    this.htmlDecode= this.htmlDecode.bind(this);
  }

  handleChangePage(event, newPage){
    this.setState({
      page: newPage
    })
  };

  handleChangeRowsPerPage(event){
    console.log("RowsPerPage", +event.target.value);
    this.setState({
      rowsPerPage: +event.target.value,
      page: 0
    })
  };

  htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  render() {
    let { page, rowsPerPage }= this.state;
    let { bookList, isSearch }=this.props;

    if (isSearch) {
      bookList= bookList && Array.isArray(bookList) && bookList.map((item)=>{
        return { title: item.best_book.title, small_image_url: item.best_book.small_image_url, authors: item.best_book.author.name }
      })
    }

    let headerColumn= isSearch ? searchResultcolumns : columns;

    if (!(bookList && Array.isArray(bookList))) {
      return <div> No results found  </div>
    }

    return (
      <Paper style={Styles.root}>
        <TableContainer style={Styles.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headerColumn.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {bookList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} key={index} >
                    {headerColumn.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {
                            column.format==="img" ?
                            <Avatar alt="Remy Sharp" variant="square" src={value} sizes="50"/>:
                            (column.format=== "join"?
                              value.author.name :
                            (column.format==="html" ?
                            <div dangerouslySetInnerHTML={{ __html: value }} className="SearchResult-body"/>:
                              (column.format==="link" ?
                              <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                  var win = window.open(value, '_blank');
                                  win.focus();
                                }}
                                >
                                Book Link
                              </Link>
                              :value)
                            )
                           )
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={bookList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.array,
  isSearch: PropTypes.bool
}
