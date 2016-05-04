angular.module('FormController', [])
  .controller('formCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {

    // placeholder data
    $scope.questions = [
      {
        title: "Climbing and Descending",
        model: "range",
        value: "50",
        answers: [
          "Climbing",
          "Descending",
          "Both climbing and descending"
        ],
        "min_val": "Descending",
        "max_val": "Climbing",
        question: "Would you rather have a bike that climbs well, or one that goes downhill well? Or one bike to rule them all?"
      },
      {
        title: "Stable vs. Nimble",
        model: "stability",
        value: "50",
        answers: [
          "A bike that holds the line you choose, nimble and quick handling",
          "A bike that you will feel comfortable and confident on.",
          "Feels good and balanced under your feet"
        ],
        "min_val": "Nimble",
        "max_val": "Stable",
        question: "Would you rather have a bike that you feel stable and confident on, or one that follows your lead?"
      },
      {
        title: "Technical Prowess",
        model: "technical",
        value: "50",
        answers: [
          "Fire roads, gravel, moderate single-track. Expected rides not terribly technical.",
          "Roots, rocks, steep climbs and descents, jumps. Expected rides will be gnar.",
          "A good all-rounder"
        ],
        "min_val": "Not Technical",
        "max_val": "Very Technical",
        question: "Are you planning on riding technical trails? Or would you like to be able to? Use the slider below to indicate how technical the terrain that you'll be riding is.",
      },
      {
        title: "Travel",
        model: "travel",
        value: "50",
        answers: [
          "Less travel, good for cross country and weight oriented rigs.",
          "A good trail bike, a lean enough geometry to allow for efficient climbing, usually with suspension that allows for wide ranges of compression damping, yet capable and ready to be pointed down the hill and tackle almost every challenge and ready for more.",
          "A true descender, ranging from enduro racing to bike park whips, primed to be hucked into oblivion and handle a day spinning laps at the park, to full on World Cup downhill trail race beasts."
        ],
        "min_val": "100mm",
        "max_val": "200mm",
        question: "How much travel?"
      },
      {
        title: "Investment",
        model: "investment",
        value: "50",
        answers: [
          "Minimum investment. Looking for the best bang for your buck, and willing to upgrade when you are ready. Because if you plan to ride a lot, you will want to invest more.",
          "Medium investment. This is a good level of investment with little room for improvement off the bat.",
          "Maximum investment. You want the best gear, looking to get the lightest, strongest, and most durable gear money can buy. If you plan on riding a lot, this really is the best way to go."
        ],
        "min_val": "Minimum",
        "max_val": "Maximum",
        question: "What level of investment?"
      }
    ];

    $scope.prefs = {}; // object to contain user preferences

    // CLIMBING VARS
    $scope.climb = "50"; // set default value

    // STABILITY VARS
    $scope.stability = "50"; // set default value;

    // add scope and technical prowess
    $scope.technical = "50"; // set default value

    // set default value for question picker
    $scope.question = 1;

    // set travel value
    $scope.travel = 50;

    // set default value for full suspension to true
    $scope.fullSuspension = true;

    // set investment value
    $scope.investment = "50";

    // set default visited value
    $scope.visited = false;

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

    // conditional to determine the users asc/desc preferences
    // watches the $scope.climb ng-model to update the values as the user changes their preference values
    $scope.$watch("climb", function() {
      if ($scope.climb > 66) {
        $scope.strengths = "Climbing";
      }
      else if ($scope.climb <= 33) {
        $scope.strengths = "Descending";
      }
      else {
        $scope.strengths = "Both climbing and descending";
      }
    });

    // watches the $scope.stability ng-model to update the user values as they change their preferences
    $scope.$watch("stability", function() {
      if ($scope.stability < 33) {
        $scope.stablePrefs = "A bike that holds the line you choose, nimble and quick handling";
      }
      else if ($scope.stability > 66) {
        $scope.stablePrefs = "A bike that you will feel comfortable and confident on.";
      }
      else {
        $scope.stablePrefs = "Feels good and balanced under your feet";
      }
    });

    // watches $scope.technical to update when user does.
    $scope.$watch("technical", function() {
      if ($scope.technical < 33) {
        $scope.techPrefs = "Fire roads, gravel, moderate single-track. Expected rides not terribly technical.";
      }
      else if ($scope.technical > 66) {
        $scope.techPrefs = "Roots, rocks, steep climbs and descents, jumps. Expected rides will be gnar.";
      }
      else {
        $scope.techPrefs = "A good all-rounder";
      }
    });

    // watches $scope.travel
    $scope.$watch("travel", function() {
      if ($scope.travel < 33) {
        $scope.travelPrefs = "Less travel, good for cross country and weight oriented rigs.";
      }
      else if ($scope.travel < 66) {
        $scope.travelPrefs = "A good trail bike, a lean enough geometry to allow for efficient climbing, usually with suspension that allows for wide ranges of compression damping, yet capable and ready to be pointed down the hill and tackle almost every challenge and ready for more.";
      }
      else {
        $scope.travelPrefs = "A true descender, ranging from enduro racing to bike park whips, primed to be hucked into oblivion and handle a day spinning laps at the park, to full on World Cup downhill trail race beasts.";
      }
    });

    // watches $scope.travel
    $scope.$watch("investment", function() {
      if ($scope.investment < 33) {
        $scope.investmentPrefs = "Minimum investment. Looking for the best bang for your buck, and willing to upgrade when you are ready. Because if you plan to ride a lot, you will want to invest more.";
      }
      else if ($scope.investment < 66) {
        $scope.investmentPrefs = "Medium investment. This is a good level of investment with little room for improvement off the bat.";
      }
      else {
        $scope.investmentPrefs = "Maximum investment. You want the best gear, looking to get the lightest, strongest, and most durable gear money can buy. If you plan on riding a lot, this really is the best way to go.";
      }
    });

  }]);

  // KEY

  // CLIMB_FACTOR ////////////////

  // DH = Downhill Oriented
  // Trail = 50/50 - trail bike
  // XC = Uphill Oriented

  // GEOMETRY ////////////////

  // CASUAL = Not Technical - headtube angle not dependent
  // MED = Somewhat technical
  // AGGRESSIVE = VERY TECHNICAL

  // WHEEL BASE ///////////////

  // EXPERIENCED = Short wheel base - nimble
  // INTERMEDIATE = Medium length wheel base
  // BEGINNER = Long wheel base - stable and sturdy

  // dh + casual + experienced =
  // dh + casual + intermediate =
  // dh + casual + beginner =

  // dh + med + experienced =
  // dh + med + intermediate =
  // dh + med + beginner =

  // dh + aggressive + experienced =
  // dh + aggressive + intermediate =
  // dh + aggressive + beginner =

  ////////////////////////////////////

  // trail + casual + experienced =
  // trail + casual + intermediate =
  // trail + casual + beginner =

  // trail + med + experienced =
  // trail + med + intermediate =
  // trail + med + beginner =

  // trail + aggressive + experienced =
  // trail + aggressive + intermediate =
  // trail + aggressive + beginner =

  ////////////////////////////////////

  // xc + casual + experienced =
  // xc + casual + intermediate =
  // xc + casual + beginner =

  // xc + med + experienced =
  // xc + med + intermediate =
  // xc + med + beginner =

  // xc + aggressive + experienced =
  // xc + aggressive + intermediate =
  // xc + aggressive + beginner =
