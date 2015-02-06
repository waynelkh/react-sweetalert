require("file?name=html-[hash:6].html!./index.html");

var React = require('react');
var App = require('./App.js');
window.React = React;

React.render(<App />,document.body);