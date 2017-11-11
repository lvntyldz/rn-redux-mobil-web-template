import {AppRegistry} from 'react-native';
import MainProvider from './app/containers/mainPvd.js'

AppRegistry.registerComponent('NativeApp', () => MainProvider);

if (window.document) {

  AppRegistry.runApplication('NativeApp', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
  }); //runApplication

} //fi
