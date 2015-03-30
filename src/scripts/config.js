/**
 * Created by Jim on 2015/1/25.
 */
angular.module('app').config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'scripts/view/overview/index.html',
    controller: 'OverviewController'
  }).when('/applications', {
    templateUrl: 'scripts/view/applications/index.html',
    controller: 'ApplicationsController'
  }).when('/applications/:id', {
    templateUrl: 'scripts/view/applications/appOverview.html',
    controller: 'ApplicationsController'
  }).when('/services_instances', {
    templateUrl: 'scripts/view/services/index.html',
    controller: 'ServicesController'
  }).when('/services_instances/:id', {
    templateUrl: 'scripts/view/services/instanceDetail.html',
    controller: 'ServicesController'
  }).when('/services', {
    templateUrl: 'scripts/view/services/serviceList.html',
    controller: 'ServicesController'
  }).when('/services/:id', {
    templateUrl: 'scripts/view/services/serviceDetail.html',
    controller: 'ServicesController'
  }).otherwise({
    templateUrl: 'scripts/view/overview/index.html',
    controller: 'OverviewController'
  });
  //$httpProvider.interceptors.push('LoginInterceptor');
}]);