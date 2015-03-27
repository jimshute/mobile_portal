/**
 * Created by Jim on 2015/1/25.
 */
angular.module('app.applications').controller('ApplicationsController', [
  '$scope', '$window', '$routeParams', 'AppStatus', 'Application', 'AppStateHandler',
  function ($scope, $window, $routeParams, AppStatus, Application, AppStateHandler) {
    $scope.appStatus = AppStatus;
    $scope.apps = [/*{
      app_type: 'python',
      guid: '1',
      instances: 1,
      name: 'pythonTest',
      running_instances: 1,
      service_names: [],
      space_guid: '12',
      state: 0,
      urls: [
        'jimagent.117.78.6.213.xip.io'
      ]
    }, {
      app_type: 'java',
      guid: '2',
      instances: 1,
      name: 'javaTest',
      running_instances: 1,
      service_names: [],
      space_guid: '12',
      state: 1,
      urls: [
        'jimjava.117.78.6.213.xip.io'
      ]
    }, {
      app_type: 'ruby',
      guid: '2',
      instances: 1,
      name: 'rubyTest',
      running_instances: 1,
      service_names: [],
      space_guid: '12',
      state: 2,
      urls: [
        'jimruby.117.78.6.213.xip.io'
      ]
    }*/];
    $scope.app = {
      app_type: 'ruby',
      VCAP_SERVICES: "{....}",
      app_resource: {
        disk_quota: 1024,
        health: 100,
        //health_status: 3,
        instances: 3,
        running_instances: 1,
        memory: 128,
        org_name: "jimshute@163.com-org",
        space_name: "dev",
        state: 3 // app status
      },
      available_domains: [{
        guid: '....',
        name: '117.78.6.213.xip.io'
      }],
      available_service: [{
        guid: '....',
        name: 'mongodb-test',
        service_plan_name: 'default'
      }],
      bind_services: [{
        guid: '...',
        bound_app_count: 1,
        //current_binding:
        healthy: 'normal',
        name: 'mongodb-test',
        service_name: 'mongodb',
        service_plan: {
          guid: '...',
          name: 'default'
        }
      }],
      build_pack: 'java_buildpack',
      command: null,
      created_time: '2014-12-12 16:41:23', //timestamp is better
      guid: '12523244',
      instances: [{
        state: 'RUNNING',
        stats: {
          disk_quota: 1073741824, // Bytes
          fds_quota: 16384, // unknown
          host: '10.123.148.228',
          mem_quota: 134217728, // Bytes
          name: 'jimtest', // App name
          port: '62197', // instance port
          uptime: 121247, // unknown,
          uris: ['jimtest.117.78.6.213.xip.io'],
          usage: {
            cpu: 0.0076722058,
            disk: 103878656,
            mem: 126705664,
            time: '2015-03-17 11:01:23' // timestamp is better
          }
        }
      }],
      name: 'jimtest150311',
      environments: {
        env_1: 'value1',
        env_2: 'value2'
      }
    };

    $scope.getList = function () {
      Application.query(function (data) {
        $scope.apps = data;
        console.log(data);
      });
    };
    $scope.getAppOverview = function() {
      Application.get({guid: $routeParams.id}, function(data) {
        $scope.app = data;
        $scope.app.mmM = (data.app_resource.memory * data.app_resource.running_instances / 1024 / 1024).toFixed(0);
        $scope.app.ummM = (data.app_resource.memory_usage / 1024 / 1024).toFixed(0);
        $scope.app.hddM = (data.app_resource.disk_quota * data.app_resource.running_instances / 1024 / 1024).toFixed(0);
        $scope.app.uhddM = (data.app_resource.disk_usage / 1024 / 1024).toFixed(0);

      });
    };
    $scope.generateUsage = function (type) {
      var usage = 0;
      angular.forEach($scope.app.instances, function (v, i) {
        usage += v.stats.usage[type];
      });
      return usage;
    };
    $scope.goBack = function () {
      $window.history.back();
    };
    $scope.operateApp = function(action) {
      AppStateHandler.changeState($scope.app.guid, action);
    };
    //console.log($routeParams);
  }]);