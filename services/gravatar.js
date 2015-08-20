angular.module('NoteWrangler')
  .factory( 'Gravatar', function GravatarFactory(){
    var avatarSize = 80; // default size
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    return function(email){
      return avatarUrl + CryptoJS.MD5(email) + '?size=' + avatarSize.toString();
    };
  });
// provider syntax
// .provider('Service Name', function Service Name Provider() {
  //this.$get factory function
//});

provider('example', function exampleProvider() {
  this.$get = function($http){

  };
});

.provider('example', function exampleProvider(otherProvider){
  this.$get factory function
});
angular.module('NoteWrangler')
  .provider( 'Gravatar', function GravatarProvider(){
    var avatarSize = 80; // default size
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    this.setSize = function(size) {
      avatarSize = size;
    }
    this.$get = function() {
      return function(email){
      return avatarUrl + CryptoJS.MD5(email) + '?size=' + avatarSize.toString();
      }
    };
  });
