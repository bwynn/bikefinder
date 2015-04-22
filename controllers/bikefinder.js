angular.module("bikefinder")
.controller("bikefinderCtrl", function($scope) {
  $scope.data = {
    bikes: [
      { brand: "Brand #1", model: "Model #1", modelyear: 2015, category: "Cross Country", description: "cool product info for product #1.", fs: true, wheelsize: "650b" },
      { brand: "Brand #2", model: "Model #2", modelyear: 2015, category: "Cross Country", description: "cool product info for product #2.", fs: true, wheelsize: "29" },
      { brand: "Brand #3", model: "Model #3", modelyear: 2015, category: "Trail", description: "even more cool product info for product #3.", fs: false, wheelsize: "650b" }
    ]
  };
});
