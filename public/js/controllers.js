'use strict';

//var $appControllerProvider; //see below

dust.onLoad = function(name, callback) {
    console.log("load: " + name);
    $.ajax(name , {
        success: function(data) {
            callback(undefined, data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            callback(textStatus, undefined);
        }
    });
};

var createPlist =  function(phones, list) {
    var plist = [];
    for(var i=0;i<list.length;i++) {
        plist[i] = phones[i];
    }
    return plist;
}

var app = angular.module('phonecatApp', []);

app.config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[~').endSymbol('~]');
    }
);

//app.controller('PhoneListCtrl', function($scope, $http) {
//    $http.get('phones/phones.json').success(function(data) {
//        $scope.phones = data;
//    });
//
//    alert("controller");
//    $scope.orderProp = 'age';
//});

//app.config(function($controllerProvider) {
//    $appControllerProvider = $controllerProvider; //cache this so that we can lazy load controllers
//
//});
app.factory('loadComp', function($http, $q) {
    return {
        loadComponent: function(compData) {
            var deferred = $q.defer();

            $http.get(compData.url).then(function(response) {
                deferred.resolve(response.data);
            });

            return deferred.promise;
        }
    }
});

app.directive('lazycomp', function(loadComp, $compile, $q) {
    return {
        restrict: 'A',
        transclude: true,
        link: function(scope, element, attrs) {
            alert("lazycomp");
            var compData = eval(attrs.lazycomp);
            loadComp.loadComponent(compData).then(function(phoneData) {

                var plist = {'plist': createPlist(phoneData,compData.data)};

                dust.render(compData.tmpl,plist, function(err, out) {
                    if(err) {
                        alert(err);
                    }
                    var ngInc = angular.element('<div>'+out+'</div>');
                    element.append(ngInc);
                    $compile(ngInc)(scope);
                });
            });
        } //link
    };
});