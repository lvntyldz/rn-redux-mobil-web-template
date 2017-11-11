//native
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//custom
import * as Actions from '../actions';
import Wrapper from '../components/wrapper.js';

export class MainContainer extends Component {

  render() {
    const {state, actions} = this.props;
    return (<Wrapper  states={state} {...actions}/>); //return
  } //render

} //MainContainer

export default connect(state => ({state: state}), (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
}))(MainContainer);
