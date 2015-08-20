angular.module('NoteWrangler')
  .directive('nwCategorySelect', function(Category) {
    return {
      link: function(scope, element, attrs) {
        scope.categories = Category.query();
      }
      replace: true,
      restrict: 'E',
      templateUrl: '/templates/directives/nw-category-select.html'
    };
  });
