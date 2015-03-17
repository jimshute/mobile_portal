/**
 * Created by jim on 2015/3/14.
 */
angular.module('app.directives').directive('processBar', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/scripts/directive/templates/processBar.html',
    scope: {
      percent: '@'
    },
    controller: function ($scope, $element) {
      $scope.color = 'bg-green';
      $scope.$watch('percent', function (value) {
        var v = value.replace('%', '');
        if (v <= 50) {
          return $scope.color = 'bg-green';
        }
        if (v > 50 && v <= 80) {
          return $scope.color = 'bg-orange';
        }
        return $scope.color = 'bg-red';
      });
    }
  };
});
