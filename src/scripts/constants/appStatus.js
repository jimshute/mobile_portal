/**
 * Created by jim on 2015/3/15.
 */
angular.module('app.constants').factory('AppStatus', function() {
  return {
    0: {
      text: '已停止',
      color: 'bg-grey'
    },
    1: {
      text: '启动中',
      color: 'bg-blue-grey'
    },
    2: {
      text: '正常',
      color: 'bg-green'
    },
    3: {
      text: '部分异常',
      color: 'bg-orange'
    },
    4: {
      text: '异常',
      color: 'bg-red'
    }
  }
  ;
});