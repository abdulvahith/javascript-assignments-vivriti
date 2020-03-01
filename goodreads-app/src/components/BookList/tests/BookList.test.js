import React from 'react';
import renderer from 'react-test-renderer';
import BookList from '../BookList';
import { mount, shallow } from 'enzyme';

describe('BookList component should render properly', () => {
  it('renders without crashing', () => {
    shallow(<BookList />);
  });

  it('renders correctly when issearch false snapshot test', () => {
     let bookList= [
       {
         title:"Tribe",
         small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
         authors: {author:{name: "Timothy"} },
         description: "<div><b>We All Need Mentors. Here Are More than 100 of the World’s Best.</b>",
         link: "https://www.goodreads.com/book/show/50731895-tribe-of-mentors"
       }
     ]
     const rendered = renderer.create(
       <BookList
         bookList= {bookList}
         isSearch= {false}
       />
     );
     expect(rendered.toJSON()).toMatchSnapshot();
   });

  it('renders correctly when issearch true snapshot test', () => {
    let bookList= [
      {
        best_book: {
          title:"Tribe",
          small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
          author: {name: "Joelle Charbonneau"}
        }
      }
    ]
    const rendered = renderer.create(
      <BookList
        bookList= {bookList}
        isSearch= {true}
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('getBookList did mount get called', () => {
    const getBookList = jest.fn();

    const rendered = renderer.create(
      <BookList
        getBookList= {getBookList}
      />
    );

    setTimeout(() => {
      expect(getBookList).toHaveBeenCalled();
      }, 500);
  });
});
