(function ()
{
    'use strict';

    angular
        .module('homecontrollers')
        .controller('CarReviewController', CarReviewController)
        .directive('starRating', starRating);
function starRating() {
return {
restrict : 'A',
template : '<ul class="rating">'
   + ' <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
   + '  <i class="fa fa-star-o"></i>'
   + ' </li>'
   + '</ul>',
scope : {
 ratingValue : '=',
 max : '=',
 onRatingSelected : '&'
},
link : function(scope, elem, attrs) {
 var updateStars = function() {
  scope.stars = [];
  for ( var i = 0; i < scope.max; i++) {
   scope.stars.push({
    filled : i < scope.ratingValue
   });
  }
 };
 
 scope.toggle = function(index) {
  scope.ratingValue = index + 1;
  scope.onRatingSelected({
   rating : index + 1
  });
 };
 
 scope.$watch('ratingValue',
  function(oldVal, newVal) {
   if (newVal) {
    updateStars();
   }
  }
 );
}
};
}



    /** @ngInject */
    function CarReviewController($scope, $mdDialog, carsService, $log, car, selectedBrand, selectedModel)
    {
        var vm = this;
        vm.car = car;
        vm.selectedModel = selectedModel;
        vm.selectedBrand = selectedBrand;
        if (selectedBrand) {
        carsService.getVariant(selectedBrand.name, selectedModel.name).then(
          function(response){
            $scope.carVariant = response.data[0];
            carsService.getCarReview(response.data[0]).then(
              function(response){
                $scope.carReview = response.data;
              }).catch(function() {
                $scope.error = 'unable to get review';
              });
          }).catch(function() {
    $scope.error = 'unable to get the cars';
  });
        }
    }
})();
