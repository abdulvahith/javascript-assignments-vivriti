import { combineReducers } from "redux";
import constants from '../constants'

let initialState = {
  bookList: [
    {
      title:"Tribe of Mentors: Short Life Advice from the Best in the World",
      small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
      authors: {author:{name: "Timothy"} },
      description: "<div><b>We All Need Mentors. Here Are More than 100 of the World’s Best.</b><br /><br /> When facing life’s questions, who do you turn to for advice? We all need mentors, particularly when the odds seem stacked against us. To find his own, best-selling author Tim Ferriss tracked down more than 100 eclectic experts to help him, and you, navigate life. Through short, action-packed profiles, he shares their secrets for success, happiness, meaning, and more. No matter the challenge or opportunity, something in these pages can help.<br />  <br /> You will learn:<br />• The three books legendary investor Ray Dalio recommends most often<br />• Lessons and tips from elite athletes like Maria Sharapova, Kelly Slater, Dara Torres, Tony Hawk, Dan Gable, and more<br />• How and why Facebook co-founder Dustin Moskovitz says no to most incoming requests<br />• The mental models of poker phenoms Daniel Negreanu, Annie Duke, Fedor Holz, and Liv Boeree<br />• The meditation and mindfulness practices of David Lynch, Jimmy Fallon, Sharon Salzberg, Rick Rubin, Richa Chadha, Sarah Elizabeth Lewis, and others<br />• The high-school loss that motivated actor Terry Crews for life . . . and how you can use the lesson<br />• Why TED curator Chris Anderson thinks “pursue your passion” is terrible advice<br />• Why renowned designer Debbie Millman believes in therapy but not in work-life balance<br />• How Yuval Noah Harari's <i>Sapiens </i>went from repeated rejections to global mega-bestseller<br />• The new beliefs, behaviors, and habits that have most helped cryptocurrency icons (founders of Ethereum, Zcash, etc.) in the last five years<br />• Why Arianna Huffington recommends that you regularly scramble apps on your phone<br />• The “bar complex” exercise that keeps country star Tim McGraw young<br />• Why bestselling author Steven Pressfield believes college students should drive trucks and become cowboys<br />",
      link: "https://www.goodreads.com/book/show/50731895-tribe-of-mentors"
    },
    {
      title:"Tribe of Mentors: Short Life Advice from the Best in the World",
      small_image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580496015l/50731895._SX50_.jpg",
      authors: {author:{name: "Timothy"} },
      description: "<div><b>We All Need Mentors. Here Are More than 100 of the World’s Best.</b>",
      link: "https://www.goodreads.com/book/show/50731895-tribe-of-mentors"
    }
  ]
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.BOOK_LIST:
      return {
        ...state,
        bookList: action.payload.GoodreadsResponse.author.books.book,
        isSearch: action.isSearch
      };
    case constants.SEARCH_LIST:
      return {
        ...state,
        bookList: action.payload.GoodreadsResponse.search.results.work,
        isSearch: action.isSearch
      };

    default:
      return state;
  }
};

export default reducer;
