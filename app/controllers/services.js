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

exports.getServiceList = function(req, res) {
  res.send([{
    guid: 'dfafda',
    label: 'mongodb',
    description: 'MongoDB service for application development and testing',
    long_description: 'MongoDB long description. Very, very long, you cannot even see the end of the string. No, it is not the end, other string is coming... Coming soon... Please wait for a while. Ok, Here we are, reach to the end!!',
    service_type: 'database'
  }, {
    guid: '12452341',
    label: 'redis',
    description: 'MongoDB service for application development and testing',
    long_description: 'MongoDB long description. Very, very long, you cannot even see the end of the string. No, it is not the end, other string is coming... Coming soon... Please wait for a while. Ok, Here we are, reach to the end!!',
    service_type: 'database'
  }, {
    guid: '54326254',
    label: 'mysql',
    description: 'MongoDB service for application development and testing',
    long_description: 'MongoDB long description. Very, very long, you cannot even see the end of the string. No, it is not the end, other string is coming... Coming soon... Please wait for a while. Ok, Here we are, reach to the end!!',
    service_type: 'database'
  }, {
    guid: '54361343',
    label: 'redis',
    description: 'MongoDB service for application development and testing',
    long_description: 'MongoDB long description. Very, very long, you cannot even see the end of the string. No, it is not the end, other string is coming... Coming soon... Please wait for a while. Ok, Here we are, reach to the end!!',
    service_type: 'database'
  }, {
    guid: '51461415',
    label: 'mongodb',
    description: 'MongoDB service for application development and testing',
    long_description: 'MongoDB long description. Very, very long, you cannot even see the end of the string. No, it is not the end, other string is coming... Coming soon... Please wait for a while. Ok, Here we are, reach to the end!!',
    service_type: 'log'
  }]);
};

exports.getService = function(req, res) {
  res.send({
    guid: '34151231',
    label: 'mongodb',
    description: 'MongoDB service for application development and testing',
    long_description: 'MongoDB long description. Very, very long, you cannot even see the end of the string. No, it is not the end, other string is coming... Coming soon... Please wait for a while. Ok, Here we are, reach to the end!!',
    service_plans: [{
      guid: '18243490',
      name: 'free',
      price: '$0.00',
      description: 'free edition',
      extra: 'null'
    }, {
      guid: '43462625324',
      name: 'basic',
      price: '$0.00',
      description: 'basic edition',
      extra: 'null'
    }]
  });
};