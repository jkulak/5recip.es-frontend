angular
    .module('recipeApp')
    .controller('recipeCtrl', ['$scope', '$stateParams', 'recipe', function($scope, $stateParams, recipe) {
        $scope.title = "Recipe view";
        $scope.recipe = recipe;

        console.log('Recipe is coming');
        console.log(recipe);

        // $scope.testing = "elo";
    }])