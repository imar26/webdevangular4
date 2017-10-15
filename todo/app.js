module.exports = function (app) {

  var todos = [];

  app.post('/api/todo', function (req, res) {
    var todo = req.body;
    todos.push(todo);
    res.json(todos);
  });

  app.get('/api/todo', function (req, res) {
    res.json(todos);
  });

};
