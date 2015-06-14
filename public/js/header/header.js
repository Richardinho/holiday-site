angular.module('header', [])
    .directive('webSiteHeader', [function() {
        return {
            restrict : 'A',
            templateUrl : 'views/header.html',
            transclude : true
        };
    }]);
