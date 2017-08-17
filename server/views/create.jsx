var React         = require('react');
var DefaultLayout = require('./layouts/defaults');

class CreateOrderComponent extends React.Component {
  addPizzaEntry() {
    console.log('hi');
  }

  render() {
    const titleStyle = {
      marginRight: '5px'
    };
    return (
      <DefaultLayout title={this.props.title}>
        <h1>Create Order</h1>
        <div className="orderEntry">
            <div>
              <span style={titleStyle}>Select pizza type: </span>
              <select name="pizzas">
                {this.props.pizzaTypes.map(ptype =>
                  <option key={ptype.id} value={ptype.name}>{ptype.name}</option>
                )}
              </select>
            </div>
            <div>
              <span style={titleStyle}>Amount:</span><input type='text'></input>
            </div>
          <button type='button' value='Add more pizzas' onclick={this.addPizzaEntry}>Add pizzas</button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div><span style={titleStyle}>Current total:</span><label id="totalLabel">0</label>
        </div>
        <div><span style={titleStyle}>Bonuses:</span><label id="bonusesLabel">0</label></div>
      </DefaultLayout>
    );
  }
}

module.exports = CreateOrderComponent;

/* h1 Create Order

body
form(action='', method='POST')
for type, index in pizzaTypes
 label Pizza Type
p=type.name
input(name='orderItems['+index+'][type]', type='text', value=type.id, hidden=true)
br
label Price
p= type.price
label Qty
input(name='orderItems['+index+'][price]', type='text', value=type.price, hidden=true)
select(name='orderItems['+index+'][quantity]')
option(value='0', selected= true) -- Select --
for num in [1,2,3,4,5]
 option(value=num)= num
hr
input(type='submit') */
