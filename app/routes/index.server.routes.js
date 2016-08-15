module.exports = function(app){
  var classController = require('../controllers/class.server.controller');
  app.get('/', classController.index);
};
