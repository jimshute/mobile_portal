/**
 * Created by Jim on 2015/1/25.
 */
angular.module('app.overview').controller('OverviewController', ['$scope', 'OverviewService', function($scope, OverviewService) {
  $scope.routeNum = 0;
  $scope.totalRoute = 1;
  $scope.serviceNum = 0;
  $scope.totalService = 1;
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
    //{
    //  guid: '1',
    //  app_type: 'java',
    //  app_name: 'JavaTest'
    //},
    //{
    //  guid: '2',
    //  app_type: 'ruby',
    //  app_name: 'RubyTest'
    //},
    //{
    //  guid: '3',
    //  app_type: 'nodejs',
    //  app_name: 'NodeJSTest'
    //}
  ];

  $scope.services = [
    //{
    //  guid: '1',
    //  label: 'mongodb',
    //  name: 'mongodb-SSSS'
    //},
    //{
    //  guid: '2',
    //  label: 'mysql',
    //  name: 'mysql-aaaa'
    //},
    //{
    //  guid: '3',
    //  label: 'redis',
    //  name: 'reds-fdsw'
    //}
  ];

  $scope.messages = [];

  $scope.loadData = function(data) {
    $scope.routeNum = data.space_summary.routes_num;
    $scope.totalRoute = data.org_quota.total_routes;
    $scope.serviceNum = data.space_summary.service_info.length;
    $scope.totalService = data.org_quota.total_services;
    $scope.apps = data.space_summary.app_info;
    $scope.services = data.space_summary.service_info;
  };

  $scope.initOverview = function() {
    OverviewService.get(function(data) {
      $scope.loadData(data);
      console.log(data);
    });
  };
}]);