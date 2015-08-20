angular.module('NoteWrangler')
  .controller('NotesEditController', function($scope, $http){
    $scope.updateNote = function(noteObj) {
      $http({method: "PUT", url: "/notes", data: noteObj});
    };
  });
