// public/js/app_routes.js

angular.module('AppRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // enable html5 mode
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // ng-view routes
    $routeProvider.
      when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      }).
      when('/admin/:id', {
        templateUrl: '/views/admin_bike.html',
        controller: 'adminBikeCtrl'
      }).
      when('/admin-questions', {
        templateUrl: '/views/question_admin.html',
        controller: 'questionAdminCtrl'
      }).
      when('/', {
        templateUrl: 'views/questionForm.html',
        controller: 'formCtrl'
      }).
      when('/results', {
        templateUrl: 'views/results.html',
        controller: 'resultsCtrl'
      }).
      otherwise({
        redirectTo: '/',
        controller: 'adminCtrl'
      });
  }]);
