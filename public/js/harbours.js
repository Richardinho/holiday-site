angular.module('harbours', []).
    controller('MapCtrl', ['$scope', '$state', function($scope, $state) {

        $scope.harbours = [
            { id : 1, coords : { latitude : 55.9622222, longitude : -4.8165138 }, description : "You can see the sea from anywhere in Gourock", options : { draggable : false, 'title' : 'Gourock' } },
            { id : 2, coords : { latitude : 55.9465408, longitude : -4.9214999 }, description : "A mystical place", options : { draggable : false, 'title' : 'Dunoon' } },
            { id : 4, coords : { latitude : 55.8387579, longitude : -5.0524641 }, description : "Past its heyday", options : { draggable : false, 'title' : 'Rothesay' } },
            { id : 3, coords : {latitude : 55.6401445, longitude : -4.8185148 }, description : "A flyblown wee place",  options : { draggable : false, 'title' : 'Ardrossan' } },
            { id : 5, coords : {latitude : 55.9388853, longitude : -4.5610189 }, description : "Dumbartonccvcvc",  options : { draggable : false, 'title' : 'Dumbarton' } }
        ];

        $scope.setArticle = function(keyword) {

            $state.go('places.place', { place: keyword });

        }
        $scope.map = { center: { latitude: 55.9416301, longitude: -4.7799435 }, zoom: 10 };

    }]);