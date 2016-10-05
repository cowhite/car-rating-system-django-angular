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
          return $http({
            method : 'GET',
            url    : 'api/cars/models/?q=' + brand
          })
        },

        getJobCategories : function(q){
          return $http({
            method : 'GET',
            url    : 'api/resumes/car-category-autocomplete/?q=' + q
          })
        },


      }
});