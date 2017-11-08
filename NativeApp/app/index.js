import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

//custom
import App from './components/app.js';

//store creating
const store = createStore(reducer);

export default class AppSrc extends Component {
  constructor(props) {
    super(props);
  }//constructor

  render() {

    return (
      <Provider store={store}>
        <App/>
      </Provider>
    ); //return

  } //render

} //App
