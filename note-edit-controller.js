angular.module('NoteWrangler')
  .controller('NoteEditController', function($scope, Note){
    $scope.deleteNote = function(nore) {
      note.$delete(note);
    };
  });
