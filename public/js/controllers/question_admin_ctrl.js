angular.module('QuestionAdminCtrl', [])
  .controller('questionAdminCtrl', ['$scope', '$rootScope', 'admin', function($scope, $rootScope, admin) {

    $scope.showForm = false;

    // show modal window to add question
    $scope.toggleForm = function() {
      console.log($scope.showForm);
      if ($scope.showForm == false) {
        $scope.showForm = true;
      }
      else if ($scope.showForm == true) {
        $scope.showForm = false;
      }
      else {
        console.log("Need to debug conditional.")
      }
    };

    $scope.addQuestion = function() {
      admin.addQuestion({
        title: $scope.title,
        model: $scope.model,
        value: $scope.value,
        minVal: $scope.minVal,
        maxVal: $scope.maxVal,
        question: $scope.formQuestion,
        answer: $scope.answer1,
        answer: $scope.answer2,
        answer: $scope.answer3
      }).then(function(data) {
        init();
        $scope.showForm = false;
      });
    };

    function init() {
      // get admin questions
      admin.getQuestions().then(function(data) {
        console.log(data);
        $scope.questions = data.data;
      });
    }

    init();

  }]);
