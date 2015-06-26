describe('first.spec', function () {


    beforeEach(module('holidaySiteApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('MainCtrl scope', function() {
        var $scope = {}, controller;
        beforeEach(function () {
            controller = $controller('MainCtrl', { $scope: $scope });
        });
        it('should have carousel images', function() {
            expect($scope.carouselImages).toEqual(['dunoon1.jpeg', 'dunoonpier.jpg', 'oldDunoon.jpg', 'westbay.jpg']);
        });
        it('should have default carousel image', function () {
            expect($scope.mainImage).toBe('dunoonpier.jpg');
        });
    });

    describe('ContactCtrl submit()', function () {
        var $scope = {}, controller;
        beforeEach(function() {
            controller = $controller('ContactCtrl', { $scope : $scope});
        });
        it('should change form mode', function () {
            expect($scope.formMode).toBe('form');
            $scope.submit();
            expect($scope.formMode).toBe('results');
        });
    });
});