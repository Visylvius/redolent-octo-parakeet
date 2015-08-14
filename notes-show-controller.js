angular.module('NoteWrangler')
  .controller('NotesShowController', function($http, $routeParams) {
    var controller = this;
    //In order to get a unique id. The syntax for routeParams is written below;
    $http({method: 'GET', url: '/notes/' + $routeParams.id})
    .success(function(data){
      controller.note = data;
    })
  })
