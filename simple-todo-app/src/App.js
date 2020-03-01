import React, { Component } from "react";
import CreateTodoContainer from './containers/CreateTodoContainer';
import ListTodoContainer from './containers/ListTodoContainer';
import CompletedTodoContainer from './containers/CompletedTodoContainer';
import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <CreateTodoContainer />
          <ListTodoContainer/>
          <CompletedTodoContainer/>
        </div>
      </Provider>
    );
  }
}
