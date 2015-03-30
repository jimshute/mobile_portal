/**
 * Created by jim on 2015/3/17.
 */
angular.module('app.services').factory('ServiceInstance', ['$resource', function($resource) {
  return $resource('/service_instances/:guid', {
    guid: '@guid'
  }, {

  });
}]);

angular.module('app.services').factory('Service', ['$resource', function($resource) {
  return $resource('/services/:guid', {
    guid: '@guid'
  }, {

  });
}]);