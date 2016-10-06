angular.module('carsservice', [])

.service('carsService',function($http, $window,$q, $document){
  return {
        getJobs : function(){
          return $http({
            method : 'GET',
            url    : '/cars/api/'
          });
        },

        postJobs : function(data){
          return $http({
            method : 'POST',
            url    : '/cars/api/',
            data   : data
          });
        },

        postBenefits : function(data){
          return $http({
            method : 'POST',
            url    : '/benefits/api/',
            data   : data
          });
        },

        postCompensation : function(data){
          return $http({
            method : 'POST',
            url    : '/compensation/api/',
            data   : data
          });
        },

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

        getJobCategories : function(q){
          return $http({
            method : 'GET',
            url    : 'api/cars/car-models-autocomplete/?q=' + q
          })
        },


      }
});