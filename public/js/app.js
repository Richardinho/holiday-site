'use strict';

/**
 * @ngdoc overview
 * @name holidaySiteApp
 * @description
 * # holidaySiteApp
 *
 * Main module of the application.
 */
angular
  .module('holidaySiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'header',
    'articles',
    'carousel',
    'harbours'

  ])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.carouselImages = ['dunoon1.jpeg', 'dunoonpier.jpg', 'oldDunoon.jpg', 'westbay.jpg'];

        $scope.mainImage = $scope.carouselImages[1];


    }])



    .factory('UsersService', ['$http', function ($http) {

        var url = '/users';

        return {
            getUsers : function($scope) {
                $http.get(url).success(function (users) {

                    $scope.users = users;

                });
            }
        };
    }])

    .controller('ContactCtrl', ['$scope', 'UsersService', function($scope, userService) {

        $scope.user = {};

        $scope.formMode = 'form';

        $scope.submit = function () {
            $scope.formMode = 'results';
        }
    }])

  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/places', {
            templateUrl: 'views/places.html',
            controller: 'MapCtrl'
        })
        .when('/articles/:foo', {
            templateUrl: 'views/article.html',
            controller: 'ArticleCtrl'
        })
        .when('/articles', {
            templateUrl: 'views/article.html',
            controller: 'ArticleCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
