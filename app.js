(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunchList = "";
  $scope.itemCount = 0;
  $scope.evalMessage = "";

  $scope.countItems = function () {
    var totalItems = calculateItemsInString($scope.lunchList);
    console.log(totalItems);
    $scope.itemCount = totalItems;
    var lunchMessage = evaluateList(totalItems);
    $scope.evalMessage = lunchMessage;
  };


  function calculateItemsInString(string) {
    var stringItems = 0;
    var itemsArray = string.split(",");

    itemsArray.forEach(item => {
      //if(item !== "" || item !== null){
      if(item.trim().length > 0){
            stringItems+=1;
         }
      }
   )

   console.log("Number of items="+stringItems);
    console.log(itemsArray);

    return stringItems;
  }

  function evaluateList(int) {
    var lunchListMessage = "Please enter data first.";
    if (int > 3) {
      lunchListMessage = "Too Much!";
    }
    else if (int > 0) {
      lunchListMessage = "Enjoy!"
    }
    else {
      lunchListMessage = "Please enter data first";
    }
    /*for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }*/

    return lunchListMessage;
  }

});


})();
