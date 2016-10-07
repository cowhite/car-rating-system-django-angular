(function ()
{
    'use strict';

    angular
        .module('homecontrollers')
        .controller('CarReviewController', CarReviewController);

    /** @ngInject */
    function CarReviewController($mdDialog, carsService, $log, selectedBrand, selectedModel)
    {
        var vm = this;
        vm.name = "Audi";
    }
})();
