angular.module('FormController', [])
  .controller('formCtrl', ['$scope', '$location', '$rootScope', 'admin', 'socket', function($scope, $location, $rootScope, admin, socket) {

    $scope.prefs = {};
    $scope.question = 1;

    admin.getQuestions().then(function(data) {
      $scope.questionData = data.data;
      console.log($scope.questionData);
      $scope.count = $scope.questionData.length;
    }).then(function() {
      $scope.$watch($scope.questionData.model, function() {
        for (var i = 0; i < $scope.questionData.length; i++) {
          if ($scope.questionData[i].model > 66) {
            $scope.selectedAnswer = $scope.questionData[i].answers[0];
            console.log($scope.selectedAnswer);
          } else if ($scope.questionData[i].model < 33) {
            $scope.selectedAnswer = $scope.questionData[i].answers[1];
            console.log($scope.selectedAnswer);
          } else {
            $scope.selectedAnswer = $scope.questionData[i].answers[2];
            console.log($scope.selectedAnswer);
          }
        }
      });
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

  }]);
