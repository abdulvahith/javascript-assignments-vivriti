import React from 'react';
import renderer from 'react-test-renderer';
// import App, { Counter, dataReducer } from './App';
import dataReducer from '../index'

let initialState = {
  todoList: [
    {
      id: 123423,
      data: "test data",
      isCompleted: false
    }
  ]
};

let item= {
  id: 123423,
  data: "test data",
  isCompleted: false
}

let editItem= {
  id: 123423,
  todoVal: "test data edited"
}

describe('Reducer', () => {
  it('should add a new item in a todolist', () => {
    const state = { todoList:[] };
    const newState = dataReducer(state, {
      type: 'ADD_TODO',
      newItem: item
    });
    expect(newState).toEqual(initialState);
  });

  it('should delete a item in a todolist', () => {
    const state = { todoList:[] };
    const newState = dataReducer(initialState, {
      type: 'DELETE_TODO',
      todoId: 123423
    });
    expect(newState).toEqual(state);
  });

  it('should edit a item in a todolist', () => {
    let editedState = {
      todoList: [
        {
          id: 123423,
          data: "test data edited",
          isCompleted: false
        }
      ]
    };
    const newState = dataReducer(initialState, {
      type: 'EDIT_TODO',
      editItem
    });
    expect(newState).toEqual(editedState);
  });


  it('should mark item as completed in todolist', () => {
    let tempState = {
      todoList: [
        {
          id: 123423,
          data: "test data",
          isCompleted: true
        }
      ]
    };
    const newState = dataReducer(initialState, {
      type: 'COMPLETE_TODO',
      todoId: 123423,
			isCompleted: true
    });
    expect(newState).toEqual(tempState);
  });

  it('should mark item as incompleted in todolist', () => {
    let tempState = {
      todoList: [
        {
          id: 123423,
          data: "test data",
          isCompleted: false
        }
      ]
    };
    const newState = dataReducer(initialState, {
      type: 'COMPLETE_TODO',
      todoId: 123423,
			isCompleted: false
    });
    expect(newState).toEqual(tempState);
  });
});
