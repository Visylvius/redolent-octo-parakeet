angular.module("NoteWrangler")
  .directive("nwCard", function() {
    var num = 1;
    return {
      // this is run after our directive has been compiled
      // element: refers to the outermost element of the included template in this case its nw-card.html
      link: function(scope, element, attrs){
        element.on('click', function(){
          element('div.card p').toggleClass('hidden');
        });
        console.log(attrs.header);
      }
      restrict: "E",
      templateUrl: "templates/directives/nw-card.html",
      scope: {
        header: '=',
        body: '=',
        icon: '='
      },
      link: function(scope, element) {
        scope.body = $sce.trustAsHtml(markdown.toHTML( scope.body )) ;
      }
    };
});
