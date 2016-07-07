// public/js/app.js

angular.module('bikeApp', ['ngRoute', 'ngAnimate', 'angular-filepicker', 'btford.socket-io', 'AppRoutes', 'SocketService', 'AdminService', 'AdminController', 'AdminBikeController', 'FormController', 'MainController', 'ResultsController', 'QuestionAdminCtrl'])
  .config(function(filepickerProvider) {
    filepickerProvider.setKey('AjgLIPAdhTVu5fIVwhuahz');
  });

// from questionaire
/* angular.module('myApp', ['ngRoute', 'AppRoutes', 'FormCtrl', 'MainCtrl', 'ResultsCtrl']);
*/
