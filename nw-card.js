angular.module("NoteWrangler")
  .directive("nwCard", function() {
    var num = 1;
    return {
      restrict: "E",
      templateUrl: "templates/directives/nw-card.html",
      scope: {
        header: '=',
        icon: '='
      }
    };
});
