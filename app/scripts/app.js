'use strict';

/**
 * @ngdoc overview
 * @name hydzooApp
 * @description
 * # hydzooApp
 *
 * Main module of the application.
 */
angular
  .module('hydzooApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cities', {
        templateUrl: 'views/cities.html',
        controller: 'CitiesCtrl',
        controllerAs: 'cities'
      })
     .when('/tank', {
        templateUrl: 'views/tank.html',
        controller: 'TankCtrl',
        controllerAs: 'tank'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (e, current) {
      $rootScope.isMain = current.$$route.controllerAs === 'main';
    });
  });
