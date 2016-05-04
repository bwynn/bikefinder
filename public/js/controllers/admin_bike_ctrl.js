angular.module('AdminBikeController', [])
  .controller('adminBikeCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.bike = {};
    // make route request based on the url id param set from previous view... best way to implement? 
    var id = $routeParams.id;
    $http.get('/bikes/' + id).
      success(function(data) {
        console.log(JSON.stringify(data));
        $scope.bike = data;
      }).
      error(function(data) {
        console.log(data);
      })
  }]);
