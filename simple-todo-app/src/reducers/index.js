import { combineReducers } from "redux";
import constants from '../constants'

let initialState = {
  todoList: [
    {
      id: 123423,
      data: "test data",
      isCompleted: false
    },
    {
      id: 1234,
      data: "test data 2",
      isCompleted: true
    }
  ]
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.newItem]
      };
    case constants.EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item, i) =>
          item.id === action.editItem.id
            ? { ...item, data: action.editItem.todoVal }
            : item
        )
      };
    case constants.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.todoId)
      };
    case constants.COMPLETE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item, i) =>
          item.id === action.todoId
            ? { ...item, isCompleted: action.isCompleted }
            : item
        )
      };
    default:
      return state;
  }
};

export default reducer;
