const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/style.css"/>
      </head>
      <body>
      <h1>{this.props.title}</h1>
      {this.props.children}
      {console.log('Erez props: ', this.props)}

      <script dangerouslySetInnerHTML={{
        __html: 'window.PROPS=' + JSON.stringify(this.props.orders)
      }}/>
      <script src='/bundle.js'/>
      </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
