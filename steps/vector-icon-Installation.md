## intsall react-native-vector-icons for all platforms(iOS,Android,Web)
```
npm install react-native-vector-icons --save
```

## Link react-native-vector-icons for iOS and Android
```
rnpm link
```

## intsall url-loader for web
```
npm install --save-dev url-loader
```


## webpack.config.js must be contain below lines(for web)
```
loaders: [
  {
    test: /\.ttf$/,
    loader: "url-loader", // or directly file-loader
    include: path.resolve(__dirname, "node_modules/react-native-vector-icons")
  },
  ...
  ]
```

## intex.js must be contain below lines(for web)
```
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
```
