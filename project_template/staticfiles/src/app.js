angular.module('appBase', [
/*    'ngCookies',
    'ngFileUpload',
    'ngMaterial',
    'ngMessages',
    'ngStorage',*/
    'ui.bootstrap',
    'ui.router',
    'ngMessages',
    'homecontrollers',
    'carsservice',
    //'google-apis',
    // Custom apps
    'ngMaterial',
    'ngStorage',
    /*'ngSanitize',
    'angularTrix',*/
    'angular-svg-round-progressbar',


])

.config([
/*    '$compileProvider',
    '$httpProvider',
    '$locationProvider',
    '$mdIconProvider',
    '$stateProvider',
    '$urlMatcherFactoryProvider',
    '$urlRouterProvider',*/
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',

    function (
        $stateProvider,
        $urlRouterProvider,
        $httpProvider

/*        $compileProvider,
        $httpProvider,
        $locationProvider,
        $mdIconProvider,
        $stateProvider,
        $urlMatcherFactoryProvider,
        $urlRouterProvider*/
    ) {

        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';


        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/static/src/myapps/cars/templates/home.html",
                controller: 'HomeCtrl as vm',
                data: {
                    loginRequired: false
                }
            })
    }
]);