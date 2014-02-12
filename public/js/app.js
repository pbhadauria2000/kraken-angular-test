/**
 * Created by aebine on 2/12/14.
 */
'use strict';

/* Application Settings */

var phone = angular.module('phone', ['ngRoute', 'ngResource', 'phone.controllers', 'ui.bootstrap']);

phone.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/Page', { templateUrl: 'layouts/page.html', controller: 'PageCtrl'});
    $routeProvider.otherwise({redirectTo: '/Page'});
}]);

phone.run(['$rootScope', '$window', '$timeout', '$location', function ($rootScope, $window, $timeout, $location) {


}]);
