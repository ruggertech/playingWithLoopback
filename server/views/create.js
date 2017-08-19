const defaultLayout = require('./layouts/defaults');

class createOrderPage {
  render(pizzaTypes) {
    this._pizzaTypes = pizzaTypes;
    return defaultLayout('Create an order', this.body.bind(this), createOrderPage.scriptTag);
  };

  body() {
    const titleStyle = {
      marginRight: '5px'
    };
    return (
      `<button type='button' value='Add more pizzas' onclick='addPizzaEntry()'>
          Add pizzas</button>
        <div class="entryList">
         <div class="pizzaEntry">
              <div>
                <span style={titleStyle}>Select pizza type: </span>
                <select name="pizzas">
                  ${this._pizzaTypes.map(ptype =>
                    `<option value=${ptype.name}>${ptype.name}</option>`
                  )}
                </select>
              </div>
              <div>
                <span style={titleStyle}>Amount:</span>
                <input class='amountInput' oninput='updateTotal()'/>
              </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div><span style={titleStyle}>Current total:</span><label id="totalLabel">0</label>
        </div>
        <div><span style={titleStyle}>Bonuses:</span><label id="bonusesLabel">0</label></div>`);
  }

  static scriptTag() {
    return (
      `function addPizzaEntry() { 
         const ele = document.getElementsByClassName('pizzaEntry');
         let clonedEntry;
         if (ele && ele.length > 0) {
            clonedEntry = ele[0].cloneNode(true);
            ele[0].parentNode.insertBefore(clonedEntry, null);
         }
      }
      
      function updateTotal() { 
         const ele = document.getElementsByClassName('amountInput');
         let total = 0;
         if (ele && ele.length > 0) {
            for (let i=0; i < ele.length; i++) {
              total += parseInt(ele[i].value) || 0
            }
            
            document.getElementById('totalLabel').innerHTML = total;
         }
      }
      
      
      
      `
    );
  }
}

module.exports = new createOrderPage();

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
