angular.module('ResultsController', [])
  .controller('resultsCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    $scope.$watch(function() {
      return $rootScope;
    }, function() {
      $scope.prefs = $rootScope.prefs;
    });

    $scope.backToStart = function() {
      $location.path('/');
    };
  }]);
