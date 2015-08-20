angular.module('NoteWrangler')
  .factory('Notes', function NotesFactory($resource){
    return $resource('/notes/:id', {}, {
      update: {
        method: 'PUT'
      }
    });
  });
