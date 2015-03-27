/**
 * Created by jim on 2015/3/24.
 */
'use strict';
exports.getAppList = function (req, res) {
  res.send(/*{
     apps: */[{
      app_type: 'ruby',// 应用类型
      guid: '123123', // 应用id
      instances: '', // 实例总个数
      name: 'RubyTest', // 应用名称
      running_instances: 0, // 正在运行的实例个数
      state: 2, // 应用状态
      urls: [ // 应用的路由数组
        'rubytest.117.78.6.213.xip.io'
      ]
    }, {
      app_type: 'python',// 应用类型
      guid: '1231233', // 应用id
      instances: '', // 实例总个数
      name: 'PythonTest', // 应用名称
      running_instances: 0, // 正在运行的实例个数
      state: 1, // 应用状态
      urls: [ // 应用的路由数组
        'pythontest.117.78.6.213.xip.io'
      ]
    }, {
      app_type: 'java',// 应用类型
      guid: '143231', // 应用id
      instances: '', // 实例总个数
      name: 'JavaTest', // 应用名称
      running_instances: 0, // 正在运行的实例个数
      state: 0, // 应用状态
      urls: [ // 应用的路由数组
        'javatest.117.78.6.213.xip.io'
      ]
    }, {
      app_type: 'nodejs',// 应用类型
      guid: '', // 应用id
      instances: '', // 实例总个数
      name: 'NodeTest', // 应用名称
      running_instances: 0, // 正在运行的实例个数
      state: 3, // 应用状态
      urls: [ // 应用的路由数组
        'nodetest.117.78.6.213.xip.io'
      ]
    }]
    //}
  );
};

exports.getApp = function (req, res) {
  res.send({ // 应用信息
    VCAP_SERVICE: '{}', //VCAP_SERVICE
    guid: '12343123',
    app_resource: { // 应用所使用的资源。
      disk_quota: 1073741824, // 硬盘使用情况
      instances: 5, // 总共的实例个数
      memory: 134217728, // 应用实例内存配额
      disk_usage: 103878656, // 硬盘使用量
      running_instances: 5, // 正在运行的实例个数
      memory_usage: 505405440, // 内存使用量
      state: 2 // 运行状态（已停止、正在启动、正常、部分异常、异常）
    },
    app_type: 'ruby', // 应用类型
    available_domains: [{ // 可以使用的域名列表，在绑定应用路由时使用
      guid: '' // 域名guid
    }],
    bind_services: [{ // 绑定的服务实例列表
      guid: '', // 服务实例的guid
      name: 'mongodb-Test', // 服务实例名称
      service_name: 'mongodb', // 服务名称
      service_plan: { // 服务实例使用的套餐
        guid: '', // 服务实例的id
        name: 'default' // 套餐名称
      }
    }],
    name: 'RubyTest', // 应用名称
    urls: [{ // 应用的路由
      domain: { // 域
        guid: '', // 域id
        name: '117.78.6.213.xip.io' // 域地址
      },
      guid: '', // url id
      host: 'rubytest' // 主机名
    }]
  });
  //res.render('login', {title: '登录'});
};

exports.startApp = function (req, res) {
  res({});
};

exports.stopApp = function (req, res) {
  res({});
};

exports.restartApp = function (req, res) {
  res({});
};
