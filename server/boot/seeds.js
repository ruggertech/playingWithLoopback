'use strict';

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;

  db.autoupdate('PizzaType', function(err) {
    if (err) {
      throw err;
    }

    /*    app.models.PizzaType.create([{
          name: 'Margherita',
          price: 5
        }, {
          name: 'Pepperoni',
          price: 6
        }, ], function(err, pizzaTypes) {
          if (err) throw err;

          console.log('Models created: \n', pizzaTypes);
        }); */

    console.log('created PizzaType table');
  });

  db.autoupdate('Order', function(err) {
    if (err) {
      throw err;
    }
    console.log('created Order table');
  });

  db.autoupdate('OrderItem', function(err) {
    if (err) {
      throw err;
    }
    console.log('created OrderItem table');
  });

  db.autoupdate('User', function(err) {
    if (err) {
      throw err;
    }
    console.log('created User table');
  });

  db.autoupdate('AccessToken', function(err) {
    if (err) {
      throw err;
    }
    console.log('created AccessToken table');
  });
  db.autoupdate('ACL', function(err) {
    if (err) {
      throw err;
    }
    console.log('created ACL table');
  });
  db.autoupdate('RoleMapping', function(err) {
    if (err) {
      throw err;
    }
    console.log('created RoleMapping table');
  });
  db.autoupdate('Role', function(err) {
    if (err) {
      throw err;
    }
    console.log('created Role table');
  });
};
