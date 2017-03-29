var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese", "Soap", "Cereal", "Baby Oil"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }; 
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }; 
});