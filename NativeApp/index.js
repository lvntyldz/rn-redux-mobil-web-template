import {AppRegistry} from 'react-native';
import MainProvider from './app/containers/mainPvd.js'

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';



AppRegistry.registerComponent('NativeApp', () => MainProvider);

if (window.document) {

  const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: FontAwesome;
  }`;

  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);


  AppRegistry.runApplication('NativeApp', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
  }); //runApplication

} //fi
