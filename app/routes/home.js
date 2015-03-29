var controller = require('../controllers/home')();

module.exports = function(app){
  console.log('hue');
  app.get('/index', controller.index);
  app.get('/', controller.index);
}