const React         = require('react');
const DefaultLayout = require('/Users/user/Jive/private/erezPlayingWithLoopback/client/layouts/defaults');

class OrdersListComponent extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>List of orders</h1>
        <div>
          <h1>Hello World!</h1>
          <p>Isn't server-side rendering remarkable?</p>
          <button onClick={this._handleClick}>Click Me</button>

          <ul>
            <li>Hello</li>
            {/*{this.props.orders.map(order =>*/}
              {/*<li key={order.id}>id: {order.id}, name: {order.name}, total: {order.total}</li>*/}
            {/*)}*/}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = OrdersListComponent;
