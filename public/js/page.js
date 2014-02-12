/**
 * Created by aebine on 2/12/14.
 */
angular.module('phone.controllers').controller('PageCtrl', function ($rootScope,$routeParams, $scope, $location, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
});