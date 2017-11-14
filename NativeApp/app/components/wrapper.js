import React, {Component} from 'react';
import {View,StyleSheet,Button,TouchableHighlight} from 'react-native';

//3rd
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//custom
import User from './screen/user';
import Product from './screen/product';
import Home from './screen/home';
import Login from './screen/login';

export default class Wrapper extends Component {

  render() {

    let self = this;
    let headerHtml = null;
    let pages = {
      header:{},
      body:{},
      footer:{},
    };//pages


    if(self.props.states.userState.isLoggedIn!==true){
      return (<Login {...this.props}/>);
    }//fi

    headerHtml = (
      <View  style={{ flexDirection:'row',paddingTop:20,justifyContent: 'center',alignItems: 'center'}}>

        <TouchableHighlight style={s.button} onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.HOME)}} >
          <Icon name="home" size={30} color="#900" />
        </TouchableHighlight>

        <TouchableHighlight style={s.button} onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.LOGIN)}} >
          <Icon name="lock" size={30} color="#900" />
        </TouchableHighlight>

        <TouchableHighlight style={s.button} onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.USER)}} >
          <Icon name="user" size={30} color="#900" />
        </TouchableHighlight>

        <TouchableHighlight style={s.button} onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.PRODUCT)}} >
          <Icon name="shopping-bag" size={30} color="#900" />
        </TouchableHighlight>

      </View>

    );//headerHtml

    pages.header[self.props.enums.SCREEN.USER] = headerHtml;
    pages.body[self.props.enums.SCREEN.USER] = (<User {...this.props}/>);
    pages.footer[self.props.enums.SCREEN.USER] = (null);

    pages.header[self.props.enums.SCREEN.PRODUCT] = headerHtml;
    pages.body[self.props.enums.SCREEN.PRODUCT] = (<Product {...this.props}/>);
    pages.footer[self.props.enums.SCREEN.PRODUCT] = (null);

    pages.header[self.props.enums.SCREEN.LOGIN] = headerHtml;
    pages.body[self.props.enums.SCREEN.LOGIN] = (<Login {...this.props}/>);
    pages.footer[self.props.enums.SCREEN.LOGIN] = (null);

    pages.header[self.props.enums.SCREEN.HOME] = headerHtml;
    pages.body[self.props.enums.SCREEN.HOME] = (<Home {...this.props}/>);
    pages.footer[self.props.enums.SCREEN.HOME] = (null);

    return (
      <View style={{flex: 1}}>
        {pages.header[self.props.states.mainState.page.current]}
        {pages.body[self.props.states.mainState.page.current]}
        {pages.footer[self.props.states.mainState.page.current]}
      </View>
    ); //return

  } //render

} //Wrapper

const s = StyleSheet.create({
  button: {
    margin:5,
    padding:5,
    borderWidth:1,
  },//button
});
