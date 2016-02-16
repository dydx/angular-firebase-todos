(function () {
  angular.module('todosApp', ['firebase']);

  angular.module('todosApp')
    .factory('todosFactory', function ($firebaseArray) {

      var ref = new Firebase('https://atl-wdi5-angular-todos.firebaseIO.com');
      var todos = $firebaseArray(ref);

      function add (todo) {
        todos.$add(todo);
      }

      function remove (todo) {
        todos.$remove(todo);
      }

      return {
        add: add,
        remove: remove,
        todos: todos
      };
    });

  angular.module('todosApp')
    .controller('todosCtrl', function (todosFactory) {

      this.todos = todosFactory.todos;

      this.newTodo = {
        title: '',
        completed: false
      };

      this.addTodo = function () {
        todosFactory.add(angular.copy(this.newTodo));
      };

      this.finishTodo = function (todo) {
        todosFactory.remove(todo);
      };

    });
})();
