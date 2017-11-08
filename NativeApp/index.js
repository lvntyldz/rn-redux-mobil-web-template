import {AppRegistry} from 'react-native';
import App from './app/index.js'

AppRegistry.registerComponent('NativeApp', () => App);

if (window.document) {

  AppRegistry.runApplication('NativeApp', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
  }); //runApplication

} //fi
