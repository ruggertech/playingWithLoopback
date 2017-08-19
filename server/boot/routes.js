const path       = require('path');
const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));

  // Install a `/` route that returns server status
  const router = app.loopback.Router();
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
  app.set('views', path.join(__dirname, '../../client'));
  app.use(router);

  router.get('/', function(req, res) {
    app.models.Order.find(null, function(err, orders) {
      res.render('index', { title: 'List of orders', orders: orders });
    });
  });

  router.get('/create', function(req, res) {
    app.models.PizzaType.find(null, function(err, pizzaTypes) {
      res.render('create', { title: 'Create order', pizzaTypes: pizzaTypes });
    });
  });

  router.get('/ping', function(req, res) {
    res.send('pong');
  });


};
