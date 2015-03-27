/**
 * Created by jim on 2015/3/26.
 */
angular.module('app.constants').factory('ServiceInstanceStatus', function () {
  return {
    0: {
      text: '已停止',
      color: 'bg-grey'
    },
    1: {
      text: '正常',
      color: 'bg-green'
    },
    2: {
      text: '异常',
      color: 'bg-red'
    }
  };
});