/**
 * Created by Jim on 2015/1/24.
 */
angular.module('app', [
  'ngRoute',
  'mobile-angular-ui.core.capture',
  'mobile-angular-ui.components.sidebars',
  'mobile-angular-ui.components.modals',
  'mobile-angular-ui.core.outerClick',
  'mobile-angular-ui.components.scrollable',
  'mobile-angular-ui.components.navbars',
  'mobile-angular-ui.components.switch',
  'app.applications',
  'app.services',
  'app.overview'
]);
angular.module('app.constants', []);
angular.module('app.directives', ['ngAnimate', 'app.constants']);
angular.module('app.applications', ['app.constants', 'ngResource']);
angular.module('app.services', ['app.constants', 'ngResource']);
angular.module('app.overview', [
  'app.directives',
  'ngResource'
]);