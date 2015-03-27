/**
 * Created by jim on 2015/3/15.
 */
angular.module('app.directives').directive('detailHeader', ['AppStatus', function (AppStatus) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: '/scripts/directive/templates/detailHeader.html',
    scope: {
      title: '@',
      bgColor: '@',
      imgUrl: '@',
      headerBgColor: '@',
      statusColor: '@',
      statusText: '@'
    },
    controller: function ($scope, $element, $attrs, $transclude) {
      $scope.appStatus = AppStatus;
      $transclude(function (clone, scope) {
        var subContentBlock = $element.find('.sub-content');
        var subContent = clone;
        subContentBlock.append(subContent);
      });
    }
  };
}]);