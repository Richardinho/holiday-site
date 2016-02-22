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
		'ui.router',
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
	.controller('ContactCtrl', ['$scope', function($scope) {
		$scope.user = {};
		$scope.formMode = 'form';
		$scope.submit = function () {
			$scope.formMode = 'results';
		}}])
	.controller('PlacesCtrl', ['$scope', '$stateParams','ArticleService', function ($scope, $stateParams, articlesService) {
		var defaultArticle = { text : '<p>Sorry, there is no article for that place</p>' };

		articlesService.getArticleByKeyword($stateParams.place).then(function(article) {
				if(!article.data || !article.data.text) {
						$scope.currentArticle = defaultArticle;
				} else {
						$scope.currentArticle = article.data;
				}
		},function() {
				$scope.currentArticle = defaultArticle;
		});
	}])
	.config(['$stateProvider',
		function ($stateProvider) {
			$stateProvider
				.state("home", {
					url: "/",
					templateUrl: 'views/main.html',
					controller : 'MainCtrl'
				})
				.state('places', {
					url : '/places',
					templateUrl: 'views/places.html',
					controller: 'MapCtrl'
				})
				.state('places.place', {
					url : '/:place',
					templateUrl : 'views/place.html',
					controller : 'PlacesCtrl'
				})
				.state('contact', {
					url : '/contact',
					templateUrl: 'views/contact.html',
					controller: 'ContactCtrl'
				});
	}]);
