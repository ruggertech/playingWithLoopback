'use strict';

function myCustomValidator(err) {
  if (this.quantity <= 0) {
    err();
  }
}

module.exports = function(Orderitem) {
  Orderitem.validatesNumericalityOf('quantity', { int: true });
  Orderitem.validate('quantity', myCustomValidator, { message: 'Quantity must be positive' });
};
