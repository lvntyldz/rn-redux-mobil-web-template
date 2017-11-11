import React, {Component} from 'react';
import {View} from 'react-native';

//custom
import App from './app.js';

export default class Wrapper extends Component {

  render() {

    return (
      <View style={{flex: 1}}>
        <App {...this.props}/>
      </View>
    ); //return

  } //render

} //Wrapper
