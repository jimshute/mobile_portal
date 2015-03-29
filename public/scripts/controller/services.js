/**
 * Created by Jim on 2015/1/25.
 */
angular.module('app.services').controller('ServicesController', [
  '$scope', '$window', '$routeParams', 'Service', 'ServiceInstance', 'ServiceInstanceStatus',
  function ($scope, $window, $routeParams, Service, ServiceInstance, ServiceInstanceStatus) {
    $scope.serviceInstanceStatus = ServiceInstanceStatus;
    $scope.serviceInstances = [];
    $scope.serviceInstance = {};
    $scope.services = [];
    $scope.service = {};
    $scope.selectedPlan = null;
    $scope.initServiceInstanceList = function () {
      ServiceInstance.query(function (data) {
        $scope.serviceInstances = data;
      });
    };
    $scope.loadServiceInstance = function () {
      var guid = $routeParams.id;
      ServiceInstance.get({guid: guid}, function (data) {
        $scope.serviceInstance = data;
      })
    };
    $scope.loadServiceList = function () {
      Service.query(function (data) {
        $scope.services = data;
      });
    };
    $scope.loadService = function () {
      var guid = $routeParams.id;
      Service.get({guid: guid}, function (data) {
        $scope.service = data;
      });
    };
    $scope.goBack = function () {
      $window.history.back();
    };
    $scope.toggleSelect = function() {
      $scope.selectedPlan = this.plan;
      //this.plan.selected = !this.plan.selected;
    };
    $scope.submitAddInstance = function() {

    }
  }]);