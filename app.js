(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'] ;

function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.itemCount = 0;
  $scope.evalMessage = "";

  $scope.countItems = function () {
    var totalItems = calculateItemsInString($scope.lunchList);
    console.log(totalItems);
    $scope.itemCount = totalItems;
    var lunchMessage = evaluateList(totalItems);
    $scope.evalMessage = lunchMessage;
    var lunchMessageColor = setMessageTextColor(lunchMessage);
    $scope.evalMessageColor = lunchMessageColor;
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
  } // end of calculateItemsInString

  function evaluateList(int) {
    var lunchListMessage = "Please enter data first.";
    if (int > 3) {
      lunchListMessage = "Too Much!";
    }
    else if (int > 0) {
      lunchListMessage = "Enjoy!"
    }
    else {
      lunchListMessage = "Please enter data first.";
    }
    /*for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }*/

    return lunchListMessage;
  } // end of evaluateList

  function setMessageTextColor(string) {
    var messageTextColor = "0,0,0";
    console.log(string);
    if (string ==  "Too Much!") {
      messageTextColor = "0,128,0";
    }
    else if (string == "Enjoy!") {
      messageTextColor = "0,128,0";
    }
    else {
       messageTextColor = "255,0,0";
    }
    console.log(messageTextColor);
    return messageTextColor;

  } // end of setMessageTextColor

} // end of LunchCheckController

})();
