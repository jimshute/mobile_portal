/**
 * Created by jim on 2015/3/28.
 */
angular.module('app.directives').directive('groupedList', [function() {
  return {
    restrict: 'A',
    //replace: true,
    transclude: true,
    templateUrl: '/scripts/directive/templates/groupedList.html',
    //template: '<div ng-transclude="aaa"></div>'
    scope: {
      list: '='
    },
    controller: function($scope, $element, $attrs, $transclude) {
      console.log($scope);
    }
  };
}]);