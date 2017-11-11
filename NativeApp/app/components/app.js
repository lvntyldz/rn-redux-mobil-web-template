import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

import {connect} from 'react-redux';
//import {addDataToList, deleteDataFromList} from '../actions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  } //constructor

  handleClickAddDataBtn() {
    this.props.addDataToList(this.state.text);
    this.setState({text: ""})
  } //handleClickAddDataBtn

  handleClickRemoveDataBtn(id) {
    this.props.deleteDataFromList(id);
  } //handleClickRemoveDataBtn

  listAllData() {
    let self = this;
    let content = [];

    self.props.states.mainState.data.map(function(v, k) {

      content.push((
            <View  key={v.id} style={{flex: 0.1,margin: 2, flexDirection:'row'}}>

              <View style={{width:200,height:33, padding:5,backgroundColor: '#F3F3F3'}}><Text>{v.text}</Text></View>

              <View style={{width:30,height:30}}>

                <Button
                  onPress={() => {
                    self.handleClickRemoveDataBtn(v.id)
                  }}
                  title="X"
                  color="#D50000"
                  width={20}
                />

              </View>

            </View>
          ));//push

    });//map

    return content;

  }//listAllData

  render() {

    return (
      <View style={{flex: 1, margin: 100}}>

        <View style={{flex: 0.1,margin: 2, flexDirection:'row'}}>

          <TextInput
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              width:400,
              height:32
            }}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />

          <View style={{width:200,height:100}}>
            <Button onPress={() => {
              this.handleClickAddDataBtn()
            }} title="Add" color="#2979FF"/>
          </View>

        </View>

        <View style={{flex: 1,margin: 20}}>
          {this.listAllData()}
        </View>

      </View>
    ); //return

  } //render

} //App
