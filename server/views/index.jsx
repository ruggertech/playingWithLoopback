const React         = require('react');
const DefaultLayout = require('./layouts/defaults');

class OrdersListComponent extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>List of orders</h1>
        <div>
          <ul>
            {this.props.orders.map(order =>
              <li key={order.id}>id: {order.id}, name: {order.name}, total: {order.total}</li>
            )}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = OrdersListComponent;
