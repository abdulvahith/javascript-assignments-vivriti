import React from 'react';
import renderer from 'react-test-renderer';
import dataReducer from '../index'

let initialState = {
  bookList: [
    {
      title:"Tribe of Mentors: Short Life Advice from the Best in the World",
      small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
      authors: {author:{name: "Timothy"} },
      description: "<div><b>We All Need Mentors. Here Are More than 100 of the World’s Best.</b>",
      link: "https://www.goodreads.com/book/show/50731895-tribe-of-mentors"
    }
  ],
  isSearch: false
};

let initialStateSearch = {
  bookList: [
    {
        best_book: {
        title:"Tribe of Mentors: Short Life Advice from the Best in the World",
        small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
        author: {name: "Timothy"}
      }
    }
  ],
  isSearch: true
};

let item=   {
  GoodreadsResponse: {
    author: {
      books: {
        book: [
          {
            title:"Tribe of Mentors: Short Life Advice from the Best in the World",
            small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
            authors: {author:{name: "Timothy"} },
            description: "<div><b>We All Need Mentors. Here Are More than 100 of the World’s Best.</b>",
            link: "https://www.goodreads.com/book/show/50731895-tribe-of-mentors"
          }
        ]
      }
    }
}}

let searchItem=   {
  GoodreadsResponse: {
    search: {
      results: {
        work: [
          {
            best_book: {
              title:"Tribe of Mentors: Short Life Advice from the Best in the World",
              small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
              author: {name: "Timothy"}
            }
          }
        ]
      }
    }
}}

let editItem= {
  id: 123423,
  todoVal: "test data edited"
}

describe('Reducer', () => {
  it('should add book list', () => {
    const state = { bookList:[] , isSearch: false};
    const newState = dataReducer(state, {
      type: 'BOOK_LIST',
      payload : item,
      isSearch: false
    });
    expect(newState).toEqual(initialState);
  });

  it('should add book list', () => {
    const state = { bookList:[] , isSearch: true};
    const newState = dataReducer(state, {
      type: 'SEARCH_LIST',
      payload : searchItem,
      isSearch: true
    });
    expect(newState).toEqual(initialStateSearch);
  });
});
