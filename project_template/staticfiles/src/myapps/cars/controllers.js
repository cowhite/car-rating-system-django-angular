(function () {
  'use strict';
  angular
      .module('homecontrollers', ['ngMaterial'])
      .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl ($scope, $timeout, $q, $log, carsService, $mdDialog, $document) {
    var vm = this;

    vm.simulateQuery = false;
    vm.isDisabled    = false;

    // list of `car` value/display objects
    vm.cars        = loadBrands();
    vm.models      = [];
    vm.querySearch   = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.searchTextChange   = searchTextChange;
    vm.carReviewDialog    = carReviewDialog;

    vm.newCar = newCar;

    function newCar(car) {
      alert("Sorry! You'll need to create a Constitution for " + car + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************
      carsService.getAllCars().then(function(response){
        $scope.newCars = response.data;
      }).catch(function() {
    $scope.error = 'unable to get the cars';
  });
    /**
     * Search for cars... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query, qtype) {
      if (qtype=='brand'){
      var results = vm.cars,
          deferred;
      if (vm.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
      if (qtype=='model'){
      vm.models      = loadModels(vm.selectedBrand.name);
      var results = vm.models,
          deferred;
      if (vm.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `cars` list of key/value pairs
     */
    // function loadAll() {
    //   var allCars = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
    //           Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
    //           Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
    //           Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
    //           North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
    //           South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
    //           Wisconsin, Wyoming';

    //   return allCars.split(/, +/g).map( function (car) {
    //     return {
    //       value: car.toLowerCase(),
    //       display: car
    //     };
    //   });
    // }

    function loadBrands() {
      var allCars = carsService.getBrands().then(function(response){
        return response.data;
      });
      return allCars;
    }

    function loadModels(brand=undefined) {
      var allModels = carsService.getModels(brand).then(function(response){
        return response.data;
      });
      return allModels;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(car) {
        return (car.value.indexOf(lowercaseQuery) === 0);
      };

    }

    function carReviewDialog(ev, car=undefined)
        {
            $mdDialog.show({
                controller         : 'CarReviewController',
                controllerAs       : 'vm',
                locals             : {
                    selectedBrand  : vm.selectedBrand,
                    selectedModel  : vm.selectedModel,
                    car            : car
                },
                templateUrl: "/static/src/myapps/cars/review/car_review.html",
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true
            }).then(function (response)
            {
              
            });
            
        }
  }
})();