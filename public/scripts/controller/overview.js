/**
 * Created by Jim on 2015/1/25.
 */
angular.module('app.overview').controller('OverviewController', ['$scope', function($scope) {
  $scope.routeNum = 2;
  $scope.totalRoute = 20;
  $scope.serviceNum = 12;
  $scope.totalService = 20;
  $scope.msgInfo = [{
    color: 'bg-red',
    value: 1
  }, {
    color: 'bg-orange',
    value: 2
  }, {
    color: 'bg-green',
    value: 2
  }];
  $scope.apps = [
    {
      guid: '1',
      app_type: 'java',
      app_name: 'JavaTest'
    },
    {
      guid: '2',
      app_type: 'ruby',
      app_name: 'RubyTest'
    },
    {
      guid: '3',
      app_type: 'nodejs',
      app_name: 'NodeJSTest'
    }
  ];

  $scope.services = [
    {
      guid: '1',
      label: 'mongodb',
      name: 'mongodb-SSSS'
    },
    {
      guid: '2',
      label: 'mysql',
      name: 'mysql-aaaa'
    },
    {
      guid: '3',
      label: 'redis',
      name: 'reds-fdsw'
    }
  ];

  $scope.messages = [];
}]);