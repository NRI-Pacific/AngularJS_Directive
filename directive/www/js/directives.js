angular.module('starter.directives', [])

.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<h1>Hello World!</h1>'
    }
})