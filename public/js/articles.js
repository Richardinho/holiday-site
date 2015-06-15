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
    }]);


