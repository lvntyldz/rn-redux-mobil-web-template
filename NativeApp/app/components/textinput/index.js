import React, {Component} from 'react';
import {StyleSheet,View,TextInput,Text} from 'react-native';

export default class CustomTextInput extends Component {

  constructor(props){
    super(props);

    this.state = {
        value:"",
    }//state

  }//constructor

  render() {

    let self = this;

    return (
        <View style={[s.main]}>
          <TextInput
            style={[s.textInput]}
            onChangeText={(value) => this.setState({value})}
            value={this.state.value}
            placeholder={self.props.placeholder||null}
          />
        </View>
    ); //return

  } //render

} //CustomTextInput

const s = StyleSheet.create({
  main:{
  },//main

  textInput: {
    margin:5,
    padding:5,
    borderWidth:1,
    height: 40,
    width:200,
  },//textInput
});
