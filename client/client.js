const React = require('react');
const ReactDOM = require('react-dom');
const Component = require('./index.jsx');

const props = window.PROPS;

ReactDOM.render(
  React.createElement(Component, props), document
);
