const DefaultLayout = (title, body, script) => {
  return (`
  <html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/style.css"/>
  </head>
  <body>
  <h1>${title}</h1>
  ${body()}

  <script type="text/javascript">
      ${script && script()}
  </script>
<!--  <script dangerouslySetInnerHTML={{
    __html: 'window.PROPS=' + JSON.stringify(this.props.orders)
  }}/>-->
  </body>
  </html>`);
};

module.exports = DefaultLayout;
