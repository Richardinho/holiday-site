angular.module('articles', [])
    .factory('ArticleService', ['$http', function($http) {

        return {

            listArticles : function() {
                return $http.get('/articles');
            },

            getArticleByKeyword : function(keyword) {

                return $http.get('/articlesbykeyword/' + keyword);
            }
        };
    }])
    .controller('ArticleCtrl', [ '$scope', '$routeParams','ArticleService', function($scope, $params, articleService) {

        function getArticleById(articles, id) {
            return _.find(articles, function(article) {
                return article._id == id;
            });
        }

        articleService.listArticles().success(function(articles) {

            $scope.articles = articles;  // get all articles down each time. Not good performance, I know!
            if($params.foo) {
                $scope.article = getArticleById(articles, $params.foo);
            } else {
                //  sets display article to be first in array. Not perfect since the url does not have an id param in it at this point, but if
                //  we click on the first tab we will get the same article with the id in the url. Inconsistent.
                $scope.article = articles[0];
            }
        });
    }]);

