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
        answer: [$scope.answer1, $scope.answer2, $scope.answer3],
        id: $scope.order
      }).then(function(data) {
        init();

        // set model values back to empty strings
        $scope.title = "";
        $scope.model = "";
        $scope.value = "";
        $scope.minVal = "";
        $scope.maxVal = "";
        $scope.formQuestion = "";
        $scope.answer1 = "";
        $scope.answer2 = "";
        $scope.answer3 = "";
        $scope.order = "";
        // hide modal window by setting state value to false 
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
