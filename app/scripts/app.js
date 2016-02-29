'use strict';

/**
 * @ngdoc overview
 * @name kenzanGovApp
 * @description
 * # kenzanGovApp
 *
 * Main module of the application.
 */
angular
  .module('kenzanGov', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/template', {
        templateUrl: 'views/template.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
        css: 'styles/temp.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
