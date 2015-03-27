/**
 * Created by jim on 2015/3/24.
 */
'use strict';

exports.renderLogin = function(req, res) {
  res.render('login', {title: '登录'});
};

exports.signIn = function(req, res) {
  res.send({});
  //res.render('index', {});
};