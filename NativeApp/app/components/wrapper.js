import React, {Component} from 'react';
import {View,Button} from 'react-native';

//custom
import User from './user.js';
import Product from './product.js';

export default class Wrapper extends Component {

  render() {

    let self = this;
    let headerHtml = null;
    let pages = {};

    pages[self.props.enums.SCREEN.USER] = (<User {...this.props}/>);
    pages[self.props.enums.SCREEN.PRODUCT] = (<Product {...this.props}/>);

    headerHtml = (
      <View  style={{ flexDirection:'row'}}>
        <View  style={{flex: 1,margin:5}}>
          <Button
            title="USER"
            onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.USER)}}
          />
        </View>
        <View  style={{flex: 1,margin:5}}>
          <Button
            onPress={()=>{self.props.setActivePage(self.props.enums.SCREEN.PRODUCT)}}
            title="PRODUCT"
          />
        </View>
      </View>
    );//headerHtml

    return (
      <View style={{flex: 1}}>
        {headerHtml}
        {pages[self.props.states.mainState.page.current]}
      </View>
    ); //return

  } //render

} //Wrapper
