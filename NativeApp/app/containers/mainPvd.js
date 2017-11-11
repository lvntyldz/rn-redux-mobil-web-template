//native
import React, {Component} from 'react';
import {Platform} from 'react-native';

//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import * as reducers from '../reducers';

//custom
import MainContainer from './mainCtr.js';

let  loggerMiddleware;

if (Platform.OS === "web") {
  loggerMiddleware = createLogger({predicate: (getState, action) => true});
} else {
  loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});
}

const reducer = combineReducers(reducers);

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware,),);
  return createStore(reducer, initialState, enhancer); // passed all reducers with reducer
}

const store = configureStore({});

export default class MainProvider extends Component {

  render() {

    return (
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    ); //return

  } //render

} //MainProvider
