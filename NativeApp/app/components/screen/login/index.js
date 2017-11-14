import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../../button';
import CustomTextInput from '../../textinput';

export default class Login extends Component {


handleLoginClick(){
  let self = this;
  let username = null;
  let password = null;

  username = self.refs.usernameRef.state.value;
  password = self.refs.passwordRef.state.value;

  if(username===password){
    self.props.setLoginStatus(true);
    self.props.setActivePage(self.props.enums.SCREEN.HOME);
  }else{
      alert("Username and Password doesn't match");
      self.props.setLoginStatus(false);
  }

}//handleLoginClick

  render() {

    let self = this;

    return (
      <View style={{flex: 1,borderWidth:1,justifyContent: 'center',alignItems: 'center'}}>
        <Text>LOGIN</Text>
        <CustomTextInput ref="usernameRef" placeholder="Username" />
        <CustomTextInput ref="passwordRef" placeholder="password" />
        <Button title="Login"  onPressBtn={()=>self.handleLoginClick()} />
      </View>
    ); //return

  } //render

} //Login
