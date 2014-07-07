angular.module('recipeApp', ['ng', 'seo']);

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

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl',
                    }
                }
            })
            .state('list', {
                url: '/list',
                views: {
                    'main': {
                        templateUrl: 'templates/list.html',
                        controller: 'listCtrl',
                        resolve: {
                            recipes: ['$http', function($http) {
                                return $http.get(WEBASCRAZY_CONFIG.apiUrl + '/node.json').then(function(response) {
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
                                return $http.get(WEBASCRAZY_CONFIG.apiUrl + '/node/' + $stateParams.recipe + '.json').then(function(response) {
            
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
                                return $http.get(WEBASCRAZY_CONFIG.apiUrl + '/node.json').then(function(response) {
                                    return response.data.list;
                                })
                            }]
                        }
                    }
                }
            })
            .state('best', {
                url: '/best',
                views: {
                    'main': {
                        templateUrl: 'templates/best.html'        
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    'main': {
                        templateUrl: 'templates/about.html',
                        controller: 'homeCtrl'
                    }
                }
            })
    }])