import React from 'react';
import renderer from 'react-test-renderer';
import GoodHeader from '../GoodHeader';
import { mount, shallow } from 'enzyme';

describe('GoodHeader component should render properly', () => {
    it('renders without crashing', () => {
      shallow(<GoodHeader />);
    });

    it('renders correctly when issearch false snapshot test', () => {
     const rendered = renderer.create(
       <GoodHeader
         isSearch= {false}
       />
     );
     expect(rendered.toJSON()).toMatchSnapshot();
   });

   it('renders correctly when issearch false snapshot test', () => {
    const rendered = renderer.create(
      <GoodHeader
        isSearch= {true}
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('search book test', () => {
  const searchBook = jest.fn();

   const wrapper = shallow(
     <GoodHeader
       isSearch= {false}
       searchBook= {searchBook}
     />
   );

   const searchBtn = wrapper.find('#search-book');
   searchBtn.simulate('click');
   expect(searchBook).toHaveBeenCalled();
 });

   it('clear search test', () => {
   const getBookList = jest.fn();

    const wrapper = shallow(
      <GoodHeader
        isSearch= {true}
        getBookList= {getBookList}
      />
    );

    const searchBtn = wrapper.find('#clear-search');
    searchBtn.simulate('click');
    expect(getBookList).toHaveBeenCalled();
  });


});
