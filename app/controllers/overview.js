/**
 * Created by jim on 2015/3/24.
 */
'use strict';
exports.getOverview = function (req, res) {
  res.send({
      org_quota: {
        memory_limit: 10240, // 组织内存总配额
        total_routes: 20, // 组织路由总配额
        total_services: 20 // 组织服务总配额
      },
      space_summary: { // 当前空间的概况
        spacename: 'dev',  // 空间名
        app_info: [{       // 应用数组
          app_type: 'python', //应用的类型
          guid: '123123', // 应用的id
          name: 'TestPython' // 应用的名称
        }, {       // 应用数组
          app_type: 'java', //应用的类型
          guid: '5436234', // 应用的id
          name: 'TestJava' // 应用的名称
        }, {       // 应用数组
          app_type: 'ruby', //应用的类型
          guid: '4532627', // 应用的id
          name: 'TestRuby' // 应用的名称
        }],
        routes_num: 13, // 该空间中所使用的路由的条数
        service_info: [{ // 服务列表
          guid: '123123', // 服务实例的id
          name: 'mongodb-Test', // 服务实例的名称
          plan: 'basic', // 服务实例所使用的套餐
          service_type: 'mongodb' // 服务实例的类型
        }]
      }
    }
  )
  ;
}
;