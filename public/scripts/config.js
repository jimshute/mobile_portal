/**
 * Created by Jim on 2015/1/25.
 */
angular.module('app').config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'scripts/view/overview/index.html',
    controller: 'OverviewController'
  }).when('/applications', {
    templateUrl: 'scripts/view/applications/index.html',
    controller: 'ApplicationsController'
  }).when('/appOverview', {
    templateUrl: 'scripts/view/applications/appOverview.html',
    controller: 'ApplicationsController'
  }).when('/services', {
    templateUrl: 'scripts/view/services/index.html',
    controller: 'ServicesController'
  }).otherwise({
    templateUrl: 'scripts/view/overview/index.html',
    controller: 'OverviewController'
  });
}]);