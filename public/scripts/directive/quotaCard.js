/**
 * Created by jim on 2015/3/16.
 */
angular.module('app.directives').directive('quotaCard', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: '/scripts/directive/templates/quotaCard.html',
    scope: {
      used: '@',
      all: '@',
      quotaName: '@'
    },
    controller: function ($scope, $element, $attrs, $transclude) {
      $transclude(function (clone, scope) {
        var dataLine = $element.find('.data-line');
        var extraLine = $element.find('.extra-line');
        var data = clone.filter('.data');
        var extra = clone.filter('.extra');
        dataLine.append(data);
        extraLine.append(extra);
      });
      $scope.loadChart = function() {
        $element.find('.quota-chart').highcharts({
          chart: {
            type: 'pie',
            height: 100,
            width: 100,
            //margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0]
          },
          title: {
            text: null
          },
          plotOptions: {
            pie: {
              center: ['50%', '50%'],
              dataLabels: {
                enabled: false
              },
              innerSize: '80%',
              colors: ['#2196F3', '#B0BEC5']
            }
          },
          series: [{
            data: [
              parseInt($scope.used), parseInt($scope.all - $scope.used)
            ]
          }]
        });
      };
      $scope.$watchGroup(['used', 'all'], function(v) {
        $scope.loadChart();
      });
    }
  };
});