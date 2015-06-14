angular.module('carousel', [])
    .directive('carousel', ['$interval', function($interval) {
        return {
            restrict: 'E',
            templateUrl : 'views/carousel.html',
            scope : {
                images : '='
            },
            link : function(scope) {
                var counter = 0;
                scope.mainImage = scope.images[counter];

                $interval(function(){
                    counter++;
                    if(counter >= scope.images.length) counter = 0;
                    scope.mainImage = scope.images[counter];

                }, 10000);
            }
        };
    }]);