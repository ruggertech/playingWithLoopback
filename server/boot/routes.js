const path       = require('path');
const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));

  // Install a `/` route that returns server status
  const router = app.loopback.Router();
  app.set('views', path.join(__dirname, '../views'));
  app.use(router);

  router.get('/', function(req, res) {
    app.models.Order.find(null, function(err, orders) {
      res.send(require('../views/index.js').render(orders));
    });
  });

  router.get('/create', function(req, res) {
    app.models.PizzaType.find(null, function(err, pizzaTypes) {
      res.send(require('../views/create.js').render(pizzaTypes));
    });
  });

  router.get('/ping', function(req, res) {
    res.send('pong');
  });
};
