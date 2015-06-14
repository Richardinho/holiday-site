angular.module('harbours', []).
    controller('MapCtrl', ['$scope','ArticleService', function($scope, articlesService) {

        $scope.harbours = [
            { id : 1, coords : { latitude : 55.9622222, longitude : -4.8165138 }, description : "You can see the sea from anywhere in Gourock", options : { draggable : false, 'title' : 'Gourock' } },
            { id : 2, coords : { latitude : 55.9465408, longitude : -4.9214999 }, description : "A mystical place", options : { draggable : false, 'title' : 'Dunoon' } },
            { id : 4, coords : { latitude : 55.8387579, longitude : -5.0524641 }, description : "Past its heyday", options : { draggable : false, 'title' : 'Rothesay' } },
            { id : 3, coords : {latitude : 55.6401445, longitude : -4.8185148 }, description : "A flyblown wee place",  options : { draggable : true, 'title' : 'Ardrossan' } }

        ];

        $scope.setArticle = function(keyword) {
            articlesService.getArticleByKeyword(keyword).success(function(article) {
                if(!article || !article.text) {
                    $scope.currentArticle = '<p>Sorry, there is no article for that place</p>';
                } else {
                    $scope.currentArticle = article.text;
                }
            }).error(function() {
                $scope.currentArticle = '<p>Sorry, the server seems to not be working currently</p>';
            });
        }
        $scope.map = { center: { latitude: 55.9416301, longitude: -4.7799435 }, zoom: 10 };

        $scope.currentArticle = "<p>click on a marker to see an article about the harbour</p>";


    }]);