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
      $scope.test = '60%';
      $scope.color = 'bg-green';
      $scope.barStyle = {'width': 0};
      $scope.$watch('percent', function (value) {
        $scope.barStyle['width'] = value;
        var v = value.replace('%', '');
        if (v <= 60) {
          return $scope.color = 'bg-green';
        }
        if (v > 60 && v <= 80) {
          return $scope.color = 'bg-orange';
        }
        return $scope.color = 'bg-red';
      });
    }
  };
});
