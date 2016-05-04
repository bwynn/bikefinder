// public/js/controllers/admin_ctrl.js

angular.module('AdminController', [])
  .controller('adminCtrl', ['$scope', 'admin', 'filepickerService', function($scope, admin, filepickerService) {

    // new bike submission
    $scope.submit = function() {
      if ($scope.newBikeId === null || $scope.newBikeId === undefined) {
        $scope.newBikeId = 1;
      }
      admin.addBike({
        bike_id: $scope.newBikeId,
        brand: $scope.brand,
        model: $scope.model,
        year: $scope.year,
        travel: $scope.travel,
        ht_ang: $scope.ht_ang,
        wh_base: $scope.wh_base,
        fs: $scope.fs,
        wh_size: $scope.wh_size,
        bike_img: $scope.bikeImage,

      }).then(function() {
        init();
      });
    };

    $scope.toggleNewBike = function() {
      if (!$scope.show_form) {
        $scope.show_form = true;
      }
      else {
        $scope.show_form = false;
      }
    };

    // update a bike
    // currently this update function does not allow for modifying the image
    // perhaps this feature/function would be better suited for an individual page for updating all properties on
    // each individual bike
    $scope.updateBike = function(unique_id) {
      admin.updateBike({
        id: unique_id,
        brand: this.bike.brand,
        model: this.bike.model,
        year: this.bike.year,
        bike_id: this.bike.bike_id,
        ht_ang: this.bike.geo.ht_ang,
        wh_base: this.bike.geo.wh_base,
        fs: this.bike.fs,
        wh_size: this.bike.wh_size,
        travel: this.bike.travel
      }).then(function() {
        init();
      });
    }

    // remove bike
    $scope.deleteBike = function(unique_id) {
      //console.log(unique_id);
      admin.removeBike({
        "id": unique_id
      }).then(function() {
        init();
      })
    };

    // upload picture of the bike using filepicker
    $scope.upload = function() {
      filepickerService.pick({
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH'],
        openTo: 'IMAGE_SEARCH'
      },
      function(Blob) {
        //console.log(JSON.stringify(Blob));
        $scope.bikeImage = Blob;
        $scope.$apply();
      });
    };

    // toggles several values to show/hide individual bike forms/details
    $scope.showUpdateForm = function() {
      if (!this.updateForm) {
        this.updateForm = true; // show the update form
        this.details = false; // hide the details
      }
      else {
        this.updateForm = false; // hide the update form if user clicks cancel btn
        this.details = true; // go back to the details view for that bike
      }
    };

    // get data from db and initialize controller
    function init() {
      admin.getBikes().then(function(bikes) {
        $scope.bikes = bikes.data;
        //console.log(bikes.data);
      }).then(function() {
        setId();
        defaultVars(); // set and clear out any values expected to be empty on forms.
      });
    }

    // this takes the largest bike_id value found in the bikes collection and increments += 1
    function setId() {
      $scope.bike_ids = [];
      for (var i = 0; i < $scope.bikes.length; i++) {
        $scope.bike_ids.push($scope.bikes[i].bike_id);
      }
      if ($scope.bike_ids.length < 1) {
        //console.log("length: " + $scope.bike_ids.length);
        $scope.newBikeId = 1;
      }
      else {
        //console.log($scope.bike_ids);
        // define new bike id value
        $scope.newBikeId = Math.max.apply(Math, $scope.bike_ids) + 1;
      }
    }

    // set default values
    function defaultVars() {
      $scope.updateForm = false;
      $scope.brand = "";
      $scope.model = "";
      $scope.year = "";
      $scope.travel = "";
      $scope.ht_ang = "";
      $scope.wh_base = "";
      $scope.fs = false;
      $scope.wh_size = "";
      $scope.bikeImage = {};
    }

    init();

  }]);
