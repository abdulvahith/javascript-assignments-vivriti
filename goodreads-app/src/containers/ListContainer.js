import React, {Component} from 'react';
import BookList from '../components/BookList/BookList'
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {getBookList} from '../actions/todoActions'

class ListContainer extends Component {

  componentDidMount() {
      let { getBookList }= this.props;
      getBookList();
  }

  render() {
    let { bookList, isSearch }= this.props;
    return (
      <BookList
        bookList= {bookList}
        isSearch= {isSearch}
      />
    );
  }
}

ListContainer.propTypes = {
  bookList: PropTypes.array,
  isSearch: PropTypes.bool,
  getBookList: PropTypes.func
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    isSearch: state.isSearch
  };
};

export default connect(mapStateToProps, {
  getBookList
} )(ListContainer)
