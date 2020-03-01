import React, { Component } from "react";
import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HeaderContainer/>
          <ListContainer/>
        </div>
      </Provider>
    );
  }
}
