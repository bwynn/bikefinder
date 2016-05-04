angular.module('MainController', [])
  .controller('mainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.$on('preferenceEmit', function(e, args) {
      console.log(args.prefs);
      $rootScope.prefs = args.prefs;
    });
  }]);
