(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunchList = "";
  $scope.itemCount = 0;
  $scope.evalMessage = "";

  $scope.countItems = function () {
    var totalItems = calculateNumericForString($scope.lunchList);
    $scope.itemCount = totalItems;
    var lunchMessage = evaluateList(totalItems);
    $scope.evalMessage = lunchMessage;
  };


  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

  function evaluateList(int) {
    var lunchListMessage = "Please enter data first";
    if (int > 1000) {
      lunchListMessage = "Too Much!";
    }    /*for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }*/

    return lunchListMessage;
  }

});


})();
