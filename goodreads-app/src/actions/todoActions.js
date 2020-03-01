import constants from '../constants';
var parser = require('fast-xml-parser');

export const getBookList = () => dispatch => {
	 fetch("https://www.goodreads.com/author/list/18541?format=xml&key=vqPqZrHRIMKcVHj9jWREA")
	 .then(response => response.text())
   .then((response) => {
				var result = parser.validate(response);
				if(result !== true) console.log("error xml",result.err);
				var jsonObj = parser.parse(response);
				dispatch({
			      type : constants.BOOK_LIST,
			      payload : jsonObj,
						isSearch: false
			  })
	 })
}

export const searchBook = (searchVal) => dispatch => {
	 fetch("https://www.goodreads.com/search/index.xml?key=vqPqZrHRIMKcVHj9jWREA&q="+searchVal)
	 .then(response => response.text())
   .then((response) => {
				var result = parser.validate(response);
				if(result !== true) console.log("error xml",result.err);
				var jsonObj = parser.parse(response);
				console.log("jsonObj=>", jsonObj);
				dispatch({
			      type : constants.SEARCH_LIST,
			      payload : jsonObj,
						isSearch: true
			  })
	 })
}
