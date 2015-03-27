/**
 * Created by jim on 2015/3/13.
 */
angular.module('app.directives').directive('card', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: '/scripts/directive/templates/card.html',
    scope: {
      cardTitle: '@',
      showFoot: '@',
      titleColor: '@',
      titleFontColor: '@'
    },
    controller: function ($scope, $element, $attrs, $transclude) {
      $scope.cardBody = $element.find('.card-body');
      $scope.cardExpanded = true;
      $scope.contentExpanded = true;
      $transclude(function(clone, scope) {
        var contentSection = $element.find('.card-content');
        var content = clone.filter('.c-content');
        contentSection.append(content);
      });
      $scope.toggleExpand = function () {
        if ($scope.cardExpanded) {
          $scope.cardBody.height($scope.cardBody.height());
          $scope.cardExpanded = false;
        } else {
          $scope.cardExpanded = true;
          setTimeout(function() {
            $scope.cardBody.height('auto');
          }, 900);
        }
      };
    }
  };
});