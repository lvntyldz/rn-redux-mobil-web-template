import React, {Component} from 'react';
import {StyleSheet,TouchableHighlight,View,Text} from 'react-native';

export default class Button extends Component {

  render() {

    let self = this;

    return (
      <TouchableHighlight style={[s.button]} onPress={()=>self.props.onPressBtn()}>
        <View>
          <Text>{self.props.title}</Text>
        </View>
      </TouchableHighlight>
    ); //return

  } //render

} //Button

const s = StyleSheet.create({
  button: {
    margin:5,
    padding:5,
    borderWidth:1,
    //backgroundColor:'red',
  },//button
});
