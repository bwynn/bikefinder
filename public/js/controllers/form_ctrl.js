angular.module('FormController', [])
  .controller('formCtrl', ['$scope', '$location', '$rootScope', 'admin', function($scope, $location, $rootScope, admin) {

    $scope.prefs = {};

    admin.getQuestions().then(function(data) {
      $scope.questionData = data.data;
      console.log($scope.questionData);
      $scope.count = $scope.questionData.length;

      angular.forEach($scope.questionData, function(value, key) {
        $scope.$watch(value, function() {
          if (this.model > 66) {
            return $scope.answer = this.answer[0];
          }
          else if (this.model <= 33) {
            return $scope.answer = this.answer[1];
          }
          else {
            return $scope.answer = this.answer[2];
          }
        });
      })

    });

    // set the question when clicked
    $scope.setQuestion = function(questionId) {
      $scope.question = questionId;

      $scope.results = false;
    };

    // returns the id when selected
    $scope.isSet = function (questionId) {
      return $scope.question === questionId;
    };

    $scope.submit = function() {
      // add value
      $scope.prefs.climb = $scope.climb;
      $scope.prefs.stability = $scope.stability;
      $scope.prefs.technical = $scope.technical;

      //$scope.question = null; // set question value to null, hide all questions

      $scope.$emit('preferenceEmit', {prefs: $scope.prefs})

      //console.log($scope.prefs);
      $location.path('/results'); // go to the results page
    };

    function watcher(scopeTarget) {
      for (var i = 0; i < scopeTarget.length; i++) {
        $scope.$watch(scopeTarget[i].model, function() {
          if (scopeTarget[i].model > 66) {
            return $scope.answer = scopeTarget[i].answer[0];
          }
          else if (scopeTarget[i].model <= 33) {
            return $scope.answer = scopeTarget[i].answer[1];
          }
          else {
            return $scope.answer = scopeTarget[i].answer[2];
          }
        });
      }
    }

  }]);
