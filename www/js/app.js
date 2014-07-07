/**
* recipeApp Module
*
* Description
*/
angular.module('recipeApp', [
    'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        // $locationProvider.html5Mode(true);
        // $locationProvider.hashPrefix('!');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
                // template: 'home'
            })
            .state('list', {
                url: '/list',
                views: {
                    'main': {
                        templateUrl: 'templates/list.html',
                        controller: 'listCtrl',
                        resolve: {
                            recipes: ['$http', function($http) {
                                return $http.get('http://recipes-backend.griller/node.json').then(function(response) {
                                    return response.data.list;
                                })
                            }]
                        }
                    }
                }
            })
            .state('list.recipe', {
                url: '/:recipe',
                views: {
                    'main@': {
                        templateUrl: 'templates/list.recipe.html',
                        controller: 'recipeCtrl',
                        resolve: {
                            recipe: ['$http', '$stateParams', function($http, $stateParams) {
                                return $http.get('http://recipes-backend.griller/node/' + $stateParams.recipe + '.json').then(function(response) {
                                    return response.data;
                                    
                                })
                            }]
                        }
                    },
                    'aside@': {
                        templateUrl: 'templates/list.html',
                        controller: 'listCtrl',
                        resolve: {
                            recipes: ['$http', function($http) {
                                return $http.get('http://recipes-backend.griller/node.json').then(function(response) {
                                    return response.data.list;
                                })
                            }]
                        }
                    }
                }
            })
            .state('best', {
                url: '/best',
                templateUrl: 'templates/best.html'
                // template: 'home'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'homeCtrl'
                // template: 'home'
            })
    }])