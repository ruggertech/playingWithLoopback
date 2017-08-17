var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/style.css"/>
      </head>
      <body>{this.props.children}

      <script src='/bundle.js' />
      </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
