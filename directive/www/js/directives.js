angular.module('starter.directives', [])

.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'templates/hello-world.html'
    }
})

.directive('linkTest', function() {
    return {
        scope: true,
        restrict: 'AE',
        replace: true,
        templateUrl: 'templates/link-test.html'
    }
})