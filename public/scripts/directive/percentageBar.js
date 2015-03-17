/**
 * Created by jim on 2015/3/15.
 */
angular.module('app.directives').directive('percentageBar', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/scripts/directive/templates/percentageBar.html',
    scope: {
      items: '='
    },
    controller: function($scope, $element) {
      $scope.totalValue = 0;
      $scope.generatePercentage = function(item) {
        return item.value / $scope.totalValue * 100;
      };
      $scope.$watch('items', function(value) {
        angular.forEach(value, function(v, i) {
          this.totalValue += v.value;
        }, $scope);
      }, true);
    }
  };
});