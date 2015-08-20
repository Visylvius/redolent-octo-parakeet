angular.module('NoteWrangler')
  .factory('Note', function NoteFactory($resource) {
    return $resource('/notes/:id', {}, {});
  });
    return {
      all: function() {
        return $http({method: 'get', url:'/notes'});
      }),
      find: function(id) {
        return $http({method: 'GET', url: '/notes', + id});
      },
      update: function(noteObj) {
        return $http({method: 'PUT', url: '/notes', data: noteObj});
      },
      create: function(note) {
        return $http({method: 'POST', url: '/notes', data: note});
      }),
      }
    }
  });
 // factory syntax
  // angular.module('ModuleName')
  //   .factory('ServiceName', function <ServiceName>Factory(){
  //     return {<object containing shared functions> }
  //   });
