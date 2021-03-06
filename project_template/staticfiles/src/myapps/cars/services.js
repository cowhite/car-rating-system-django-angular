angular.module('carsservice', [])

.service('carsService',function($http, $window,$q, $document){
  return {

        getBrands : function(){
          return $http({
            method : 'GET',
            url    : 'api/cars/brand/'
          })
        },

        getModels : function(brand){
          if (brand==undefined) {
            return;
          }
          return $http({
            method : 'GET',
            url    : 'api/cars/models/?q=' + brand
          })
        },

        getVariant : function(brand, model){
          if (brand==undefined || model==undefined) {
            return;
          }
          return $http({
            method : 'GET',
            url    : 'api/cars/variant/?brand=' + brand + '&model=' + model
          })
        },

        getAllVariants : function(){
          return $http({
            method : 'GET',
            url    : 'api/cars/variant'
          })
        },

        getCarReview : function(variant){
          return $http({
            method : 'GET',
            url    : 'api/cars/review/?variant='+ variant.id
          })
        },

        getAllCars : function(){
          return $http({
            method : 'GET',
            url    : 'api/cars/review/'
          })
        },

        postReview : function(data){
          return $http({
            method : 'POST',
            url    : 'api/cars/review/',
            data   : data
          })
        }


      }
});