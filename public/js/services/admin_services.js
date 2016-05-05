// public/js/services/admin_services.js

angular.module('AdminService', [])
  .factory('admin', ['$http', function($http) {
    return {
      // get bikes
      getBikes: function() {
        return $http.get('/bikes');
      },
      // add bike
      addBike: function(data) {
        return $http.post('/add-bike', data);
      },
      // update bike
      updateBike: function(data) {
        return $http.put('/update-bike', data);
      },
      // delete bike
      removeBike: function(data) {
        return $http.put('/delete-bike', data);
      },
      getBike: function() {
        return $http.get('/bikes/:id');
      },
      getQuestions: function() {
        return $http.get('/questions');
      },
      addQuestion: function(data) {
        return $http.post('/add_question', data);
      }
    };
  }]);
