/**
 * Created by jim on 2015/3/26.
 */
'use strict';

exports.getInstanceList = function (req, res) {
  res.send([
    {
      guid: '143221',
      label: 'mongodb',
      name: 'mongodb-Test',
      plan_name: 'default',
      status: 0
    }
  ]);
};

exports.getServiceInstance = function (req, res) {
  res.send({
    bind_apps: [{
      app_type: "java",
      bind_guid: 'f41352',
      guid: '12423541',
      name: 'javaTest',
      state: 1
    }],
    create_at: "2015-12-23 10:10:10", // time_stamp is better
    guid: '3251231432',
    name: 'mongodb-TEST',
    plan_name: 'Default',
    service_name: 'mongodb',
    description: 'MongoDB service for application development and testing'
  });
};