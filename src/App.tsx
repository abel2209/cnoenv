import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NetworkInfo } from "./Components/NetworkInfo/NetworkInfo";
import Routes from "./Navigation/Routes";
import AppReducers from "./Reducers";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(AppReducers)}>
        <NetworkInfo />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    );
  }
}
