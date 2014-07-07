angular
    .module('recipeApp')
    .controller('listCtrl', ['$scope', 'recipes', function($scope, recipes) {
        $scope.title = "List";
        $scope.recipes = recipes;

        $scope.htmlReady();
    }])