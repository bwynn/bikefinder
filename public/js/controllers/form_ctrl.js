angular.module('FormController', [])
  .controller('formCtrl', ['$scope', '$location', '$rootScope', 'admin', function($scope, $location, $rootScope, admin) {

    $scope.prefs = {};
    $scope.question = 1;

    admin.getQuestions().then(function(data) {
      $scope.questionData = data.data;
      console.log($scope.questionData);
      $scope.count = $scope.questionData.length;
      watcher($scope.questionData, $scope.selectedAnswer);
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

    function watcher(scopeTarget, selectedAnswer) {
      $scope.$watch(scopeTarget.model, function() {
        for (var i = 0; i < scopeTarget.length; i++) {
          if (scopeTarget[i].model > 66) {
            this.selectedAnswer = scopeTarget[i].answers[0];
          } else if (scopeTarget[i].model < 33) {
            this.selectedAnswer = scopeTarget[i].answers[1];
          } else {
            this.selectedAnswer = scopeTarget[i].answers[2];
            console.log(this.selectedAnswer);
          }
        }
      });
    }

  }]);
