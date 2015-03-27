/**
 * Created by jim on 2015/3/25.
 */
angular.module('app.applications').factory('AppStateHandler', ['AppStatus', 'Application', function (AppStatus, Application) {
  var currentState = 0;
  var setCurrentState = function (value) {
    currentState = value;
    this.app && (this.app.app_resource.state = value);
  };
  var states = {
    'start': function (guid, cb) {
      var self = this;
      Application.start({guid: guid}, function (data) {
        var count = 0;
        var i = setInterval(function () {
          states['refresh'](guid, function (d) {
            if (d.app_resource.state == 1 || count == 20) {
              // app ok or count more than 20, stop counting
              self.app && (self.app = d);
              cb.call(self, d);
            }
          });
        }, 1000);
        //console.log(data);
      });
    },
    'restart': function (guid, cb) {
      var self = this;
      Application.restart({guid: guid}, function (data) {
        var count = 0;
        var i = setInterval(function () {
          states['refresh'](guid, function (d) {
            if (d.app_resource.state == 1 || count == 20) {
              // app ok or count more than 20, stop counting
              self.app && (self.app = d);
              cb.call(self, d);
            }
          });
        }, 1000);
        //console.log(data);
      });
    },
    'stop': function (guid, cb) {
      var self = this;
      Application.stop({guid: guid}, function (data) {
        self.app && (self.app.app_resource.state = 0);
        cb.call(self, data);
        //console.log(data);
      });
    },
    'refresh': function (guid, cb) {
      var self = this;
      Application.refresh({guid: guid}, function (data) {
        self.app && (self.app = data);
        cb.call(data);
        //console.log(data);
      });
    }
  };
  var changeState = function (guid, action, scope) {
    states[action] && states[action].call(scope || this, guid);
  };
  var getCurrentState = function () {
    return currentState;
  };
  return {
    changeState: changeState,
    getCurrentState: getCurrentState
  }
}]);