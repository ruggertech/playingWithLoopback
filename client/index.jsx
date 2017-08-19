const React         = require('react');
const DefaultLayout = require('./layouts/defaults');

class OrdersListComponent extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props && this.props.title} orders={this.props && this.props.orders}>
        <div>
          <ul>
            {this.props && this.props.orders && this.props.orders.map(order =>
              <li key={order.id}>id: {order.id}, name: {order.name}, total: {order.total}, creation time: {order.creationtime}</li>
            )}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = OrdersListComponent;
