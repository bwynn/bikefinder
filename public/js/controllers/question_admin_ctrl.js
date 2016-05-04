angular.module('QuestionAdminCtrl', [])
  .controller('questionAdminCtrl', ['$scope', '$rootScope', 'admin', function($scope, $rootScope, admin) {

    function init() {
      // get admin questions
      admin.getQuestions().then(function(data) {
        console.log(data);
        $scope.questions = data;
      });
    }

    init();

  }]);
