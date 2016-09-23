console.log('server/config/routes.js');
var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app){
  app.post('/user', users.show);
  app.post('/users', users.index);
  app.get('/questions', questions.index);
  app.post('/new_question', questions.create);
  app.get('/question/:id', questions.show);
  app.post('/answer', answers.create);
  app.post('/like', answers.addLike);
}