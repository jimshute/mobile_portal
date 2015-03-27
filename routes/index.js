var express = require('express');
var router = express.Router();
var appController = require('../app/controllers/applications.js');
var serviceController = require('../app/controllers/services.js');
var userController = require('../app/controllers/user.js');
var overviewController = require('../app/controllers/overview.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/login', userController.renderLogin);
router.post('/login', userController.signIn);

router.get(['/overview', '/dashboard'], overviewController.getOverview);
//router.get('/overview', overviewController.getOverview);

router.get('/applications', appController.getAppList);
router.get('/applications/:id', appController.getApp);
router.get('/applications/:id/start', appController.startApp);
router.get('/applications/:id/stop', appController.stopApp);
router.get('/applications/:id/restart', appController.restartApp);

router.get('/service_instances', serviceController.getInstanceList);
router.get('/service_instances/:id', serviceController.getServiceInstance);

router.get('/applications/:id/route/:rid', function (req, res) {
    console.log(req.params.id);
    console.log(req.params.rid);
    res.send({});
});

module.exports = router;
