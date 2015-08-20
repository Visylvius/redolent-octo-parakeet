angular.module('NoteWrangler')
  .controller('NotesIndexController', function($http, Note){
    Note.all();
    // .success(function(data){
    //   $scope.notes = data;
    // })
    $scope.notes = Note.query();
  });
    var controller = this;
    $http({method: 'GET', url: '/notes'}).success(function(data) {
      controller.notes = data;
    });
  });
