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

      this.addTodo = function () {
        this.todos.$add(angular.copy(this.newTodo));
      };

    });
})();
