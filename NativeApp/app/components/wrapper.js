import React, {Component} from 'react';
import {View,Button} from 'react-native';

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


        headerHtml = (
          <View  style={{ flexDirection:'row'}}>

            <View  style={{flex: 1,margin:1,padding:0}}>
              <Button
                onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.HOME)}}
                title="home"
              />
            </View>

            <View  style={{flex: 1,margin:1,padding:0}}>
              <Button
                onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.LOGIN)}}
                title="login"
              />
            </View>

            <View  style={{flex: 1,margin:1,padding:0}}>
              <Button
                title="user"
                onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.USER)}}
              />
            </View>

            <View  style={{flex: 1,margin:1,padding:0}}>
              <Button
                onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.PRODUCT)}}
                title="prod"
              />
            </View>

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
