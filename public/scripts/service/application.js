/**
 * Created by jim on 2015/3/17.
 */
angular.module('app.applications').factory('Application', ['$resource', function($resource) {
  return $resource('/applications/:guid', {
    guid: '@guid'
  }, {
    'start': {
      method: 'PUT',
      url: '/applications/:guid/start'
    },
    'restart': {
      method: 'PUT',
      url: '/applications/:guid/restart'
    },
    'stop': {
      method: 'PUT',
      url: '/applications/:guid/stop'
    },
    'refresh': {
      method: 'GET'
    }
  });
}]);