(function () {
  angular.module('todosApp', ['firebase']);
  angular.module('todosApp')
    .controller('todosCtrl', function ($firebaseArray) {
      var ref = new Firebase('https://atl-wdi5-angular-todos.firebaseIO.com');

      this.todos = $firebaseArray(ref);

      this.newTodo = {
        title: '',
        completed: false
      };

      // I'm intentionally wrapping the Firebase $add and $remove methods
      // here instead of calling them directly in my view
      this.addTodo = function () {
        this.todos.$add(angular.copy(this.newTodo));
      };

      this.finishTodo = function (todo) {
        this.todos.$remove(todo);
      };

    });
})();
