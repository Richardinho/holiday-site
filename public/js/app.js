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
    'carousel'
  ])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.carouselImages = ['dunoon1.jpeg', 'dunoonpier.jpg', 'oldDunoon.jpg', 'westbay.jpg'];

        $scope.mainImage = $scope.carouselImages[1];

        $scope.harbours = [
            {id : 1, coords : { latitude : 55.9622222, longitude : -4.8165138 }, description : "You can see the sea from anywhere in Gourock", options : { draggable : false, 'title' : 'Gourock' } },
            {id : 2, coords : { latitude : 55.9465408, longitude : -4.9214999 }, description : "A mystical place", options : { draggable : false, 'title' : 'Dunoon' } },
            {id : 4, coords : { latitude : 55.8387579, longitude : -5.0524641 }, description : "Past its heyday", options : { draggable : false, 'title' : 'Rothesay' } },
           // {'Dumbarton' : { lat : 0, long : 0 }},
           // {'Campbeltown' : { lat : 0, long : 0 }},
           // {'Millport' : { lat : 0, long : 0 }},
           // {'Wemyss Bay' : { lat : 0, long : 0 }},
            {id : 3, coords : {latitude : 55.6401445, longitude : -4.8185148 }, description : "A flyblown wee place",  options : { draggable : true, 'title' : 'Ardrossan' } }

        ];

        $scope.map = { center: { latitude: 55.9416301, longitude: -4.7799435 }, zoom: 10 };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 55.9416301,
                longitude: -4.7799435
            },
            options: {
                draggable: true,
                title : 'hello world'
            }
        }
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

        userService.getUsers($scope);
    }])


  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/places', {
            templateUrl: 'views/places.html',
            controller: 'MainCtrl'
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
