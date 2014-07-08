angular
    .module('recipeApp')
    .controller('homeCtrl', ['$scope', function($scope) {
        $scope.title = "Recipes";
        $scope.items = ['first', 'second', 'third'];
    }])