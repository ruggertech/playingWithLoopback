const defaultLayout = require('./layouts/defaults');

class indexPage {
  render(orders) {
    this._ordersList = orders;
    return defaultLayout('List of orders', this.body.bind(this));
  };

  body() {
    return `${JSON.stringify(this._ordersList)}`;
  };

}

module.exports = new indexPage();
