import React, {Component} from 'react';
import GoodHeader from '../components/GoodHeader/GoodHeader'
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { searchBook, getBookList } from '../actions/todoActions';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.searchBook= this.searchBook.bind(this);
  }

  searchBook(bookName) {
      let { searchBook }= this.props;;
      searchBook(bookName);
  }

  render() {
    let { isSearch, getBookList }= this.props;
    return (
      <GoodHeader
        searchBook= {this.searchBook}
        getBookList= {getBookList}
        isSearch= {isSearch}
      />
    );
  }
}

HeaderContainer.propTypes = {
  bookList: PropTypes.array,
  searchBook: PropTypes.func,
  getBookList: PropTypes.func,
  isSearch: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    isSearch: state.isSearch
  };
};

export default connect(mapStateToProps, {
  searchBook,
  getBookList
} )(HeaderContainer)
