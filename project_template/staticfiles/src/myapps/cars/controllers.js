(function () {
  'use strict';
  angular
      .module('homecontrollers', ['ngMaterial'])
      .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl ($timeout, $q, $log, carsService) {
    var vm = this;

    vm.simulateQuery = false;
    vm.isDisabled    = false;

    // list of `car` value/display objects
    vm.cars        = loadBrands();
    vm.models      = loadModels();
    vm.querySearch   = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.searchTextChange   = searchTextChange;

    vm.newCar = newCar;

    function newCar(car) {
      alert("Sorry! You'll need to create a Constitution for " + car + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for cars... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query, qtype) {
      if (qtype=='brand'){
      var results = query ? vm.cars.filter( createFilterFor(query) ) : vm.cars,
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
      var results = query ? vm.cars.filter( createFilterFor(query) ) : vm.cars,
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
        debugger;
      })
    }

    function loadModels() {
      var allCars = carsService.getModels(brand).then(function(response){
        debugger;
      })
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
  }
})();