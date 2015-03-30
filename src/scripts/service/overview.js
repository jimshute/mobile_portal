/**
 * Created by jim on 2015/3/23.
 */
angular.module('app.overview').factory('OverviewService', ['$resource', function($resource) {
  return $resource('/dashboard', {
    guid: ':guid'
  }, {
    'get': {
      method: 'GET'
    },
    'post': {
      method: 'POST'
    }
  });
}]);