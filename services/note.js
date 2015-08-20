angular.module('NoteWrangler')
  .factory('Note', function NoteFactory() {
    return {
      all: function() {
        return $http({method: 'get', url:'/notes'});
      )},
      create: function(note) {
        return $http({method: 'POST', url: '/notes', data: note});
      )}
      }
    }
  });
 // factory syntax
  // angular.module('ModuleName')
  //   .factory('ServiceName', function <ServiceName>Factory(){
  //     return {<object containing shared functions> }
  //   });
